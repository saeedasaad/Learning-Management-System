import heroBg from "./hero-bg.jpg";

import C_img_1 from "./C_img_1.png";
import C_img_2 from "./C_img_2.png";
import C_img_3 from "./C_img_3.png";
import C_img_4 from "./C_img_4.png";
import C_img_5 from "./C_img_5.png";
import C_img_6 from "./C_img_6.png";

import user1 from "../assets/user1.png";
import user2 from "../assets/user2.png";
import user3 from "../assets/user3.png";

import Inst_img_1 from "./Inst_image_1.png";
import Inst_img_2 from "./Inst_image_2.png";
import Inst_img_3 from "./Inst_image_3.png";
import Inst_img_4 from "./Inst_image_4.png";
import Inst_img_5 from "./Inst_image_5.png";
import Inst_img_6 from "./Inst_image_6.png";

import P_img1_1 from "./mern_ecommerce.jpg";
import P_img2_1 from "./mern_social_clone.jpg";
import P_img3_1 from "./mern_dashboard.jpg";

import P_img1_2 from "./react_dashboard.jpg";
import P_img2_2 from "./react_saas.jpg";
import P_img3_2 from "./react_portfolio.jpg";

import P_img1_3 from "./node_restapi.jpg";
import P_img2_3 from "./node_auth.jpg";
import P_img3_3 from "./node_scalability.jpg";

import P_img1_4 from "./mobile_wireframe.jpg";
import P_img2_4 from "./website_redesign.jpg";
import P_img3_4 from "./interactive_prototype.jpg";

import P_img1_5 from "./cicd_pipeline.jpg";
import P_img2_5 from "./dockerized_app.jpg";
import P_img3_5 from "./kubernetes_scaling.jpg";

import P_img1_6 from "./churn_prediction.jpg";
import P_img2_6 from "./ai_chatbot.jpg";
// import P_img3_6 from "./genai_deployment.jpg";

import Cert_img1 from "./mern_certificate.jpg";
import Cert_img2 from "./react_certificate.jpg";
import Cert_img3 from "./node_certificate.jpg";
import Cert_img4 from "./uiux_certificate.jpg";
import Cert_img5 from "./devops_certificate.jpg";
import Cert_img6 from "./datascience_certificate.jpg";

export const heroData = {
  heroBg,
  title: "Guiding Your Path to Prosperity",
  subtitle:
    "Our experienced advisors are dedicated to guiding you through every step of your learning journey, offering personalized strategies that align with your goals and ambitions.",
  ctaPrimary: "Begin Your Journey",
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
    createdAt: "2026-03-01T10:00:00Z",
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
    createdAt: "2026-03-02T11:00:00Z",
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
    createdAt: "2026-03-03T09:30:00Z",
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
    createdAt: "2026-03-04T08:20:00Z",
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
    createdAt: "2026-03-05T07:10:00Z",
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
    createdAt: "2026-03-06T06:15:00Z",
  },
];

// ================= INSTRUCTORS =================

export const instructors = [
  {
    _id: "inst_001",
    name: "Ryan Carter",
    email: "ryan@gmail.com",
    role: "instructor",
    avatar: Inst_img_1,
    expertise: "MERN Stack Development",
    totalStudents: 520,
    totalRevenue: 120000,
    createdCourses: ["course_101"],
  },
  {
    _id: "inst_002",
    name: "Vikram Joshi",
    email: "vikram@gmail.com",
    role: "instructor",
    avatar: Inst_img_2,
    expertise: "React & Frontend",
    totalStudents: 410,
    totalRevenue: 95000,
    createdCourses: ["course_102"],
  },
  {
    _id: "inst_003",
    name: "Meera Iyer",
    email: "meera@example.com",
    role: "instructor",
    avatar: Inst_img_3,
    expertise: "Node & Backend",
    totalStudents: 380,
    totalRevenue: 87000,
    createdCourses: ["course_103"],
  },
  {
    _id: "inst_004",
    name: "Vikram Joshi",
    email: "vikram@example.com",
    role: "instructor",
    avatar: Inst_img_4,
    expertise: "UI/UX Design",
    totalStudents: 300,
    totalRevenue: 65000,
    createdCourses: ["course_104"],
  },
  {
    _id: "inst_005",
    name: "Pooja Nair",
    email: "pooja@example.com",
    role: "instructor",
    avatar: Inst_img_5,
    expertise: "DevOps & Deployment",
    totalStudents: 290,
    totalRevenue: 60000,
    createdCourses: ["course_105"],
  },
  {
    _id: "inst_006",
    name: "Arjun Rao",
    email: "arjun@example.com",
    role: "instructor",
    avatar: Inst_img_6,
    expertise: "Data Science",
    totalStudents: 340,
    totalRevenue: 72000,
    createdCourses: ["course_106"],
  },
];

