import express from "express";
import {
  getMyCourses,
  getCourseDetails,
  getActivities,
  getProgress,
  updateProfile,
  enrollCourse,
  stripeWebhook,
  submitExercise,
  getExercises,
  getProfile,
} from "../controllers/studentController.js";
import { protect } from "../middleware/authMiddleware.js";
import upload from "../middleware/upload.js";
import avatarUpload from "../middleware/avatarUpload.js";

const router = express.Router();

router.get("/courses", protect, getMyCourses);
router.get("/course/:id", protect, getCourseDetails);
router.get("/activities", protect, getActivities);
router.get("/exercises", protect, getExercises);
router.post(
  "/exercises/:exerciseId/submit",
  protect,
  upload.single("pdf"),
  submitExercise,
);
router.get("/progress", protect, getProgress);
router.get("/profile", protect, getProfile);
router.patch("/profile", protect, avatarUpload.single("avatar"), updateProfile);

router.post("/enroll/:courseId", protect, enrollCourse);
router.post("/payment/webhook", stripeWebhook);

export default router;
