import express from "express";
import {
  getMyCourses,
  getCourseDetails,
  getActivities,
  getProgress,
  updateProfile,
  enrollCourse,
  stripeWebhook
} from "../controllers/studentController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/courses", protect, getMyCourses);
router.get("/course/:id", protect, getCourseDetails);
router.get("/activities", protect, getActivities);
router.get("/progress", protect, getProgress);
router.patch("/profile", protect, updateProfile);

router.post("/enroll/:courseId", protect, enrollCourse);
router.post("/payment/webhook", stripeWebhook);

export default router;
