import mongoose from "mongoose";

const lectureSchema = new mongoose.Schema({
  title: { type: String, required: true },
  videoUrl: { type: String, required: true },
  releaseDate: { type: Date, required: true },
  duration: { type: String },
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

const exerciseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  fileUrl: { type: String, required: true },   
  dueDate: { type: Date, required: true },
  marks: { type: Number, default: 0 },
  submitted: { type: Boolean, default: false }, 
  submissionFile: { type: String },             
});


const moduleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  pdfUrl: { type: String },
  lectures: [lectureSchema],
  quiz: quizSchema,
  exercise: exerciseSchema,   
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

  instructorId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

  studentsEnrolled: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],

  rating: { type: Number, default: 0 },
  description: { type: String, required: true },
  thumbnail: { type: String, required: true },
  duration: { type: String, required: true },

  modules: [moduleSchema],

  exercises: [exerciseSchema],

  questions: { type: String },
  certificates: [certificateSchema],
  projects: [projectSchema],

  curriculum: { beginner: [String], intermediate: [String], advanced: [String], },
  outcomes: [String],

  faqs: [
    {
      q: { type: String, required: true },
      a: { type: String, required: true },
    },
  ],
  glossary: [
    {
      term: { type: String, required: true },
      definition: { type: String, required: true },
    },
  ],
  completionCriteria: [String],

  certificate: { type: Boolean, default: false },
  status: { type: String, enum: ["pending", "approved"], default: "pending" },
});

const Course = mongoose.model("Course", courseSchema);

export default Course;
