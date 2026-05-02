import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import { logger } from "./utils/logger.js";

// Routes
import authRoutes from "./routes/auth.js";
import adminRoutes from "./routes/admin.js";
import instructorRoutes from "./routes/instructor.js";
import studentRoutes from "./routes/student.js";
import courseRoutes from "./routes/course.js";
// import notificationRoutes from "./routes/notification.js";

// Controllers
import { stripeWebhook } from "./controllers/studentController.js";

dotenv.config();

const app = express();

// Connect DB
connectDB();

// Middleware
app.use(cors());
app.use(logger);

//  Stripe webhook route 
app.post("/api/payment/webhook", express.raw({ type: "application/json" }), (req, res, next) => {
  req.body = req.body; 
  stripeWebhook(req, res, next);
});



// JSON parser for all other routes
app.use(express.json());

// Static uploads
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/instructor", instructorRoutes);
app.use("/api/student", studentRoutes);
app.use("/api/courses", courseRoutes);
// app.use("/api/notifications", notificationRoutes);

// Error handlers
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
