import express from "express";
import {
  sendCourseMessage,
  getCourseMessages,
} from "../controllers/discussionController.js";
import { protect, instructorOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/:courseId", protect, sendCourseMessage);
router.get("/:courseId", protect, getCourseMessages);

export default router;