// ================= COURSES =================

export const courses = [
  {
    _id: "course_101",
    title: "MERN Stack Development",
    category: "Web Development",
    price: 2999,
    originalPrice: 3999,
    instructorId: "inst_001",
    studentsEnrolled: 520,
    rating: 4.8,
    thumbnail: C_img_1,
    description:
      "Learn to build full-stack applications using MongoDB, Express, React, and Node.js. This course covers everything from basics to advanced deployment strategies, helping you master end-to-end web development.",
    duration: "120+ Hours",
    modules: "15+ Modules",
    questions: "800+ Practice Questions",

    certificates: [
      {
        courseTitle: "MERN Stack Development",
        certificateImage: Cert_img1,
      },
    ],

    projects: [
      {
        title: "E-commerce Platform",
        desc: "Build a complete MERN-based e-commerce application with product listings, cart functionality, and secure payment integration.",
        image: P_img1_1,
      },
      {
        title: "Social Media Clone",
        desc: "Develop a scalable social media app featuring user authentication, posts, likes, and real-time chat using Socket.io.",
        image: P_img2_1,
      },
      {
        title: "Admin Dashboard",
        desc: "Create a modular admin dashboard with analytics, charts, and role-based access using React and Node.js.",
        image: P_img3_1,
      },
    ],
    curriculum: {
      beginner: ["HTML, CSS, JavaScript", "Intro to React", "Node.js Basics"],
      intermediate: ["Express.js", "MongoDB CRUD", "Authentication"],
      advanced: ["React Hooks & Context", "Deployment", "Capstone Project"],
    },
    outcomes: [
      "Build full-stack web apps",
      "Work with MongoDB databases",
      "Deploy apps to cloud platforms",
      "Create a professional portfolio",
    ],
    certificate: true,
  },
  {
    _id: "course_102",
    title: "Advanced React Masterclass",
    category: "Frontend",
    price: 2499,
    originalPrice: 3499,
    instructorId: "inst_002",
    studentsEnrolled: 410,
    rating: 4.7,
    thumbnail: C_img_2,
    description:
      "Master advanced React concepts including hooks, context API, performance optimization, and scalable architecture. This course focuses on building production-ready frontends with reusable components.",
    duration: "90+ Hours",
    modules: "10+ Modules",
    questions: "600+ Practice Questions",
    certificates: [
      {
        courseTitle: "Advanced React Masterclass",
        certificateImage: Cert_img2,
      },
    ],
    projects: [
      {
        title: "Dashboard System",
        desc: "Create a modular admin dashboard with dynamic charts, role-based access, and responsive design using React and Tailwind CSS.",
        image: P_img1_2,
      },
      {
        title: "React SaaS App",
        desc: "Develop a scalable SaaS frontend with subscription management, API integration, and optimized performance using React Query.",
        image: P_img2_2,
      },
      {
        title: "Portfolio Builder",
        desc: "Build a customizable portfolio builder app with reusable components and optimized rendering.",
        image: P_img3_2,
      },
    ],
    curriculum: {
      beginner: ["React Basics", "JSX & Components", "State Management"],
      intermediate: ["Hooks", "Context API", "Routing"],
      advanced: [
        "Performance Optimization",
        "Scalable Architecture",
        "Capstone Project",
      ],
    },
    outcomes: [
      "Master React hooks and context",
      "Optimize frontend performance",
      "Build scalable React apps",
      "Create reusable UI components",
    ],
    certificate: true,
  },
  {
    _id: "course_103",
    title: "Node.js & Express Bootcamp",
    category: "Backend",
    price: 1999,
    originalPrice: 2999,
    instructorId: "inst_003",
    studentsEnrolled: 380,
    rating: 4.6,
    thumbnail: C_img_3,
    description:
      "Dive deep into backend development with Node.js and Express. Learn to build REST APIs, handle authentication, and manage databases effectively with hands-on projects.",
    duration: "100+ Hours",
    modules: "12+ Modules",
    questions: "700+ Practice Questions",
    certificates: [
      {
        courseTitle: "Node.js & Express Bootcamp",
        certificateImage: Cert_img3,
      },
    ],
    projects: [
      {
        title: "REST API Service",
        desc: "Build a scalable REST API with Express.js, implement CRUD operations, and integrate MongoDB for data persistence.",
        image: P_img1_3,
      },
      {
        title: "Authentication System",
        desc: "Implement secure authentication using JWT and OAuth, including password hashing and role-based access control.",
        image: P_img2_3,
      },
      {
        title: "Scalable Backend",
        desc: "Design a backend system with clustering, caching, and load balancing for high performance.",
        image: P_img3_3,
      },
    ],
    curriculum: {
      beginner: ["Node.js Basics", "Express Fundamentals", "Routing"],
      intermediate: ["Middleware", "Authentication", "Database Integration"],
      advanced: ["Scalability", "Deployment", "Capstone Project"],
    },
    outcomes: [
      "Build secure backend APIs",
      "Integrate databases with Node.js",
      "Handle authentication flows",
      "Deploy backend apps to cloud",
    ],
    certificate: true,
  },
  {
    _id: "course_104",
    title: "UI/UX Design Fundamentals",
    category: "Design",
    price: 1799,
    originalPrice: 2499,
    instructorId: "inst_004",
    studentsEnrolled: 300,
    rating: 4.5,
    thumbnail: C_img_4,
    description:
      "Understand the principles of user interface and user experience design. Learn visual hierarchy, wireframing, prototyping, and accessibility best practices to create intuitive digital experiences.",
    duration: "80+ Hours",
    modules: "8+ Modules",
    questions: "400+ Practice Questions",
    certificates: [
      {
        courseTitle: "UI/UX Design Fundamentals",
        certificateImage: Cert_img4,
      },
    ],
    projects: [
      {
        title: "Mobile App Wireframe",
        desc: "Design a mobile app prototype focusing on usability, layout consistency, and user flow optimization.",
        image: P_img1_4,
      },
      {
        title: "Website Redesign",
        desc: "Redesign an existing website to improve accessibility, visual hierarchy, and overall user experience.",
        image: P_img2_4,
      },
      {
        title: "Interactive Prototype",
        desc: "Create a clickable interactive prototype using Figma or Adobe XD, simulating user flows and testing usability before development.",
        image: P_img3_4,
      },
    ],
    curriculum: {
      beginner: ["Design Principles", "Color Theory", "Typography"],
      intermediate: ["Wireframing", "Prototyping", "Accessibility"],
      advanced: ["Design Systems", "User Testing", "Capstone Project"],
    },
    outcomes: [
      "Design intuitive user interfaces",
      "Create wireframes and prototypes",
      "Apply accessibility best practices",
      "Build design systems",
    ],
    certificate: true,
  },
  {
    _id: "course_105",
    title: "DevOps & Cloud Deployment",
    category: "DevOps",
    price: 3499,
    originalPrice: 4499,
    instructorId: "inst_005",
    studentsEnrolled: 290,
    rating: 4.7,
    thumbnail: C_img_5,
    description:
      "Gain expertise in DevOps workflows and cloud deployment. Learn CI/CD pipelines, containerization with Docker, and deploying applications on cloud platforms. This course blends theory with hands-on automation, helping you master modern infrastructure management.",
    duration: "110+ Hours",
    modules: "14+ Modules",
    questions: "500+ Practice Questions",
    certificates: [
      {
        courseTitle: "DevOps & Cloud Deployment",
        certificateImage: Cert_img5,
      },
    ],
    projects: [
      {
        title: "CI/CD Pipeline",
        desc: "Design and implement a fully automated CI/CD pipeline using Jenkins and GitHub Actions. Learn to integrate build, test, and deployment stages for seamless delivery.",
        image: P_img1_5,
      },
      {
        title: "Dockerized App",
        desc: "Containerize a Node.js application using Docker, configure multi-stage builds, and deploy it to a cloud environment with Kubernetes orchestration.",
        image: P_img2_5,
      },
      {
        title: "Kubernetes Scaling",
        desc: "Deploy and scale applications using Kubernetes clusters, ensuring high availability and resilience.",
        image: P_img3_5,
      },
    ],
    curriculum: {
      beginner: ["Linux Basics", "Version Control", "Docker Fundamentals"],
      intermediate: ["CI/CD Pipelines", "Cloud Basics", "Monitoring"],
      advanced: ["Kubernetes", "Scaling Apps", "Capstone Project"],
    },
    outcomes: [
      "Build CI/CD pipelines",
      "Deploy apps with Docker",
      "Scale apps on Kubernetes",
      "Manage cloud deployments",
    ],
    certificate: true,
  },
  {
    _id: "course_106",
    title: "Data Science with Python",
    category: "Data Science",
    price: 3999,
    originalPrice: 4999,
    instructorId: "inst_006",
    studentsEnrolled: 340,
    rating: 4.9,
    thumbnail: C_img_6,
    description:
      "Explore data science concepts using Python. Learn data analysis, visualization, machine learning, and statistical modeling with hands-on projects that prepare you for real-world challenges.",
    duration: "115+ Hours",
    modules: "12+ Modules",
    questions: "1k+ Questions",
    certificates: [
      {
        courseTitle: "Data Science with Python",
        certificateImage: Cert_img6,
      },
    ],
    projects: [
      {
        title: "Customer Churn Prediction",
        desc: "Analyze customer data to predict churn using machine learning models. Implement data preprocessing, feature selection, and model evaluation.",
        image: P_img1_6,
      },
      {
        title: "AI Chatbot Deployment",
        desc: "Develop and deploy an NLP-based chatbot using Python and TensorFlow, capable of understanding user queries and providing intelligent responses.",
        image: P_img2_6,
      },
      // {
      //   title: "GenAI Deployment",
      //   desc: "Build and deploy a generative AI application using Python frameworks, integrating deep learning models for real-world use cases.",
      //   image: P_img3_6,
      // },
    ],
    curriculum: {
      beginner: ["Python Basics", "Data Analysis", "Statistics"],
      intermediate: ["Machine Learning", "Deep Learning", "SQL"],
      advanced: ["GenAI", "Deployment", "Capstone Project"],
    },
    outcomes: [
      "Build ML models",
      "Work with SQL databases",
      "Deploy GenAI apps",
      "Create a capstone portfolio",
    ],
    certificate: true,
  },
];

