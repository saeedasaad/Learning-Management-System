import Course from "../models/Course.js";
import mongoose from "mongoose";
import Enrollment from "../models/Enrollment.js";
import Payment from "../models/Payment.js";
import User from "../models/User.js";
import Stripe from "stripe";
import keys from "../config/keys.js";

const stripeSecretKey = keys.stripeSecretKey;

if (!stripeSecretKey) {
  throw new Error("Stripe secret key not found in environment variables");
}

const stripe = new Stripe(stripeSecretKey, {
  apiVersion: "2022-11-15",
});

// Activities
export const getActivities = async (req, res) => {
  try {
    const enrollments = await Enrollment.find({ user: req.user._id }).populate(
      "course",
    );
    const activities = enrollments.map((e) => ({
      courseTitle: e.course.title,
      quizzes: e.course.modules.map((m) => m.quiz),
      exercises: e.course.exercises || [],
    }));
    res.json(activities);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Error fetching activities", details: err.message });
  }
};

// Course Details
export const getCourseDetails = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ error: "Course not found" });

    const today = new Date();
    const lectures = course.lectures.filter((l) => l.releaseDate <= today);
    const notes = course.notes.filter((n) => n.releaseDate <= today);
    const quizzes = course.quizzes.filter((q) => q.releaseDate <= today);

    res.json({ ...course.toObject(), lectures, notes, quizzes });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Error fetching course details", details: err.message });
  }
};

// My Courses
export const getMyCourses = async (req, res) => {
  try {
    const enrollments = await Enrollment.find({ user: req.user.id }).populate(
      "course",
    );
    res.json(enrollments);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Error fetching courses", details: err.message });
  }
};

// Progress
export const getProgress = async (req, res) => {
  try {
    const enrollments = await Enrollment.find({ user: req.user.id }).populate(
      "course",
    );
    const progress = enrollments.map((e) => ({
      course: e.course.title,
      progress: e.progress,
      results: e.results,
    }));
    res.json(progress);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Error fetching progress", details: err.message });
  }
};

// Enroll Course
export const enrollCourse = async (req, res) => {
  try {
    const course = await Course.findOne({ id: req.params.courseId });
    if (!course) return res.status(404).json({ error: "Course not found" });

    await Enrollment.create({
      user: req.user._id,
      course: course._id,
      status: "pending",
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: { name: course.title },
            unit_amount: course.price * 100,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.CLIENT_URL}/student/dashboard`,
      cancel_url: `${process.env.CLIENT_URL}/courses/${course.id}`,
      client_reference_id: req.user._id.toString(),
      metadata: { courseId: course._id.toString() },
    });

    console.log("Returning session URL:", session.url);


    res.json({ url: session.url });
  } catch (err) {
    console.error("Error enrolling:", err);
    res.status(500).json({ error: "Error enrolling in course" });
  }
};


// Stripe Webhook
export const stripeWebhook = async (req, res) => {
  const sig = req.headers["stripe-signature"];
  let event;

  try {
    console.log("Raw body type:", typeof req.body);
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
    console.log("Webhook event received:", event.type);
    console.log("Session object:", event.data.object);

  } catch (err) {
    console.error(" Webhook signature verification failed:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  console.log(" Webhook event received:", event.type);

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;


    console.log("Webhook session object:", session);
    console.log("Looking for enrollment with user:", session.client_reference_id, "course:", session.metadata.courseId);

    const enrollment = await Enrollment.findOne({
      user: new mongoose.Types.ObjectId(session.client_reference_id),
      course: new mongoose.Types.ObjectId(session.metadata.courseId),
    });

    if (enrollment) {
      enrollment.status = "active";
      await enrollment.save();

      await Payment.create({
        user: enrollment.user,
        course: enrollment.course,
        amount: session.amount_total / 100,
        status: "success",
        stripeId: session.id,
      });

      console.log(" Payment successful for session:", session.id);
    } else {
      console.error("Enrollment not found for session:", session.id);
    }
  }

  res.json({ received: true });
};


// Get student profile
export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    if (!user) return res.status(404).json({ error: "User not found" });

    const enrolledCount = await Enrollment.countDocuments({
      user: req.user._id,
    });

    res.json({
      name: user.name,
      email: user.email,
      education: user.education || "",
      enrolledCount,
      firstName: user.firstName || "",
      lastName: user.lastName || "",
      gender: user.gender || "",
      dob: user.dob || "",
      address: user.address || "",
      city: user.city || "",
      country: user.country || "",
      qualification: user.qualification || "",
      specialization: user.specialization || "",
      freelancing: user.freelancing || false,
    });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Error fetching profile", details: err.message });
  }
};

export const updateProfile = async (req, res) => {
  try {
    console.log("req.body:", req.body);
    console.log("req.file:", req.file);

    const updateData = { ...req.body };

    if (req.body.name) {
      updateData.name = req.body.name;
    }

    if (req.file) {
      updateData.avatarUrl = `/uploads/avatars/${req.file.filename}`;
    }

    const user = await User.findByIdAndUpdate(
      req.user._id,
      { $set: updateData },
      { new: true, runValidators: true },
    );

    if (!user) return res.status(404).json({ error: "User not found" });

    res.json({ message: "Profile updated successfully", user });
  } catch (err) {
    console.error("Error updating profile:", err);
    res
      .status(500)
      .json({ error: "Error updating profile", details: err.message });
  }
};

// Get exercises
export const getExercises = async (req, res) => {
  try {
    const enrollments = await Enrollment.find({ user: req.user._id }).populate(
      "course",
    );

    const exercises = enrollments.flatMap((enrollment) =>
      (enrollment.course.exercises || []).map((ex) => ({
        _id: ex._id,
        title: ex.title,
        description: ex.description,
        fileUrl: ex.fileUrl,
        dueDate: ex.dueDate,
        marks: ex.marks,
        submitted: ex.submitted || false,
      })),
    );

    res.json(exercises);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Error fetching exercises", details: err.message });
  }
};

// Submit exercise PDF
export const submitExercise = async (req, res) => {
  try {
    const { exerciseId } = req.params;
    const filePath = `/uploads/exercises/${req.file.filename}`;

    const enrollment = await Enrollment.findOne({
      user: req.user._id,
    }).populate("course");
    const exercise = enrollment.course.exercises.id(exerciseId);

    if (!exercise) return res.status(404).json({ error: "Exercise not found" });

    exercise.submitted = true;
    exercise.pdfUrl = filePath;

    await enrollment.save();
    res.json({ message: "Exercise submitted successfully", exercise });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Error submitting exercise", details: err.message });
  }
};
