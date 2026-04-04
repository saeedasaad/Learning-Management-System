import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["student", "instructor", "admin"], default: "student" },
  avatar: { type: String },            
  expertise: { type: String },        
  totalStudents: { type: Number, default: 0 },
  totalRevenue: { type: Number, default: 0 },
  createdCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }]
});

export default mongoose.model("User", userSchema);