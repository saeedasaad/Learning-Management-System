const notificationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  role: { type: String, enum: ["student", "instructor", "admin"], required: true },
  message: { type: String, required: true },
  type: { type: String }, 
  isRead: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});
