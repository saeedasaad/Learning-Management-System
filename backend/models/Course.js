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
  id: { type: String, required: true, unique: true },   // custom course ID
  title: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  originalPrice: { type: Number },
  instructorId: { type: String, required: true },       // stored as String
  studentsEnrolled: { type: Number, default: 0 },
  rating: { type: Number, default: 0 },
  thumbnail: { type: String },
  description: { type: String },
  duration: { type: String },

  lectures: [lectureSchema],
  notes: [noteSchema],
  quizzes: [quizSchema],

  modules: { type: String },
  questions: { type: String },

  certificates: [
    {
      courseTitle: { type: String },
      certificateImage: { type: String },
    },
  ],
  projects: [
    {
      title: { type: String },
      desc: { type: String },
      image: { type: String },
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
