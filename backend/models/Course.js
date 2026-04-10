import mongoose from "mongoose";

const lectureSchema = new mongoose.Schema({
  title: { type: String, required: true },
  videoUrl: { type: String, required: true },
  releaseDate: { type: Date, required: true },
});

const noteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  fileUrl: { type: String, required: true },
  releaseDate: { type: Date, required: true },
});

const quizSchema = new mongoose.Schema({
  questions: [{ question: String, options: [String], answer: String }],
  releaseDate: { type: Date, required: true },
});

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  originalPrice: { type: Number },
  instructorId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  studentsEnrolled: { type: Number, default: 0 },
  rating: { type: Number, default: 0 },
  thumbnail: { type: String },
  description: { type: String },
  duration: { type: String },

  lectures: [lectureSchema],
  notes: [noteSchema],
  quizzes: [quizSchema],

  certificates: [
    {
      courseTitle: String,
      certificateImage: String,
    },
  ],
  projects: [
    {
      title: String,
      desc: String,
      image: String,
    },
  ],
  curriculum: {
    beginner: [String],
    intermediate: [String],
    advanced: [String],
  },
  outcomes: [String],
  certificate: { type: Boolean, default: false },
  status: { type: String, enum: ["pending", "approved"], default: "pending" },
});

const Course = mongoose.model("Course", courseSchema);
export default Course;
