import ChatMessage from "../models/ChatMessage.js";
import Notification from "../models/Notification.js";

// Send a new chat message
export const sendMessage = async (req, res) => {
  try {
    const { receiverId, message } = req.body;

    if (!receiverId || !message) {
      return res.status(400).json({ error: "Receiver and message are required" });
    }

    const newMessage = new ChatMessage({
      senderId: req.user._id,
      receiverId,
      message,
    });

    await newMessage.save();

    // Create notification for receiver
    await Notification.create({
      userId: receiverId,
      role: "student", 
      message: "You have a new chat message.",
      type: "chat",
    });

    res.status(201).json({ message: "Message sent successfully", newMessage });
  } catch (err) {
    res.status(500).json({ error: "Error sending message", details: err.message });
  }
};

// Get all messages between two users (Inbox)
export const getMessages = async (req, res) => {
  try {
    const { userId } = req.params;

    const messages = await ChatMessage.find({
      $or: [
        { senderId: req.user._id, receiverId: userId },
        { senderId: userId, receiverId: req.user._id },
      ],
    }).sort({ createdAt: 1 });

    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: "Error fetching messages", details: err.message });
  }
};

// Get all course-based messages (Discussions)
export const getCourseMessages = async (req, res) => {
  try {
    const { courseId } = req.params;

    const messages = await ChatMessage.find({ courseId }).sort({ createdAt: 1 });

    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: "Error fetching course messages", details: err.message });
  }
};

// Mark a message as seen
export const markMessageAsSeen = async (req, res) => {
  try {
    const { messageId } = req.params;

    const message = await ChatMessage.findById(messageId);
    if (!message) return res.status(404).json({ error: "Message not found" });

    message.isSeen = true;
    await message.save();

    res.json({ message: "Message marked as seen", message });
  } catch (err) {
    res.status(500).json({ error: "Error updating message", details: err.message });
  }
};
