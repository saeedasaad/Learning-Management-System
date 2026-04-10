import Course from "../models/Course.js";
import Enrollment from "../models/Enrollment.js";
import Payment from "../models/Payment.js";
import User from "../models/User.js";
import Stripe from "stripe";
import keys from "../config/keys.js";

// Safety check
if (!keys.stripeSecretKey) {
  throw new Error("Stripe secret key not found in environment variables");
}

// Initialize Stripe using keys.js
const stripe = new Stripe(keys.stripeSecretKey, {
  apiVersion: "2025-01-01",
});

// Get enrolled courses
export const getMyCourses = async (req, res) => {
  const enrollments = await Enrollment.find({ user: req.user._id }).populate("course");
  res.json(enrollments);
};

// Get course details with released content
export const getCourseDetails = async (req, res) => {
  const course = await Course.findById(req.params.id);
  if (!course) return res.status(404).json({ error: "Course not found" });

  const today = new Date();
  const lectures = course.lectures.filter(l => l.releaseDate <= today);
  const notes = course.notes.filter(n => n.releaseDate <= today);
  const quizzes = course.quizzes.filter(q => q.releaseDate <= today);

  res.json({ ...course.toObject(), lectures, notes, quizzes });
};

// Get activities
export const getActivities = async (req, res) => {
  const enrollments = await Enrollment.find({ user: req.user._id }).populate("course");
  const activities = enrollments.map(e => ({
    course: e.course.title,
    quizzes: e.course.quizzes,
    notes: e.course.notes,
  }));
  res.json(activities);
};

// Get progress
export const getProgress = async (req, res) => {
  const enrollments = await Enrollment.find({ user: req.user._id }).populate("course");
  const progress = enrollments.map(e => ({
    course: e.course.title,
    progress: e.progress,
    results: e.results,
  }));
  res.json(progress);
};

// Update profile
export const updateProfile = async (req, res) => {
  const user = await User.findById(req.user._id);
  if (!user) return res.status(404).json({ error: "User not found" });

  user.name = req.body.name || user.name;
  user.email = req.body.email || user.email;
  if (req.body.password) user.password = req.body.password;

  await user.save();
  res.json({ message: "Profile updated", user });
};

// Enroll course with Stripe checkout
export const enrollCourse = async (req, res) => {
  const course = await Course.findById(req.params.courseId);
  if (!course) return res.status(404).json({ error: "Course not found" });

  await Enrollment.create({
    user: req.user._id,
    course: course._id,
    status: "pending",
  });

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [{
      price_data: {
        currency: "usd",
        product_data: { name: course.title },
        unit_amount: course.price * 100,
      },
      quantity: 1,
    }],
    mode: "payment",
    success_url: `${process.env.CLIENT_URL}/student/dashboard`,
    cancel_url: `${process.env.CLIENT_URL}/courses/${course._id}`,
    client_reference_id: req.user._id.toString(),
  });

  res.json({ url: session.url });
};

// Stripe webhook
export const stripeWebhook = async (req, res) => {
  const event = req.body;

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const enrollment = await Enrollment.findOne({ user: session.client_reference_id });
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
};
