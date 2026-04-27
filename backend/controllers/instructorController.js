import Course from "../models/Course.js";
import User from "../models/User.js";

export const createCourse = async (req, res) => {
  try {
    const course = new Course({ ...req.body, instructorId: req.user._id });
    await course.save();
    res.status(201).json(course);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getInstructorCourses = async (req, res) => {
  try {
     console.log("Logged in user:", req.user); 
    const courses = await Course.find({ instructorId: req.user._id });
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: "Error fetching courses", details: err.message });
  }
};

export const updateCourse = async (req, res) => {
  const course = await Course.findById(req.params.id);
  if (!course) return res.status(404).json({ message: "Course not found" });

  if (course.instructorId.toString() !== req.user._id.toString()) {
    return res.status(403).json({ message: "Not authorized" });
  }

  Object.assign(course, req.body);
  await course.save();
  res.json(course);
};


export const getInstructorProfile = async (req, res) => {
  try {
    const instructor = await User.findById(req.user._id).select("-password");
    if (!instructor) return res.status(404).json({ error: "Instructor not found" });
    res.json(instructor);
  } catch (err) {
    res.status(500).json({ error: "Error fetching profile", details: err.message });
  }
};

export const updateInstructorProfile = async (req, res) => {
  try {
    const instructor = await User.findById(req.user._id);
    if (!instructor) return res.status(404).json({ error: "Instructor not found" });

    const fields = ["firstName", "lastName", "bio", "qualification", "specialization"];
    fields.forEach((field) => {
      if (req.body[field] !== undefined) instructor[field] = req.body[field];
    });

    await instructor.save();
    res.json({ message: "Profile updated successfully", instructor });
  } catch (err) {
    res.status(500).json({ error: "Error updating profile", details: err.message });
  }
};


export const getInstructorStudents = async (req, res) => {
  try {
    const courses = await Course.find({ instructorId: req.user._id }).populate("studentsEnrolled");

   
    let students = [];
    for (const course of courses) {

      const enrolled = await User.find({ _id: { $in: course.studentsEnrolled } }).select("name email");
      students.push(...enrolled.map(s => ({
        ...s.toObject(),
        courseTitle: course.title,
        progress: 0 
      })));
    }

    res.json(students);
  } catch (err) {
    res.status(500).json({ error: "Error fetching students", details: err.message });
  }
};
