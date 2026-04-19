import Course from "../models/Course.js";

// Get all approved courses
export const getCourses = async (req, res) => {
  try {
    const courses = await Course.find({ status: "approved" });
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get course by custom ID
export const getCourseById = async (req, res) => {
  try {
    const course = await Course.findOne({ id: req.params.id }); 
    if (!course) return res.status(404).json({ message: "Course not found" });
    res.json(course);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Search courses by category
export const getCoursesByCategory = async (req, res) => {
  try {
    const courses = await Course.find({ category: req.params.category, status: "approved" });
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};