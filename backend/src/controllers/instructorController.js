import Course from "../models/Course.js";

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
  const courses = await Course.find({ instructorId: req.user._id });
  res.json(courses);
};

export const updateCourse = async (req, res) => {
  const course = await Course.findById(req.params.id);
  if (!course) return res.status(404).json({ message: "Course not found" });

  if (course.instructorId !== req.user._id.toString()) {
    return res.status(403).json({ message: "Not authorized" });
  }

  Object.assign(course, req.body);
  await course.save();
  res.json(course);
};