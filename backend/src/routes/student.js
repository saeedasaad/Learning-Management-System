import express from "express";
import { protect, studentOnly } from "../middleware/authMiddleware.js";
import { enrollCourse, getEnrolledCourses, updateProgress } from "../controllers/studentController.js";

const router = express.Router();

router.post("/enroll/:courseId", protect, studentOnly, enrollCourse);
router.get("/courses", protect, studentOnly, getEnrolledCourses);
router.patch("/progress/:courseId", protect, studentOnly, updateProgress);

export default router;