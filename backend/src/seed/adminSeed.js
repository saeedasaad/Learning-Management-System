import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import User from "../models/User.js";
import connectDB from "../config/db.js";

dotenv.config();

const seedAdmin = async () => {
  try {
    await connectDB();

    const adminEmail = "admin@gmail.com";
    const adminPassword = "Admin@123"; 
    const existingAdmin = await User.findOne({ email: adminEmail });

    if (existingAdmin) {
      console.log(" Admin already exists");
      process.exit();
    }

    const hashedPassword = await bcrypt.hash(adminPassword, 10);

    const adminUser = new User({
      name: "System Admin",
      email: adminEmail,
      password: hashedPassword,
      role: "admin",
    });

    await adminUser.save();
    console.log("Admin user created successfully");
    process.exit();
  } catch (err) {
    console.error(" Error seeding admin:", err.message);
    process.exit(1);
  }
};

seedAdmin();