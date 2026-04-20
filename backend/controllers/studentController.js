import Course from "../models/Course.js";
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
      course: e.course.title,
      quizzes: e.course.quizzes,
      notes: e.course.notes,
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
    });

    res.json({ url: session.url });
  } catch (err) {
    console.error("Error enrolling:", err);
    res.status(500).json({ error: "Error enrolling in course" });
  }
};

// Stripe Webhook
export const stripeWebhook = async (req, res) => {
  try {
    const event = req.body;

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      const enrollment = await Enrollment.findOne({
        user: session.client_reference_id,
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
      }
    }

    res.json({ received: true });
  } catch (err) {
    console.error("Stripe webhook error:", err.message);
    res
      .status(500)
      .json({ error: "Webhook handling failed", details: err.message });
  }
};

// Update Profile
export const updateProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ error: "User not found" });

    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }

    await user.save();
    res.json({ message: "Profile updated", user });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Error updating profile", details: err.message });
  }
};
