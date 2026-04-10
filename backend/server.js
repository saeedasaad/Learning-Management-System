
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import { logger } from "./utils/logger.js";

// Routes
import authRoutes from "./routes/auth.js";
import adminRoutes from "./routes/admin.js";
import instructorRoutes from "./routes/instructor.js";
import studentRoutes from "./routes/student.js";
import courseRoutes from "./routes/course.js";

import { stripeWebhook } from "./controllers/studentController.js";

const app = express();

// Connect DB
connectDB();

// Middleware
app.use(cors());
app.use(logger);

// Stripe webhook (raw body required)
app.post(
  "/api/student/payment/webhook",
  express.raw({ type: "application/json" }),
  stripeWebhook
);

// JSON parser
app.use(express.json());

// Static uploads
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/instructor", instructorRoutes);
app.use("/api/student", studentRoutes);
app.use("/api/courses", courseRoutes);

// Error handlers
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
