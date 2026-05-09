import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Notification from "../models/Notification.js";

const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

// Student Registration
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ error: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword, role: "student" });
    await user.save();

    const token = generateToken(user._id, user.role);

    //  Create notifications
    await Notification.create({
      userId: user._id,
      role: "student",
      message: `Welcome, ${user.name}! Your account is active.`,
      type: "welcome"
    });

    await Notification.create({
      role: "admin",
      message: `New student registered: ${user.name}`,
      type: "registration"
    });

    res.json({
      message: "Student registered successfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      },
      token,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Login
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

    const token = generateToken(user._id, user.role);

    //  Create login notification
    await Notification.create({
      userId: user._id,
      role: user.role,
      message: `Login successful for ${user.name}`,
      type: "login"
    });

    res.json({
      message: "Login successful",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      },
      token,
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
