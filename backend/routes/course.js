import express from "express";
import Course from "../models/Course.js";

const router = express.Router();

// Get all approved courses
router.get("/", async (req, res) => {
  try {
    const courses = await Course.find({ status: "approved" });
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: "Error fetching courses" });
  }
});

// Get course by custom id field
router.get("/:_id", async (req, res) => {
  try {
    const course = await Course.findOne({ _id: req.params._id });
    if (!course) return res.status(404).json({ message: "Course not found" });
    res.json(course);
  } catch (err) {
    res.status(500).json({ message: "Invalid course ID" });
  }
});

export default router;
