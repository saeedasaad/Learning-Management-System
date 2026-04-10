import express from "express";
import Course from "../models/Course.js";

const router = express.Router();

// Public route: get all approved courses
router.get("/", async (req, res) => {
  const courses = await Course.find({ status: "approved" });
  res.json(courses);
});

// Public route: get course by ID
router.get("/:id", async (req, res) => {
  const course = await Course.findById(req.params.id);
  if (!course) return res.status(404).json({ message: "Course not found" });
  res.json(course);
});

export default router;