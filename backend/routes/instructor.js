import express from "express";
import { protect, instructorOnly } from "../middleware/authMiddleware.js";
import {
  createCourse,
  getInstructorCourses,
  updateCourse,
  getInstructorProfile,
  updateInstructorProfile,
  getInstructorStudents,

} from "../controllers/instructorController.js";

const router = express.Router();

// router.post("/courses", protect, instructorOnly, createCourse);
router.get("/courses", protect, instructorOnly, getInstructorCourses);
router.get("/instructor/courses", protect, instructorOnly, getInstructorCourses);
router.patch("/courses/:id", protect, instructorOnly, updateCourse);
router.get("/students", protect, instructorOnly, getInstructorStudents);

router.get("/profile", protect, instructorOnly, getInstructorProfile);
router.patch("/profile", protect, instructorOnly, updateInstructorProfile);

export default router;
