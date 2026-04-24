import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["student", "instructor", "admin"],
    default: "student",
  },

  // Profile fields
  avatarUrl: { type: String },
  gender: { type: String },
  dob: { type: String },
  address: { type: String },
  city: { type: String },
  country: { type: String },
  qualification: { type: String },
  specialization: { type: String },
  freelancing: { type: Boolean, default: false },

  // Instructor stats
  expertise: { type: String },
  totalStudents: { type: Number, default: 0 },
  totalRevenue: { type: Number, default: 0 },
  createdCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
});

export default mongoose.model("User", userSchema);
