import mongoose from "mongoose";

const enrollmentSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  courseId: { type: String, ref: "Course", required: true },
  progress: { type: Number, default: 0 }, // percentage completed
  status: { type: String, enum: ["enrolled", "completed"], default: "enrolled" },
}, { timestamps: true });

const Enrollment = mongoose.model("Enrollment", enrollmentSchema);
export default Enrollment;