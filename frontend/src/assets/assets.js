import heroBg from "./hero-bg.jpg";

export const heroData = {
  heroBg,
  title: "Guiding Your Path to Prosperity",
  subtitle:
    "Our experienced advisors are dedicated to guiding you through every step of your learning journey, offering personalized strategies that align with your goals and ambitions.",
  ctaPrimary: "Start Your Journey Today",
  linkPrimary: "/register",
};

export const callToActionData = {
  title: "Ready to start learning?",
  buttonText: "Join Now",
  link: "/register",
};

// ================= USERS =================

export const users = [
  // Students
  {
    _id: "user_001",
    name: "Rahul Sharma",
    email: "rahul@example.com",
    password: "hashed_password",
    role: "student",
    avatar: "/assets/avatars/user1.jpg",
    bio: "Passionate learner in full-stack development.",
    enrolledCourses: ["course_101", "course_102"],
    createdAt: "2026-03-01T10:00:00Z"
  },
  {
    _id: "user_002",
    name: "Priya Verma",
    email: "priya@example.com",
    password: "hashed_password",
    role: "student",
    avatar: "/assets/avatars/user2.jpg",
    bio: "Frontend enthusiast.",
    enrolledCourses: ["course_103"],
    createdAt: "2026-03-02T11:00:00Z"
  },
  {
    _id: "user_003",
    name: "Amit Patel",
    email: "amit@example.com",
    password: "hashed_password",
    role: "student",
    avatar: "/assets/avatars/user3.jpg",
    bio: "Learning backend systems.",
    enrolledCourses: ["course_101"],
    createdAt: "2026-03-03T09:30:00Z"
  },
  {
    _id: "user_004",
    name: "Sneha Kapoor",
    email: "sneha@example.com",
    password: "hashed_password",
    role: "student",
    avatar: "/assets/avatars/user4.jpg",
    bio: "Interested in UI/UX design.",
    enrolledCourses: ["course_104"],
    createdAt: "2026-03-04T08:20:00Z"
  },
  {
    _id: "user_005",
    name: "Karan Malhotra",
    email: "karan@example.com",
    password: "hashed_password",
    role: "student",
    avatar: "/assets/avatars/user5.jpg",
    bio: "DevOps learner.",
    enrolledCourses: ["course_105"],
    createdAt: "2026-03-05T07:10:00Z"
  },
  {
    _id: "user_006",
    name: "Neha Singh",
    email: "neha@example.com",
    password: "hashed_password",
    role: "student",
    avatar: "/assets/avatars/user6.jpg",
    bio: "Data science beginner.",
    enrolledCourses: ["course_106"],
    createdAt: "2026-03-06T06:15:00Z"
  }
];

// ================= INSTRUCTORS =================

export const instructors = [
  {
    _id: "inst_001",
    name: "Anjali Mehta",
    email: "anjali@example.com",
    role: "instructor",
    avatar: "/assets/instructors/inst1.jpg",
    expertise: "MERN Stack Development",
    totalStudents: 520,
    totalRevenue: 120000,
    createdCourses: ["course_101"]
  },
  {
    _id: "inst_002",
    name: "Rohit Kumar",
    email: "rohit@example.com",
    role: "instructor",
    avatar: "/assets/instructors/inst2.jpg",
    expertise: "React & Frontend",
    totalStudents: 410,
    totalRevenue: 95000,
    createdCourses: ["course_102"]
  },
  {
    _id: "inst_003",
    name: "Meera Iyer",
    email: "meera@example.com",
    role: "instructor",
    avatar: "/assets/instructors/inst3.jpg",
    expertise: "Node & Backend",
    totalStudents: 380,
    totalRevenue: 87000,
    createdCourses: ["course_103"]
  },
  {
    _id: "inst_004",
    name: "Vikram Joshi",
    email: "vikram@example.com",
    role: "instructor",
    avatar: "/assets/instructors/inst4.jpg",
    expertise: "UI/UX Design",
    totalStudents: 300,
    totalRevenue: 65000,
    createdCourses: ["course_104"]
  },
  {
    _id: "inst_005",
    name: "Pooja Nair",
    email: "pooja@example.com",
    role: "instructor",
    avatar: "/assets/instructors/inst5.jpg",
    expertise: "DevOps & Deployment",
    totalStudents: 290,
    totalRevenue: 60000,
    createdCourses: ["course_105"]
  },
  {
    _id: "inst_006",
    name: "Arjun Rao",
    email: "arjun@example.com",
    role: "instructor",
    avatar: "/assets/instructors/inst6.jpg",
    expertise: "Data Science",
    totalStudents: 340,
    totalRevenue: 72000,
    createdCourses: ["course_106"]
  }
];

// ================= COURSES =================

export const courses = [
  {
    _id: "course_101",
    title: "Complete MERN Stack Development",
    category: "Web Development",
    price: 2999,
    instructorId: "inst_001",
    studentsEnrolled: 520,
    rating: 4.8
  },
  {
    _id: "course_102",
    title: "Advanced React Masterclass",
    category: "Frontend",
    price: 2499,
    instructorId: "inst_002",
    studentsEnrolled: 410,
    rating: 4.7
  },
  {
    _id: "course_103",
    title: "Node.js & Express Bootcamp",
    category: "Backend",
    price: 1999,
    instructorId: "inst_003",
    studentsEnrolled: 380,
    rating: 4.6
  },
  {
    _id: "course_104",
    title: "UI/UX Design Fundamentals",
    category: "Design",
    price: 1799,
    instructorId: "inst_004",
    studentsEnrolled: 300,
    rating: 4.5
  },
  {
    _id: "course_105",
    title: "DevOps & Cloud Deployment",
    category: "DevOps",
    price: 3499,
    instructorId: "inst_005",
    studentsEnrolled: 290,
    rating: 4.7
  },
  {
    _id: "course_106",
    title: "Data Science with Python",
    category: "Data Science",
    price: 3999,
    instructorId: "inst_006",
    studentsEnrolled: 340,
    rating: 4.9
  }
];

// ================= ENROLLMENTS =================

export const enrollments = [
  { _id: "enroll_001", studentId: "user_001", courseId: "course_101", progress: 60 },
  { _id: "enroll_002", studentId: "user_002", courseId: "course_103", progress: 40 },
  { _id: "enroll_003", studentId: "user_003", courseId: "course_101", progress: 20 },
  { _id: "enroll_004", studentId: "user_004", courseId: "course_104", progress: 80 },
  { _id: "enroll_005", studentId: "user_005", courseId: "course_105", progress: 35 },
  { _id: "enroll_006", studentId: "user_006", courseId: "course_106", progress: 50 }
];

// ================= REVIEWS =================

export const reviews = [
  { _id: "review_001", courseId: "course_101", rating: 5, comment: "Excellent course!" },
  { _id: "review_002", courseId: "course_102", rating: 4, comment: "Very detailed React concepts." },
  { _id: "review_003", courseId: "course_103", rating: 5, comment: "Backend explained clearly." },
  { _id: "review_004", courseId: "course_104", rating: 4, comment: "Great design examples." },
  { _id: "review_005", courseId: "course_105", rating: 5, comment: "Deployment made easy!" },
  { _id: "review_006", courseId: "course_106", rating: 5, comment: "Best data science course." }
];