import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "../config/db.js";
import Course from "../models/Course.js";

dotenv.config();

export const courses = [
  {
    // _id: "course_101",
    title: "MERN Stack Development",
    category: "Web Development",
    price: 2999,
    originalPrice: 3999,
    instructorId: "inst_001",
    studentsEnrolled: 520,
    rating: 4.8,
    thumbnail: "/uploads/courses/C_img_1.png",
    description:
      "Learn to build full-stack applications using MongoDB, Express, React, and Node.js. This course covers everything from basics to advanced deployment strategies, helping you master end-to-end web development.",
    duration: "120+ Hours",
    modules: "15+ Modules",
    questions: "800+ Practice Questions",
    certificates: [
      { courseTitle: "MERN Stack Development", certificateImage: "/uploads/certificates/mern_certificate.jpg" },
    ],
    projects: [
      { title: "E-commerce Platform", desc: "Build a complete MERN-based e-commerce application with product listings, cart functionality, and secure payment integration.", image: "/uploads/projects/mern_ecommerce.jpg" },
      { title: "Social Media Clone", desc: "Develop a scalable social media app featuring user authentication, posts, likes, and real-time chat using Socket.io.", image: "/uploads/projects/mern_social_clone.jpg" },
      { title: "Admin Dashboard", desc: "Create a modular admin dashboard with analytics, charts, and role-based access using React and Node.js.", image: "/uploads/projects/mern_dashboard.jpg" },
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
    status: "approved",
  },
  {
    // _id: "course_102",
    title: "Advanced React Masterclass",
    category: "Frontend",
    price: 2499,
    originalPrice: 3499,
    instructorId: "inst_002",
    studentsEnrolled: 410,
    rating: 4.7,
    thumbnail: "/uploads/courses/C_img_2.png",
    description:
      "Master advanced React concepts including hooks, context API, performance optimization, and scalable architecture. This course focuses on building production-ready frontends with reusable components.",
    duration: "90+ Hours",
    modules: "10+ Modules",
    questions: "600+ Practice Questions",
    certificates: [
      { courseTitle: "Advanced React Masterclass", certificateImage: "/uploads/certificates/react_certificate.jpg" },
    ],
    projects: [
      { title: "Dashboard System", desc: "Create a modular admin dashboard with dynamic charts, role-based access, and responsive design using React and Tailwind CSS.", image: "/uploads/projects/react_dashboard.jpg" },
      { title: "React SaaS App", desc: "Develop a scalable SaaS frontend with subscription management, API integration, and optimized performance using React Query.", image: "/uploads/projects/react_saas.jpg" },
      { title: "Portfolio Builder", desc: "Build a customizable portfolio builder app with reusable components and optimized rendering.", image: "/uploads/projects/react_portfolio.jpg" },
    ],
    curriculum: {
      beginner: ["React Basics", "JSX & Components", "State Management"],
      intermediate: ["Hooks", "Context API", "Routing"],
      advanced: ["Performance Optimization", "Scalable Architecture", "Capstone Project"],
    },
    outcomes: [
      "Master React hooks and context",
      "Optimize frontend performance",
      "Build scalable React apps",
      "Create reusable UI components",
    ],
    certificate: true,
    status: "approved",
  },
  {
    // _id: "course_103",
    title: "Node.js & Express Bootcamp",
    category: "Backend",
    price: 1999,
    originalPrice: 2999,
    instructorId: "inst_003",
    studentsEnrolled: 380,
    rating: 4.6,
    thumbnail: "/uploads/courses/C_img_3.png",
    description:
      "Dive deep into backend development with Node.js and Express. Learn to build REST APIs, handle authentication, and manage databases effectively with hands-on projects.",
    duration: "100+ Hours",
    modules: "12+ Modules",
    questions: "700+ Practice Questions",
    certificates: [
      { courseTitle: "Node.js & Express Bootcamp", certificateImage: "/uploads/certificates/node_certificate.jpg" },
    ],
    projects: [
      { title: "REST API Service", desc: "Build a scalable REST API with Express.js, implement CRUD operations, and integrate MongoDB for data persistence.", image: "/uploads/projects/node_restapi.jpg" },
      { title: "Authentication System", desc: "Implement secure authentication using JWT and OAuth, including password hashing and role-based access control.", image: "/uploads/projects/node_auth.jpg" },
      { title: "Scalable Backend", desc: "Design a backend system with clustering, caching, and load balancing for high performance.", image: "/uploads/projects/node_scalability.jpg" },
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
    status: "approved",
  },
  {
    // _id: "course_104",
    title: "UI/UX Design Fundamentals",
    category: "Design",
    price: 1799,
    originalPrice: 2499,
    instructorId: "inst_004",
    studentsEnrolled: 300,
    rating: 4.5,
    thumbnail: "/uploads/courses/C_img_4.png",
    description:
      "Understand the principles of user interface and user experience design. Learn visual hierarchy, wireframing, prototyping, and accessibility best practices to create intuitive digital experiences.",
    duration: "80+ Hours",
    modules: "8+ Modules",
    questions: "400+ Practice Questions",
    certificates: [
      { courseTitle: "UI/UX Design Fundamentals", certificateImage: "/uploads/certificates/uiux_certificate.jpg" },
    ],
    projects: [
      { title: "Mobile App Wireframe", desc: "Design a mobile app prototype focusing on usability, layout consistency, and user flow optimization.", image: "/uploads/projects/mobile_wireframe.jpg" },
      { title: "Website Redesign", desc: "Redesign an existing website to improve accessibility, visual hierarchy, and overall user experience.", image: "/uploads/projects/website_redesign.jpg" },
      { title: "Interactive Prototype", desc: "Create a clickable interactive prototype using Figma or Adobe XD, simulating user flows and testing usability before development.", image: "/uploads/projects/interactive_prototype.jpg" },
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
    status: "approved",
  },
{
  // _id: "course_105",
  title: "DevOps & Cloud Deployment",
  category: "DevOps",
  price: 3499,
  originalPrice: 4499,
  instructorId: "inst_005",
  studentsEnrolled: 290,
  rating: 4.7,
  thumbnail: "/uploads/courses/C_img_5.png",
  description:
    "Gain expertise in DevOps workflows and cloud deployment. Learn CI/CD pipelines, containerization with Docker, and deploying applications on cloud platforms. This course blends theory with hands-on automation, helping you master modern infrastructure management.",
  duration: "110+ Hours",
  modules: "14+ Modules",
  questions: "500+ Practice Questions",
  certificates: [
    { courseTitle: "DevOps & Cloud Deployment", certificateImage: "/uploads/certificates/devops_certificate.jpg" },
  ],
  projects: [
    { title: "CI/CD Pipeline", desc: "Design and implement a fully automated CI/CD pipeline using Jenkins and GitHub Actions. Learn to integrate build, test, and deployment stages for seamless delivery.", image: "/uploads/projects/cicd_pipeline.jpg" },
    { title: "Dockerized App", desc: "Containerize a Node.js application using Docker, configure multi-stage builds, and deploy it to a cloud environment with Kubernetes orchestration.", image: "/uploads/projects/dockerized_app.jpg" },
    { title: "Kubernetes Scaling", desc: "Deploy and scale applications using Kubernetes clusters, ensuring high availability and resilience.", image: "/uploads/projects/kubernetes_scaling.jpg" },
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
  status: "approved",
},
{
  // _id: "course_106",
  title: "Data Science with Python",
  category: "Data Science",
  price: 3999,
  originalPrice: 4999,
  instructorId: "inst_006",
  studentsEnrolled: 340,
  rating: 4.9,
  thumbnail: "/uploads/courses/C_img_6.png",
  description:
    "Explore data science concepts using Python. Learn data analysis, visualization, machine learning, and statistical modeling with hands-on projects that prepare you for real-world challenges.",
  duration: "115+ Hours",
  modules: "12+ Modules",
  questions: "1k+ Questions",
  certificates: [
    { courseTitle: "Data Science with Python", certificateImage: "/uploads/certificates/datascience_certificate.jpg" },
  ],
  projects: [
    { title: "Customer Churn Prediction", desc: "Analyze customer data to predict churn using machine learning models. Implement data preprocessing, feature selection, and model evaluation.", image: "/uploads/projects/churn_prediction.jpg" },
    { title: "AI Chatbot Deployment", desc: "Develop and deploy an NLP-based chatbot using Python and TensorFlow, capable of understanding user queries and providing intelligent responses.", image: "/uploads/projects/ai_chatbot.jpg" },
    { title: "GenAI Deployment", desc: "Build and deploy a generative AI application using Python frameworks, integrating deep learning models for real-world use cases.", image: "/uploads/projects/genai_deployment.jpg" },
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
  status: "approved",
}
];


const seedCourses = async () => {
  try {
    await connectDB();

    for (const course of courses) {
      const existing = await Course.findOne({ title: course.title });
      if (!existing) {
        const newCourse = new Course(course);
        await newCourse.save();
        console.log(`Course ${course.title} created`);
      } else {
        console.log(`Course ${course.title} already exists`);
      }
    }

    process.exit();
  } catch (err) {
    console.error("Error seeding courses:", err.message);
    process.exit(1);
  }
};

seedCourses();
