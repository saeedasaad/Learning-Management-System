import express from "express";
import { loginUser, registerUser } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", registerUser);   // students only
router.post("/login", loginUser);         // all roles

export default router;