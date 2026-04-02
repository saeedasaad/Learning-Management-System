import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  courseId: { type: String, ref: "Course", required: true },
  amount: { type: Number, required: true },
  status: { type: String, enum: ["pending", "paid"], default: "paid" },
}, { timestamps: true });

const Payment = mongoose.model("Payment", paymentSchema);
export default Payment;