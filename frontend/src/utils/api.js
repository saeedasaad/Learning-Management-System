import axios from "axios";

// Use Vite environment variable
const api = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/api`, 
});

// Attach token automatically
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
    console.log("Auth header being sent:", config.headers.Authorization);
  }
  return config;
});

// AUTH 
// Register User 
export const registerUser = async (userData) => {
  const { data } = await api.post("/auth/register", userData);
  return data;
};

// login User
export const loginUser = async (credentials) => {
  const { data } = await api.post("/auth/login", credentials);
  return data;
};

//  STUDENT
//  Enroll Course 
export const enrollCourse = async (courseId) => {
  const { data } = await api.post(`/student/enroll/${courseId}`);
  return data;
};

// Get Courses
export const getCourses = async () => {
  const { data } = await api.get("/courses");
  return data;
};

// Get Course By Id
export const getCourseById = async (id) => {
  const { data } = await api.get(`/courses/${id}`);
  return data;
};

// Get Course Details
export const getCourseDetails = async (id) => {
  const { data } = await api.get(`/student/course/${id}`);
  return data;
};

// Get MYCourses
export const getMyCourses = async () => {
  const { data } = await api.get("/student/courses");
  return data;
};

// Get progress
export const getProgress = async () => {
  const { data } = await api.get("/student/progress");
  return data;
};

// Get Activities
export const getActivities = async () => {
  const { data } = await api.get("/student/activities");
  return data;
};

// Get Exercises
export const getExercises = async () => {
  const { data } = await api.get("/student/exercises");
  return data;
};

// Submit Exercise
export const submitExercise = async (exerciseId, formData) => {
  const { data } = await api.post(
    `/student/exercises/${exerciseId}/submit`,
    formData,
    {
      headers: { "Content-Type": "multipart/form-data" },
    }
  );
  return data;
};

// GetQuizzes
export const getQuizzes = async () => {
  const { data } = await api.get("/student/quizzes");
  return data;
};

//  INSTRUCTOR 
//  Get Instructor Profile
export const getInstructorProfile = async () => {
  const { data } = await api.get("/instructor/profile");
  return data;
};

// Update Instructors profile
export const updateInstructorProfile = async (formData) => {
  const { data } = await api.patch("/instructor/profile", formData);
  return data;
};

// Get Instructor Courses
export const getInstructorCourses = async () => {
  const { data } = await api.get("/instructor/courses");
  return data;
};

// NOTIFICATION
// Get notifications for logged-in user
export const getNotifications = async (userId) => {
  const { data } = await api.get(`/notifications/${userId}`);
  return data;
};

// Mark notification as read
export const markNotificationAsRead = async (id) => {
  const { data } = await api.patch(`/notifications/${id}/read`);
  return data;
};

// CHAT
// Get private messages for a user
export const getMessages = async (userId) => {
  const { data } = await api.get(`/chat/${userId}`);
  return data;
};

// Send Message
export const sendMessage = async (receiverId, message) => {
  const { data } = await api.post("/chat", { receiverId, message });
  return data;
};

// Mark Message As Seen
export const markMessageAsSeen = async (messageId) => {
  const { data } = await api.patch(`/chat/${messageId}/seen`);
  return data;
};

// COURSE DISCUSSIONS
// Get Course Messages
export const getCourseMessages = async (courseId) => {
  const { data } = await api.get(`/discussions/${courseId}`);
  return data;
};

// Send Course Message
export const sendCourseMessage = async (courseId, message) => {
  const { data } = await api.post(`/discussions/${courseId}`, { message });
  return data;
};

export default api;
