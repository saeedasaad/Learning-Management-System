import mongoose from "mongoose";

const chatMessageSchema = new mongoose.Schema({
  senderId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  receiverId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  courseId: { type: String, ref: "Course" }, 
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
}, { timestamps: true });

const ChatMessage = mongoose.model("ChatMessage", chatMessageSchema);
export default ChatMessage;