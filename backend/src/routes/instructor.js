import express from "express";
import { protect, instructorOnly } from "../middleware/authMiddleware.js";
import {
  createCourse,
  getInstructorCourses,
  updateCourse,
} from "../controllers/instructorController.js";

const router = express.Router();


router.post("/courses", protect, instructorOnly, createCourse);
router.get("/courses", protect, instructorOnly, getInstructorCourses);
router.patch("/courses/:id", protect, instructorOnly, updateCourse);

export default router;