// ================= ENROLLMENTS =================

export const enrollments = [
  {
    _id: "enroll_001",
    studentId: "user_001",
    courseId: "course_101",
    progress: 60,
  },
  {
    _id: "enroll_002",
    studentId: "user_002",
    courseId: "course_103",
    progress: 40,
  },
  {
    _id: "enroll_003",
    studentId: "user_003",
    courseId: "course_101",
    progress: 20,
  },
  {
    _id: "enroll_004",
    studentId: "user_004",
    courseId: "course_104",
    progress: 80,
  },
  {
    _id: "enroll_005",
    studentId: "user_005",
    courseId: "course_105",
    progress: 35,
  },
  {
    _id: "enroll_006",
    studentId: "user_006",
    courseId: "course_106",
    progress: 50,
  },
];

// ================= REVIEWS =================

export const reviews = [
  {
    _id: "review_001",
    name: "Aarav Sharma",
    image: user1,
    rating: 5,
    comment: "Excellent course! Learned everything step by step.",
  },
  {
    _id: "review_002",
    name: "Priya Patel",
    image: user2,
    rating: 4,
    comment: "Very detailed React concepts. Easy to follow.",
  },
  {
    _id: "review_003",
    name: "Rahul Verma",
    image: user3,
    rating: 5,
    comment: "Backend explained clearly. Loved the examples.",
  },
];