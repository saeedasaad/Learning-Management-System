// src/assets/assets.js

// Hero Section Data
export const heroData = {
  title: "Learn Anytime, Anywhere",
  subtitle: "A modern LMS platform built with MERN stack.",
  ctaPrimary: "Browse Courses",
  ctaSecondary: "Register Now",
  image: "/images/hero-banner.png", // placeholder image
};

// Features Section Data
export const featuresData = [
  {
    id: 1,
    title: "Secure Authentication",
    description: "Login and register with JWT-based authentication.",
    icon: "🔒",
  },
  {
    id: 2,
    title: "Course Management",
    description: "Instructors can create and manage courses easily.",
    icon: "📚",
  },
  {
    id: 3,
    title: "Progress Tracking",
    description: "Students can track their learning progress.",
    icon: "📈",
  },
  {
    id: 4,
    title: "Live Chat",
    description: "Real-time communication between students and instructors.",
    icon: "💬",
  },
  {
    id: 5,
    title: "Payment Integration",
    description: "Secure payments with Stripe integration.",
    icon: "💳",
  },
];

// Popular Courses Data
export const coursesData = [
  {
    id: "course1",
    title: "React for Beginners",
    instructor: "John Doe",
    rating: 4.8,
    image: "/images/course-react.png",
  },
  {
    id: "course2",
    title: "Node.js Masterclass",
    instructor: "Jane Smith",
    rating: 4.7,
    image: "/images/course-node.png",
  },
  {
    id: "course3",
    title: "MongoDB Essentials",
    instructor: "Ali Khan",
    rating: 4.6,
    image: "/images/course-mongo.png",
  },
];

// Instructor Highlight Data
export const instructorsData = [
  {
    id: "inst1",
    name: "John Doe",
    expertise: "Frontend Development",
    image: "/images/instructor-john.png",
  },
  {
    id: "inst2",
    name: "Jane Smith",
    expertise: "Backend Development",
    image: "/images/instructor-jane.png",
  },
];

// Testimonials Data
export const testimonialsData = [
  {
    id: "test1",
    student: "Sara Ali",
    feedback: "This LMS made learning so easy and fun!",
    rating: 5,
  },
  {
    id: "test2",
    student: "Ahmed Khan",
    feedback: "The live chat feature is amazing for quick help.",
    rating: 4,
  },
];

// How It Works Data
export const howItWorksData = [
  { step: 1, title: "Register", description: "Sign up with your email." },
  { step: 2, title: "Enroll", description: "Choose a course and enroll." },
  { step: 3, title: "Learn", description: "Watch lectures and study." },
  { step: 4, title: "Track Progress", description: "Monitor your learning journey." },
];

// Call-to-Action Data
export const callToActionData = {
  title: "Join thousands of learners today!",
  buttonText: "Get Started",
  link: "/register",
};