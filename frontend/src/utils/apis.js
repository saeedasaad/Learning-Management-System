import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
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

// Auth endpoints
export const registerUser = async (userData) => {
  const { data } = await api.post("/auth/register", userData);
  return data;
};

export const loginUser = async (credentials) => {
  const { data } = await api.post("/auth/login", credentials);
  return data;
};

// Student endpoints
export const enrollCourse = async (courseId) => {
  const { data } = await api.post(`/student/enroll/${courseId}`);
  return data;
};

export const getCourses = async () => {
  const { data } = await api.get("/courses");
  return data;
};

export const getCourseById = async (id) => {
  const { data } = await api.get(`/courses/${id}`);
  return data;
};

export const getCourseDetails = async (id) => {
  const { data } = await api.get(`/student/course/${id}`);
  return data;
};

export const getMyCourses = async () => {
  const { data } = await api.get("/student/courses");
  return data;
};

export const getProgress = async () => {
  const { data } = await api.get("/student/progress");
  return data;
};

export const getActivities = async () => {
  const { data } = await api.get("/student/activities");
  return data;
};

export const getExercises = async () => {
  const { data } = await api.get("/student/exercises");
  return data;
};

export const submitExercise = async (exerciseId, formData) => {
  const { data } = await api.post(
    `/student/exercises/${exerciseId}/submit`,
    formData,
    {
      headers: { "Content-Type": "multipart/form-data" },
    },
  );
  return data;
};

export default api;
