import express from "express";
import {
  createNotification,
  getUserNotifications,
  markNotificationAsRead,
} from "../controllers/notificationController.js";
import { protect } from "../middleware/authMiddleware.js"; 

const router = express.Router();

router.post("/", protect, createNotification);
router.get("/:userId", protect, getUserNotifications);
router.patch("/:id/read", protect, markNotificationAsRead);

export default router;
