import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema({
  exerciseId: { type: mongoose.Schema.Types.ObjectId, ref: "Course.exercises", required: true },
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  fileUrl: { type: String, required: true },
  marks: { type: Number, default: 0 },
  status: { type: String, enum: ["pending", "graded"], default: "pending" },
  submittedAt: { type: Date, default: Date.now },
});

const Submission = mongoose.model("Submission", submissionSchema);

export default Submission;
