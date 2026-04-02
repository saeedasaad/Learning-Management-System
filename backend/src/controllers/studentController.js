import Enrollment from "../models/Enrollment.js";
import Course from "../models/Course.js";

export const enrollCourse = async (req, res) => {
  try {
    const enrollment = new Enrollment({
      studentId: req.user._id,
      courseId: req.params.courseId,
    });
    await enrollment.save();
    res.status(201).json(enrollment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getEnrolledCourses = async (req, res) => {
  const enrollments = await Enrollment.find({ studentId: req.user._id }).populate("courseId");
  res.json(enrollments);
};

export const updateProgress = async (req, res) => {
  const enrollment = await Enrollment.findOne({ studentId: req.user._id, courseId: req.params.courseId });
  if (!enrollment) return res.status(404).json({ message: "Enrollment not found" });

  enrollment.progress = req.body.progress;
  await enrollment.save();
  res.json(enrollment);
};