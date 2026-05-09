import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { createServer } from "http";
import { Server } from "socket.io";

import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import { logger } from "./utils/logger.js";

// Routes
import authRoutes from "./routes/auth.js";
import adminRoutes from "./routes/admin.js";
import instructorRoutes from "./routes/instructor.js";
import studentRoutes from "./routes/student.js";
import courseRoutes from "./routes/course.js";
import chatRoutes from "./routes/chat.js";            
import notificationRoutes from "./routes/notification.js"; 

// Controllers
import { stripeWebhook } from "./controllers/studentController.js";

dotenv.config();

const app = express();
const server = createServer(app); // wrap express in http server

// Connect DB
connectDB();

// Middleware
app.use(cors());
app.use(logger);

// Stripe webhook route (raw body required)
app.post(
  "/api/payment/webhook",
  express.raw({ type: "application/json" }),
  (req, res, next) => {
    stripeWebhook(req, res, next);
  }
);

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
app.use("/api/chat", chatRoutes);                  
app.use("/api/notifications", notificationRoutes);  

// Error handlers
app.use(notFound);
app.use(errorHandler);

// Socket.io setup
const io = new Server(server, {
  cors: { origin: "*" },
});

io.on("connection", (socket) => {
  console.log("⚡ User connected:", socket.id);

  // Join personal room (userId)
  socket.on("joinRoom", (room) => {
    socket.join(room);
  });

  // Chat messages
  socket.on("sendMessage", (data) => {
    io.to(data.receiverId).emit("message:new", data);
  });

  // Notifications
  socket.on("sendNotification", (data) => {
    io.to(data.userId).emit("notification:new", data);
  });

  socket.on("disconnect", () => {
    console.log(" User disconnected:", socket.id);
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(` Server running on port ${PORT}`));
