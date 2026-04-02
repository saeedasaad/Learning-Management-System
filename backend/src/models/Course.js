import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  title: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  instructorId: { type: String, required: true },
  studentsEnrolled: { type: Number, default: 0 },
  rating: { type: Number, default: 0 },
  thumbnail: { type: String },
  description: { type: String },
  status: { type: String, enum: ["pending", "approved"], default: "pending" }
});

const Course = mongoose.model("Course", courseSchema);
export default Course;