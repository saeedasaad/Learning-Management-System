import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import User from "../models/User.js";
import connectDB from "../config/db.js";

dotenv.config();

const instructors = [
  {
    name: "Ryan Carter",
    email: "ryan@gmail.com",
    password: "Ryan@123", 
    role: "instructor",
    expertise: "MERN Stack Development",
  },
  {
    name: "Vikram Joshi",
    email: "vikram@gmail.com",
    password: "Vikram@123",
    role: "instructor",
    expertise: "React & Frontend",
  },
  {
    name: "Meera Iyer",
    email: "meera@gmail.com",
    password: "Meera@123",
    role: "instructor",
    expertise: "Node & Backend",
  },
  {
    name: "Vikram Joshi",
    email: "vikram@gmail.com",
    password: "VikramUX@123",
    role: "instructor",
    expertise: "UI/UX Design",
  },
  {
    name: "Pooja Nair",
    email: "pooja@gmail.com",
    password: "Pooja@123",
    role: "instructor",
    expertise: "DevOps & Deployment",
  },
  {
    name: "Arjun Rao",
    email: "arjun@gmail.com",
    password: "Arjun@123",
    role: "instructor",
    expertise: "Data Science",
  },
];

const seedInstructors = async () => {
  try {
    await connectDB();

    for (const inst of instructors) {
      const existing = await User.findOne({ email: inst.email });
      if (!existing) {
        const hashedPassword = await bcrypt.hash(inst.password, 10);
        const newInstructor = new User({
          name: inst.name,
          email: inst.email,
          password: hashedPassword,
          role: inst.role,
        });
        await newInstructor.save();
        console.log(`Instructor ${inst.name} created`);
      } else {
        console.log(`Instructor ${inst.name} already exists`);
      }
    }

    process.exit();
  } catch (err) {
    console.error("Error seeding instructors:", err.message);
    process.exit(1);
  }
};

seedInstructors();