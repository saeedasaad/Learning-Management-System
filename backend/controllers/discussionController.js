import CourseMessage from "../models/CourseMessage.js";

export const sendCourseMessage = async (req, res) => {
  try {
    const { courseId, message } = req.body;

    const newMessage = new CourseMessage({
      courseId,
      senderId: req.user._id,
      message,
    });

    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (err) {
    res.status(500).json({ error: "Error sending course message", details: err.message });
  }
};

export const getCourseMessages = async (req, res) => {
  try {
    const { courseId } = req.params;
    const messages = await CourseMessage.find({ courseId }).sort({ createdAt: 1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: "Error fetching course messages", details: err.message });
  }
};
