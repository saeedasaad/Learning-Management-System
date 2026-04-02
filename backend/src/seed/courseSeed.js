import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "../config/db.js";
import Course from "../models/Course.js"; 

dotenv.config();

export const courses = [
  {
    _id: "course_101",
    title: "Complete MERN Stack Development",
    category: "Web Development",
    price: 2999,
    instructorId: "inst_001", 
    studentsEnrolled: 520,
    rating: 4.8,
    // thumbnail: "C_img_1", 
    description:
      "Learn to build full-stack applications using MongoDB, Express, React, and Node.js. Covers basics to advanced deployment strategies.",
  },
  {
    _id: "course_102",
    title: "Advanced React Masterclass",
    category: "Frontend",
    price: 2499,
    instructorId: "inst_002",
    studentsEnrolled: 410,
    rating: 4.7,
    // thumbnail: "C_img_2",
    description:
      "Master advanced React concepts including hooks, context API, performance optimization, and building scalable frontend applications.",
  },
  {
    _id: "course_103",
    title: "Node.js & Express Bootcamp",
    category: "Backend",
    price: 1999,
    instructorId: "inst_003",
    studentsEnrolled: 380,
    rating: 4.6,
    // thumbnail: "C_img_3",
    description:
      "Dive deep into backend development with Node.js and Express. Learn to build REST APIs, handle authentication, and manage databases effectively.",
  },
  {
    _id: "course_104",
    title: "UI/UX Design Fundamentals",
    category: "Design",
    price: 1799,
    instructorId: "inst_004",
    studentsEnrolled: 300,
    rating: 4.5,
    // thumbnail: "C_img_4",
    description:
      "Understand the principles of user interface and user experience design. Learn visual hierarchy, wireframing, prototyping, and accessibility best practices.",
  },
  {
    _id: "course_105",
    title: "DevOps & Cloud Deployment",
    category: "DevOps",
    price: 3499,
    instructorId: "inst_005",
    studentsEnrolled: 290,
    rating: 4.7,
    // thumbnail: "C_img_5",
    description:
      "Gain expertise in DevOps workflows and cloud deployment. Learn CI/CD pipelines, containerization with Docker, and deploying applications on cloud platforms.",
  },
  {
    _id: "course_106",
    title: "Data Science with Python",
    category: "Data Science",
    price: 3999,
    instructorId: "inst_006",
    studentsEnrolled: 340,
    rating: 4.9,
    // thumbnail: "C_img_6",
    description:
      "Explore data science concepts using Python. Learn data analysis, visualization, machine learning, and statistical modeling with hands-on projects.",
  },
];

const seedCourses = async () => {
  try {
    await connectDB();

    for (const course of courses) {
      const existing = await Course.findOne({ _id: course._id });
      if (!existing) {
        const newCourse = new Course(course);
        await newCourse.save();
        console.log(`Course ${course.title} created`);
      } else {
        console.log(`Course ${course.title} already exists`);
      }
    }

    process.exit();
  } catch (err) {
    console.error("Error seeding courses:", err.message);
    process.exit(1);
  }
};

seedCourses();