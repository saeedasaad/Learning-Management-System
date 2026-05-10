import mongoose from "mongoose";

const courseMessageSchema = new mongoose.Schema({
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true },
  senderId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  message: { type: String, required: true },
}, { timestamps: true }); 

const CourseMessage = mongoose.model("CourseMessage", courseMessageSchema);
export default CourseMessage;
