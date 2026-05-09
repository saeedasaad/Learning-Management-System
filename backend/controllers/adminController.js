import User from "../models/User.js";
import Course from "../models/Course.js";
import Notification from "../models/Notification.js"; 

// Get all users
export const getUsers = async (req, res) => {
  const users = await User.find({});
  res.json(users);
};

// Update user status
export const updateUserStatus = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.status = req.body.status || user.status;
    await user.save();

    //  Notify the user about status update
    await Notification.create({
      userId: user._id,
      role: user.role,
      message: `Your account status has been updated to: ${user.status}`,
      type: "status"
    });

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Error updating user status", details: err.message });
  }
};

// Get all courses
export const getCourses = async (req, res) => {
  const courses = await Course.find({});
  res.json(courses);
};

// Approve course
export const approveCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ message: "Course not found" });

    course.status = "approved";
    await course.save();

    // Notify instructor
    await Notification.create({
      userId: course.instructorId,
      role: "instructor",
      message: `Your course "${course.title}" has been approved by Admin.`,
      type: "course"
    });

    //  Notify students (new course available)
    await Notification.create({
      role: "student",
      message: `New course available: "${course.title}"`,
      type: "course"
    });

    res.json(course);
  } catch (err) {
    res.status(500).json({ error: "Error approving course", details: err.message });
  }
};

// Get analytics
export const getAnalytics = async (req, res) => {
  const usersCount = await User.countDocuments();
  const coursesCount = await Course.countDocuments();
  res.json({ usersCount, coursesCount });
};
