import express from "express";
import { protect, adminOnly } from "../middleware/authMiddleware.js";
import {
  getUsers,
  updateUserStatus,
  getCourses,
  approveCourse,
  getAnalytics,
} from "../controllers/adminController.js";
import User from "../models/User.js";

const router = express.Router();

router.get("/users", protect, adminOnly, getUsers);
router.patch("/users/:id", protect, adminOnly, updateUserStatus);
router.get("/courses", protect, adminOnly, getCourses);
router.patch("/courses/:id/approve", protect, adminOnly, approveCourse);
router.get("/analytics", protect, adminOnly, getAnalytics);


router.get("/instructors", async (req, res) => {
  try {
    const instructors = await User.find({ role: "instructor" }).select(
      "-password -email" 
    );
    res.json(instructors);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch instructors" });
  }
});

export default router;