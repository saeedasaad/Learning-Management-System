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

//  Auth endpoints 
export const registerUser = async (userData) => {
  const { data } = await api.post("/auth/register", userData);
  return data;
};

export const loginUser = async (credentials) => {
  const { data } = await api.post("/auth/login", credentials);
  return data;
};

//  Student endpoints 
export const enrollCourse = async (courseId) => {
  const { data } = await api.post(`/student/enroll/${courseId}`);
  return data;
};

// Get Courses
export const getCourses = async () => {
  const { data } = await api.get("/courses");
  return data;
};

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


//  Instructor endpoints 
export const getInstructorProfile = async () => {
  const { data } = await api.get("/instructor/profile");
  return data;
};

export const updateInstructorProfile = async (formData) => {
  const { data } = await api.patch("/instructor/profile", formData);
  return data;
};

export const getInstructorCourses = async () => {
  const { data } = await api.get("/instructor/courses");
  return data;
};

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


export default api;
