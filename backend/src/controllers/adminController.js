import User from "../models/User.js";
import Course from "../models/Course.js";

export const getUsers = async (req, res) => {
  const users = await User.find({});
  res.json(users);
};

export const updateUserStatus = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ message: "User not found" });

  user.status = req.body.status || user.status;
  await user.save();
  res.json(user);
};

export const getCourses = async (req, res) => {
  const courses = await Course.find({});
  res.json(courses);
};

export const approveCourse = async (req, res) => {
  const course = await Course.findById(req.params.id);
  if (!course) return res.status(404).json({ message: "Course not found" });

  course.status = "approved";
  await course.save();
  res.json(course);
};

export const getAnalytics = async (req, res) => {
  const usersCount = await User.countDocuments();
  const coursesCount = await Course.countDocuments();
  res.json({ usersCount, coursesCount });
};