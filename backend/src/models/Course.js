import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  _id: { type: String, required: true },
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
  modules: { type: String },         
  questions: { type: String },       
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
  status: { type: String, enum: ["pending", "approved"], default: "pending" }
});

const Course = mongoose.model("Course", courseSchema);
export default Course;
