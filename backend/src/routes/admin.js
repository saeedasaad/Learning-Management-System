import express from "express";
import { protect, adminOnly } from "../middleware/authMiddleware.js";
import { getUsers, updateUserStatus, getCourses, approveCourse, getAnalytics } from "../controllers/adminController.js";

const router = express.Router();

router.get("/users", protect, adminOnly, getUsers);
router.patch("/users/:id", protect, adminOnly, updateUserStatus);
router.get("/courses", protect, adminOnly, getCourses);
router.patch("/courses/:id/approve", protect, adminOnly, approveCourse);
router.get("/analytics", protect, adminOnly, getAnalytics);

export default router;