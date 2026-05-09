import express from "express";
import {
  sendMessage,
  getMessages,
  getCourseMessages,
  markMessageAsSeen,
} from "../controllers/chatController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();


router.post("/", protect, sendMessage);
router.get("/:userId", protect, getMessages);
router.get("/course/:courseId", protect, getCourseMessages);
router.patch("/:messageId/seen", protect, markMessageAsSeen);

export default router;
