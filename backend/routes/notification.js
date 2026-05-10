import express from "express";
import {
  createNotification,
  getUserNotifications,
  markNotificationAsRead,
} from "../controllers/notificationController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();


router.post("/", protect, createNotification);
router.get("/:userId", protect, getUserNotifications);
router.get("/", protect, adminOnly, getUserNotifications);
router.patch("/:id/read", protect, markNotificationAsRead);

export default router;
