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
    avatar: "/uploads/instructors/Inst_image_1.png",
    expertise: "MERN Stack Development",
    totalStudents: 520,
    totalRevenue: 120000,
    createdCourses: [],
  },
  {
    name: "Vikram Joshi",
    email: "vikram@gmail.com",
    password: "Vikram@123",
    role: "instructor",
    avatar: "/uploads/instructors/Inst_image_2.png",
    expertise: "React & Frontend",
    totalStudents: 410,
    totalRevenue: 95000,
    createdCourses: [],
  },
  {
    name: "Meera Iyer",
    email: "meera@example.com",
    password: "Meera@123",
    role: "instructor",
    avatar: "/uploads/instructors/Inst_image_3.png",
    expertise: "Node & Backend",
    totalStudents: 380,
    totalRevenue: 87000,
    createdCourses: [],
  },
  {
    name: "Vikram Joshi",
    email: "vikram@example.com",
    password: "VikramUX@123",
    role: "instructor",
    avatar: "/uploads/instructors/Inst_image_4.png",
    expertise: "UI/UX Design",
    totalStudents: 300,
    totalRevenue: 65000,
    createdCourses: [],
  },
  {
    name: "Pooja Nair",
    email: "pooja@example.com",
    password: "Pooja@123",
    role: "instructor",
    avatar: "/uploads/instructors/Inst_image_5.png",
    expertise: "DevOps & Deployment",
    totalStudents: 290,
    totalRevenue: 60000,
    createdCourses: [],
  },
  {
    name: "Arjun Rao",
    email: "arjun@example.com",
    password: "Arjun@123",
    role: "instructor",
    avatar: "/uploads/instructors/Inst_image_6.png",
    expertise: "Data Science",
    totalStudents: 340,
    totalRevenue: 72000,
    createdCourses: [],
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
          ...inst,
          password: hashedPassword,
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