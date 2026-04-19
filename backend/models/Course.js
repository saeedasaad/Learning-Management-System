import mongoose from "mongoose";

const lectureSchema = new mongoose.Schema({
  title: { type: String, required: true },
  videoUrl: { type: String, required: true },
  releaseDate: { type: Date, required: true },
  duration: { type: String },
});

const noteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  fileUrl: { type: String, required: true },
  releaseDate: { type: Date, required: true },
});

const quizSchema = new mongoose.Schema({
  releaseDate: { type: Date, required: true },
  questions: [
    {
      question: { type: String, required: true },
      options: [{ type: String }],
      answer: { type: String, required: true },
    },
  ],
});

const moduleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  pdfUrl: { type: String },
  lectures: [lectureSchema],
  quiz: quizSchema,
});

const certificateSchema = new mongoose.Schema({
  courseTitle: { type: String },
  certificateImage: { type: String },
});

const projectSchema = new mongoose.Schema({
  title: { type: String },
  desc: { type: String },
  image: { type: String },
});

const courseSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  originalPrice: { type: Number },
  instructorId: { type: String, required: true },
  studentsEnrolled: { type: Number, default: 0 },
  rating: { type: Number, default: 0 },
  thumbnail: { type: String },
  description: { type: String },
  duration: { type: String },

  modules: [moduleSchema],

  questions: { type: String },
  certificates: [certificateSchema],
  projects: [projectSchema],

  curriculum: {
    beginner: [String],
    intermediate: [String],
    advanced: [String],
  },
  outcomes: [String],

  faqs: [
    {
      q: { type: String },
      a: { type: String },
    },
  ],
  glossary: [
    {
      term: { type: String },
      definition: { type: String },
    },
  ],
  completionCriteria: [String],

  certificate: { type: Boolean, default: false },
  status: { type: String, enum: ["pending", "approved"], default: "pending" },
});

const Course = mongoose.model("Course", courseSchema);

export default Course;
