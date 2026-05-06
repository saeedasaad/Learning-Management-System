import Course from "../models/Course.js";
import User from "../models/User.js";
import Enrollment from "../models/Enrollment.js";
import Submission from "../models/Submission.js";

// Create Course
export const createCourse = async (req, res) => {
  try {
    const course = new Course({ ...req.body, instructorId: req.user._id });
    await course.save();
    res.status(201).json(course);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get Instructor Courses
export const getInstructorCourses = async (req, res) => {
  try {
    // Fetch all courses created by the logged-in instructor
    const courses = await Course.find({ instructorId: req.user._id })
      .select("title category price duration description status rating modules");

    // Fetch enrollments for those courses
    const enrollments = await Enrollment.find({
      course: { $in: courses.map(c => c._id) }
    });

    // Attach enrolledCount to each course
    const coursesWithCounts = courses.map(c => {
      const enrolledCount = enrollments.filter(
        e => e.course.toString() === c._id.toString()
      ).length;
      return { ...c.toObject(), enrolledCount };
    });

    res.json(coursesWithCounts);
  } catch (err) {
    res.status(500).json({ error: "Error fetching courses", details: err.message });
  }
};


// Update Course
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

// Get Instructor Profile
export const getInstructorProfile = async (req, res) => {
  try {
    const instructor = await User.findById(req.user._id).select("-password");
    if (!instructor)
      return res.status(404).json({ error: "Instructor not found" });
    res.json(instructor);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Error fetching profile", details: err.message });
  }
};

// Update Instructor Profile
export const updateInstructorProfile = async (req, res) => {
  try {
    const instructor = await User.findById(req.user._id);
    if (!instructor)
      return res.status(404).json({ error: "Instructor not found" });

    const fields = [
      "firstName",
      "lastName",
      "bio",
      "qualification",
      "specialization",
    ];
    fields.forEach((field) => {
      if (req.body[field] !== undefined) instructor[field] = req.body[field];
    });

    await instructor.save();
    res.json({ message: "Profile updated successfully", instructor });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Error updating profile", details: err.message });
  }
};

// getInstructorStudents
export const getInstructorStudents = async (req, res) => {
  try {
    const courses = await Course.find({ instructorId: req.user._id }).select(
      "_id title",
    );

    const enrollments = await Enrollment.find({
      course: { $in: courses.map((c) => c._id) },
    })
      .populate("user", "name email")
      .populate("course", "title");

    const students = enrollments.map((enr) => ({
      name: enr.user.name,
      email: enr.user.email,
      courseTitle: enr.course.title,
      status: enr.status,
      progress: enr.progress,
    }));

    res.json(students);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Error fetching students", details: err.message });
  }
};

// Get Submissions
export const getSubmissions = async (req, res) => {
  try {
    const { exerciseId } = req.params;

    const submissions = await Submission.find({ exerciseId })
      .populate("studentId", "name email") 
      .populate("exerciseId", "title dueDate"); 

    res.json(submissions);
  } catch (err) {
    res.status(500).json({ error: "Error fetching submissions", details: err.message });
  }
};

// Grade Submission
export const gradeSubmission = async (req, res) => {
  try {
    const { submissionId } = req.params;
    const { marks, status } = req.body;

    const submission = await Submission.findById(submissionId);
    if (!submission) return res.status(404).json({ error: "Submission not found" });

    submission.marks = marks;
    submission.status = status || "graded";
    await submission.save();

    res.json({ message: "Submission graded successfully", submission });
  } catch (err) {
    res.status(500).json({ error: "Error grading submission", details: err.message });
  }
};

// Send message to student
export const sendMessageToStudent = async (req, res) => {
  try {
    const { studentId } = req.params;
    const { message } = req.body;

    const newMessage = new Message({
      sender: req.user._id,
      recipient: studentId,
      content: message,
      role: "instructor",
      createdAt: new Date(),
    });

    await newMessage.save();

    res.json({ message: "Message sent successfully", newMessage });
  } catch (err) {
    res.status(500).json({ error: "Error sending message", details: err.message });
  }
};

