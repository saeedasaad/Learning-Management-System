import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "../config/db.js";
import Course from "../models/Course.js";

dotenv.config();

export const courses = [
  {
    id: "course_101",
    title: "MERN Stack Development",
    category: "Web Development",
    price: 2999,
    instructorId: "inst_001",
    status: "approved",
    modules: [
      {
        title: "Module 1 - Introduction",
        pdfUrl: "/uploads/notes/module1.pdf",
        lectures: [
          {
            title: "Intro to MERN",
            videoUrl: "/uploads/lectures/mern_intro.mp4",
            releaseDate: "2026-04-10",
            duration: "00:06:34",
          },
          {
            title: "React Basics",
            videoUrl: "/uploads/lectures/react_basics.mp4",
            releaseDate: "2026-04-12",
            duration: "00:07:20",
          },
          {
            title: "JS Fundamentals",
            videoUrl: "/uploads/lectures/js_fundamentals.mp4",
            releaseDate: "2026-04-13",
            duration: "00:05:45",
          },
          {
            title: "Node.js Basics",
            videoUrl: "/uploads/lectures/node_basics.mp4",
            releaseDate: "2026-04-14",
            duration: "00:08:10",
          },
          {
            title: "Environment Setup",
            videoUrl: "/uploads/lectures/env_setup.mp4",
            releaseDate: "2026-04-15",
            duration: "00:09:00",
          },
        ],
        quiz: {
          releaseDate: "2026-04-15",
          questions: [
            {
              question: "What does MERN stand for?",
              options: ["MongoDB", "Express", "React", "Node"],
              answer: "All of the above",
            },
            {
              question: "Which language is used in MERN?",
              options: ["Python", "JavaScript", "Java"],
              answer: "JavaScript",
            },
            {
              question: "Which part of MERN is frontend?",
              options: ["MongoDB", "React", "Node"],
              answer: "React",
            },
            {
              question: "Which part of MERN is backend?",
              options: ["Express", "React", "CSS"],
              answer: "Express",
            },
            {
              question: "Which database is used in MERN?",
              options: ["MySQL", "MongoDB", "Postgres"],
              answer: "MongoDB",
            },
          ],
        },
      },
      {
        title: "Module 2 - MongoDB",
        pdfUrl: "/uploads/notes/module2.pdf",
        lectures: [
          {
            title: "MongoDB CRUD",
            videoUrl: "/uploads/lectures/mongo_crud.mp4",
            releaseDate: "2026-04-20",
            duration: "00:10:00",
          },
          {
            title: "Indexes",
            videoUrl: "/uploads/lectures/mongo_indexes.mp4",
            releaseDate: "2026-04-21",
            duration: "00:07:30",
          },
          {
            title: "Aggregation",
            videoUrl: "/uploads/lectures/mongo_aggregation.mp4",
            releaseDate: "2026-04-22",
            duration: "00:06:45",
          },
          {
            title: "Relationships",
            videoUrl: "/uploads/lectures/mongo_relationships.mp4",
            releaseDate: "2026-04-23",
            duration: "00:08:20",
          },
          {
            title: "Security",
            videoUrl: "/uploads/lectures/mongo_security.mp4",
            releaseDate: "2026-04-24",
            duration: "00:09:15",
          },
        ],
        quiz: {
          releaseDate: "2026-04-20",
          questions: [
            {
              question: "Which database engine is used in MERN?",
              options: ["MySQL", "MongoDB", "Oracle"],
              answer: "MongoDB",
            },
            {
              question: "Which command inserts a document?",
              options: ["insertOne", "addDoc", "push"],
              answer: "insertOne",
            },
            {
              question: "Which MongoDB feature speeds queries?",
              options: ["Indexes", "Aggregation", "Replication"],
              answer: "Indexes",
            },
            {
              question: "Which operator is used for filtering?",
              options: ["$match", "$filter", "$where"],
              answer: "$match",
            },
            {
              question: "Which MongoDB feature ensures security?",
              options: ["Authentication", "Replication", "Aggregation"],
              answer: "Authentication",
            },
          ],
        },
      },
      {
        title: "Module 3 - Express",
        pdfUrl: "/uploads/notes/module3.pdf",
        lectures: [
          {
            title: "Express Routing",
            videoUrl: "/uploads/lectures/express_routing.mp4",
            releaseDate: "2026-04-25",
            duration: "00:08:00",
          },
          {
            title: "Middleware",
            videoUrl: "/uploads/lectures/middleware.mp4",
            releaseDate: "2026-04-26",
            duration: "00:07:15",
          },
          {
            title: "Authentication",
            videoUrl: "/uploads/lectures/authentication.mp4",
            releaseDate: "2026-04-27",
            duration: "00:09:30",
          },
          {
            title: "Error Handling",
            videoUrl: "/uploads/lectures/error_handling.mp4",
            releaseDate: "2026-04-28",
            duration: "00:06:50",
          },
          {
            title: "API Design",
            videoUrl: "/uploads/lectures/api_design.mp4",
            releaseDate: "2026-04-29",
            duration: "00:08:40",
          },
        ],
        quiz: {
          releaseDate: "2026-04-25",
          questions: [
            {
              question: "Which library handles routing?",
              options: ["React Router", "Express", "Axios"],
              answer: "Express",
            },
            {
              question: "What is middleware used for?",
              options: ["Routing", "Handling requests", "Database"],
              answer: "Handling requests",
            },
            {
              question: "Which package is required for Express?",
              options: ["express", "axios", "react"],
              answer: "express",
            },
            {
              question: "Which method handles GET requests?",
              options: ["app.get", "app.post", "app.use"],
              answer: "app.get",
            },
            {
              question: "Which method handles POST requests?",
              options: ["app.get", "app.post", "app.put"],
              answer: "app.post",
            },
          ],
        },
      },
      {
        title: "Module 4 - Deployment",
        pdfUrl: "/uploads/notes/module4.pdf",
        lectures: [
          {
            title: "Deployment Basics",
            videoUrl: "/uploads/lectures/deployment.mp4",
            releaseDate: "2026-05-01",
            duration: "00:07:00",
          },
          {
            title: "Heroku Deployment",
            videoUrl: "/uploads/lectures/heroku.mp4",
            releaseDate: "2026-05-02",
            duration: "00:08:20",
          },
          {
            title: "Netlify Deployment",
            videoUrl: "/uploads/lectures/netlify.mp4",
            releaseDate: "2026-05-03",
            duration: "00:07:45",
          },
          {
            title: "CI/CD Pipelines",
            videoUrl: "/uploads/lectures/cicd.mp4",
            releaseDate: "2026-05-04",
            duration: "00:09:10",
          },
          {
            title: "Cloud Scaling",
            videoUrl: "/uploads/lectures/cloud_scaling.mp4",
            releaseDate: "2026-05-05",
            duration: "00:08:55",
          },
        ],
        quiz: {
          releaseDate: "2026-05-01",
          questions: [
            {
              question: "Which service is used for deployment?",
              options: ["Heroku", "Netlify", "Both"],
              answer: "Both",
            },
            {
              question: "What does CI/CD stand for?",
              options: [
                "Continuous Integration/Continuous Deployment",
                "Code Integration/Code Delivery",
                "Continuous Improvement/Continuous Delivery",
              ],
              answer: "Continuous Integration/Continuous Deployment",
            },
            {
              question: "Which tool is used for pipelines?",
              options: ["Jenkins", "MongoDB", "React"],
              answer: "Jenkins",
            },
            {
              question: "Which service is best for frontend hosting?",
              options: ["Netlify", "Heroku", "MongoDB"],
              answer: "Netlify",
            },
            {
              question: "Which service is best for backend hosting?",
              options: ["Heroku", "Netlify", "React"],
              answer: "Heroku",
            },
          ],
        },
      },
    ],

    faqs: [
      {
        q: "Are these courses suitable for beginners?",
        a: "Yes, our courses guide beginners step by step while also challenging advanced learners.",
      },
      {
        q: "Do you provide placement assistance?",
        a: "Yes, we connect students with industry partners for internships and jobs.",
      },
      {
        q: "Are classes live or recorded?",
        a: "Classes are recorded so you can learn at your own pace.",
      },
      {
        q: "Do students work on real projects?",
        a: "Yes, each course includes a capstone project to apply skills.",
      },
      {
        q: "Is there a certificate after completion?",
        a: "Yes, certificates are awarded upon successful completion.",
      },
      {
        q: "Can I access content offline?",
        a: "Yes, you can download PDFs and videos for offline use.",
      },
      {
        q: "What support is available?",
        a: "We provide 24/7 chat and email support for all students.",
      },
      {
        q: "How long do I have access to the course?",
        a: "You get lifetime access to all course materials once enrolled.",
      },
      {
        q: "Are there any prerequisites?",
        a: "Basic knowledge of programming is helpful, but not required.",
      },
      {
        q: "Do you update course content?",
        a: "Yes, we regularly update lectures and notes to reflect the latest industry practices.",
      },
    ],
    glossary: [
      { term: "MERN", definition: "MongoDB, Express, React, Node.js" },
      {
        term: "CRUD",
        definition: "Create, Read, Update, Delete operations in databases",
      },
      {
        term: "Middleware",
        definition: "Functions that execute during request handling in Express",
      },
      {
        term: "CI/CD",
        definition: "Continuous Integration and Continuous Deployment",
      },
    ],

    completionCriteria: [
      "Complete all lectures in each module",
      "Attempt quizzes for each module",
      "Submit final project",
      "Achieve at least 70% in quizzes",
      "Participate in capstone project review",
    ],
  },
  {
    id: "course_102",
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
    modules: [
      {
        title: "Module 1 - React Fundamentals",
        pdfUrl: "/uploads/notes/react_module1.pdf",
        lectures: [
          {
            title: "React Basics Refresher",
            videoUrl: "/uploads/lectures/react_basics.mp4",
            releaseDate: "2026-04-10",
            duration: "00:12:00",
          },
          {
            title: "JSX Deep Dive",
            videoUrl: "/uploads/lectures/jsx.mp4",
            releaseDate: "2026-04-11",
            duration: "00:10:30",
          },
          {
            title: "Component Patterns",
            videoUrl: "/uploads/lectures/components.mp4",
            releaseDate: "2026-04-12",
            duration: "00:14:20",
          },
        ],
        quiz: {
          releaseDate: "2026-04-12",
          questions: [
            {
              question: "What does JSX stand for?",
              options: [
                "JavaScript XML",
                "Java Syntax Extension",
                "JSON Syntax",
              ],
              answer: "JavaScript XML",
            },
            {
              question: "Which hook manages state?",
              options: ["useState", "useEffect", "useContext"],
              answer: "useState",
            },
          ],
        },
      },
      {
        title: "Module 2 - Hooks & Context",
        pdfUrl: "/uploads/notes/react_module2.pdf",
        lectures: [
          {
            title: "Understanding useState & useEffect",
            videoUrl: "/uploads/lectures/hooks_basics.mp4",
            releaseDate: "2026-04-15",
            duration: "00:15:00",
          },
          {
            title: "Custom Hooks",
            videoUrl: "/uploads/lectures/custom_hooks.mp4",
            releaseDate: "2026-04-16",
            duration: "00:12:45",
          },
          {
            title: "Context API",
            videoUrl: "/uploads/lectures/context_api.mp4",
            releaseDate: "2026-04-17",
            duration: "00:13:10",
          },
        ],
        quiz: {
          releaseDate: "2026-04-17",
          questions: [
            {
              question: "Which hook is used for side effects?",
              options: ["useState", "useEffect", "useReducer"],
              answer: "useEffect",
            },
            {
              question: "What problem does Context API solve?",
              options: ["Prop drilling", "State management", "Routing"],
              answer: "Prop drilling",
            },
          ],
        },
      },
      {
        title: "Module 3 - Performance Optimization",
        pdfUrl: "/uploads/notes/react_module3.pdf",
        lectures: [
          {
            title: "Memoization Techniques",
            videoUrl: "/uploads/lectures/memoization.mp4",
            releaseDate: "2026-04-20",
            duration: "00:11:30",
          },
          {
            title: "React.memo & useMemo",
            videoUrl: "/uploads/lectures/react_memo.mp4",
            releaseDate: "2026-04-21",
            duration: "00:12:40",
          },
          {
            title: "Code Splitting & Lazy Loading",
            videoUrl: "/uploads/lectures/code_splitting.mp4",
            releaseDate: "2026-04-22",
            duration: "00:14:00",
          },
        ],
        quiz: {
          releaseDate: "2026-04-22",
          questions: [
            {
              question: "Which hook caches computed values?",
              options: ["useMemo", "useEffect", "useState"],
              answer: "useMemo",
            },
            {
              question: "What does React.memo do?",
              options: [
                "Prevents re-render",
                "Adds routing",
                "Handles API calls",
              ],
              answer: "Prevents re-render",
            },
          ],
        },
      },
      {
        title: "Module 4 - Scalable Architecture",
        pdfUrl: "/uploads/notes/react_module4.pdf",
        lectures: [
          {
            title: "Folder Structures",
            videoUrl: "/uploads/lectures/folder_structure.mp4",
            releaseDate: "2026-04-25",
            duration: "00:09:50",
          },
          {
            title: "Reusable Components",
            videoUrl: "/uploads/lectures/reusable_components.mp4",
            releaseDate: "2026-04-26",
            duration: "00:13:20",
          },
          {
            title: "Large Scale State Management",
            videoUrl: "/uploads/lectures/state_management.mp4",
            releaseDate: "2026-04-27",
            duration: "00:15:00",
          },
        ],
        quiz: {
          releaseDate: "2026-04-27",
          questions: [
            {
              question: "Why use reusable components?",
              options: ["Consistency", "Performance", "Both"],
              answer: "Both",
            },
            {
              question: "Which library is often used for large state?",
              options: ["Redux", "Axios", "React Router"],
              answer: "Redux",
            },
          ],
        },
      },
    ],

    certificates: [
      {
        courseTitle: "Advanced React Masterclass",
        certificateImage: "/uploads/certificates/react_certificate.jpg",
      },
    ],

    projects: [
      {
        title: "Dashboard System",
        desc: "Create a modular admin dashboard with dynamic charts, role-based access, and responsive design using React and Tailwind CSS.",
        image: "/uploads/projects/react_dashboard.jpg",
      },
      {
        title: "React SaaS App",
        desc: "Develop a scalable SaaS frontend with subscription management, API integration, and optimized performance using React Query.",
        image: "/uploads/projects/react_saas.jpg",
      },
      {
        title: "Portfolio Builder",
        desc: "Build a customizable portfolio builder app with reusable components and optimized rendering.",
        image: "/uploads/projects/react_portfolio.jpg",
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

    faqs: [
      {
        q: "Is this course suitable for beginners?",
        a: "This course is designed for intermediate to advanced learners, but beginners can follow along with extra effort.",
      },
      {
        q: "Do you provide placement assistance?",
        a: "Yes, we connect students with industry partners for internships and jobs.",
      },
      {
        q: "Are classes live or recorded?",
        a: "Classes are recorded so you can learn at your own pace.",
      },
      {
        q: "Do students work on real projects?",
        a: "Yes, each course includes multiple real-world projects to apply skills.",
      },
      {
        q: "Is there a certificate after completion?",
        a: "Yes, certificates are awarded upon successful completion.",
      },
      {
        q: "Can I access content offline?",
        a: "Yes, you can download PDFs and videos for offline use.",
      },
      {
        q: "What support is available?",
        a: "We provide 24/7 chat and email support for all students.",
      },
      {
        q: "How long do I have access to the course?",
        a: "You get lifetime access to all course materials once enrolled.",
      },
      {
        q: "Are there any prerequisites?",
        a: "Basic knowledge of JavaScript and React fundamentals is recommended.",
      },
      {
        q: "Do you update course content?",
        a: "Yes, we regularly update lectures and notes to reflect the latest industry practices.",
      },
    ],

    glossary: [
      {
        term: "Hooks",
        definition:
          "Functions that let you use state and lifecycle features in functional components.",
      },
      {
        term: "Context API",
        definition:
          "A way to pass data through the component tree without prop drilling.",
      },
      {
        term: "React Query",
        definition:
          "A library for fetching, caching, and updating server state in React apps.",
      },
      {
        term: "Virtual DOM",
        definition:
          "A lightweight representation of the real DOM used by React for efficient updates.",
      },
    ],

    completionCriteria: [
      "Complete all lectures in each module",
      "Attempt quizzes for each module",
      "Submit all assigned projects",
      "Achieve at least 70% in quizzes",
      "Participate in capstone project review",
    ],

    certificate: true,
    status: "approved",
  },

  {
    id: "course_105",
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
      {
        courseTitle: "DevOps & Cloud Deployment",
        certificateImage: "/uploads/certificates/devops_certificate.jpg",
      },
    ],
    projects: [
      {
        title: "CI/CD Pipeline",
        desc: "Design and implement a fully automated CI/CD pipeline using Jenkins and GitHub Actions. Learn to integrate build, test, and deployment stages for seamless delivery.",
        image: "/uploads/projects/cicd_pipeline.jpg",
      },
      {
        title: "Dockerized App",
        desc: "Containerize a Node.js application using Docker, configure multi-stage builds, and deploy it to a cloud environment with Kubernetes orchestration.",
        image: "/uploads/projects/dockerized_app.jpg",
      },
      {
        title: "Kubernetes Scaling",
        desc: "Deploy and scale applications using Kubernetes clusters, ensuring high availability and resilience.",
        image: "/uploads/projects/kubernetes_scaling.jpg",
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
    status: "approved",
  },
  {
    id: "course_104",
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

    modules: [
      {
        title: "Module 1 - Design Principles",
        pdfUrl: "/uploads/notes/uiux_module1.pdf",
        lectures: [
          {
            title: "Introduction to Design",
            videoUrl: "/uploads/lectures/design_intro.mp4",
            releaseDate: "2026-04-10",
            duration: "00:08:00",
          },
          {
            title: "Color Theory Basics",
            videoUrl: "/uploads/lectures/color_theory.mp4",
            releaseDate: "2026-04-11",
            duration: "00:09:30",
          },
          {
            title: "Typography Essentials",
            videoUrl: "/uploads/lectures/typography.mp4",
            releaseDate: "2026-04-12",
            duration: "00:10:15",
          },
        ],
        quiz: {
          releaseDate: "2026-04-12",
          questions: [
            {
              question: "What is typography?",
              options: ["Font design", "Color usage", "Layout"],
              answer: "Font design",
            },
            {
              question: "Which color model is used in design?",
              options: ["RGB", "CMYK", "Both"],
              answer: "Both",
            },
          ],
        },
      },
      {
        title: "Module 2 - Wireframing & Prototyping",
        pdfUrl: "/uploads/notes/uiux_module2.pdf",
        lectures: [
          {
            title: "Wireframing Basics",
            videoUrl: "/uploads/lectures/wireframing.mp4",
            releaseDate: "2026-04-15",
            duration: "00:12:00",
          },
          {
            title: "Prototyping Tools",
            videoUrl: "/uploads/lectures/prototyping_tools.mp4",
            releaseDate: "2026-04-16",
            duration: "00:11:20",
          },
          {
            title: "Accessibility in Design",
            videoUrl: "/uploads/lectures/accessibility.mp4",
            releaseDate: "2026-04-17",
            duration: "00:13:10",
          },
        ],
        quiz: {
          releaseDate: "2026-04-17",
          questions: [
            {
              question: "Which tool is used for prototyping?",
              options: ["Figma", "MongoDB", "Node.js"],
              answer: "Figma",
            },
            {
              question: "What does accessibility ensure?",
              options: ["Inclusive design", "Faster apps", "Better colors"],
              answer: "Inclusive design",
            },
          ],
        },
      },
    ],

    certificates: [
      {
        courseTitle: "UI/UX Design Fundamentals",
        certificateImage: "/uploads/certificates/uiux_certificate.jpg",
      },
    ],

    projects: [
      {
        title: "Mobile App Wireframe",
        desc: "Design a mobile app prototype focusing on usability, layout consistency, and user flow optimization.",
        image: "/uploads/projects/mobile_wireframe.jpg",
      },
      {
        title: "Website Redesign",
        desc: "Redesign an existing website to improve accessibility, visual hierarchy, and overall user experience.",
        image: "/uploads/projects/website_redesign.jpg",
      },
      {
        title: "Interactive Prototype",
        desc: "Create a clickable interactive prototype using Figma or Adobe XD, simulating user flows and testing usability before development.",
        image: "/uploads/projects/interactive_prototype.jpg",
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

    faqs: [
      {
        q: "Is this course beginner-friendly?",
        a: "Yes, it starts with design basics before moving to advanced topics.",
      },
      {
        q: "Do you provide placement assistance?",
        a: "Yes, we connect students with industry partners for internships and jobs.",
      },
      {
        q: "Are classes live or recorded?",
        a: "Classes are recorded so you can learn at your own pace.",
      },
      {
        q: "Do students work on real projects?",
        a: "Yes, each course includes multiple real-world projects to apply skills.",
      },
      {
        q: "Is there a certificate after completion?",
        a: "Yes, certificates are awarded upon successful completion.",
      },
      {
        q: "Can I access content offline?",
        a: "Yes, you can download PDFs and videos for offline use.",
      },
      {
        q: "What support is available?",
        a: "We provide 24/7 chat and email support for all students.",
      },
      {
        q: "How long do I have access to the course?",
        a: "You get lifetime access to all course materials once enrolled.",
      },
      {
        q: "Are there any prerequisites?",
        a: "No prerequisites required, but creativity and interest in design help.",
      },
      {
        q: "Do you update course content?",
        a: "Yes, we regularly update lectures and notes to reflect the latest industry practices.",
      },
    ],

    glossary: [
      {
        term: "Wireframe",
        definition:
          "A basic visual guide used to suggest the layout of a website or app.",
      },
      {
        term: "Prototype",
        definition:
          "An interactive model of a design used for testing and feedback.",
      },
      {
        term: "Accessibility",
        definition: "Designing products usable by people with disabilities.",
      },
      {
        term: "Design System",
        definition:
          "A collection of reusable components and guidelines for consistent design.",
      },
    ],

    completionCriteria: [
      "Complete all lectures in each module",
      "Attempt quizzes for each module",
      "Submit all assigned projects",
      "Achieve at least 70% in quizzes",
      "Participate in capstone project review",
    ],

    certificate: true,
    status: "approved",
  },

  {
    id: "course_105",
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

    modules: [
      {
        title: "Module 1 - Linux & Version Control",
        pdfUrl: "/uploads/notes/devops_module1.pdf",
        lectures: [
          {
            title: "Linux Basics",
            videoUrl: "/uploads/lectures/linux_basics.mp4",
            releaseDate: "2026-04-10",
            duration: "00:12:00",
          },
          {
            title: "Shell Scripting",
            videoUrl: "/uploads/lectures/shell_scripting.mp4",
            releaseDate: "2026-04-11",
            duration: "00:10:30",
          },
          {
            title: "Git & Version Control",
            videoUrl: "/uploads/lectures/git_version_control.mp4",
            releaseDate: "2026-04-12",
            duration: "00:14:20",
          },
        ],
        quiz: {
          releaseDate: "2026-04-12",
          questions: [
            {
              question: "Which command initializes a Git repo?",
              options: ["git init", "git start", "git create"],
              answer: "git init",
            },
            {
              question: "What is the Linux command to list files?",
              options: ["ls", "dir", "list"],
              answer: "ls",
            },
          ],
        },
      },
      {
        title: "Module 2 - CI/CD Pipelines",
        pdfUrl: "/uploads/notes/devops_module2.pdf",
        lectures: [
          {
            title: "Introduction to CI/CD",
            videoUrl: "/uploads/lectures/cicd_intro.mp4",
            releaseDate: "2026-04-15",
            duration: "00:15:00",
          },
          {
            title: "Jenkins Setup",
            videoUrl: "/uploads/lectures/jenkins_setup.mp4",
            releaseDate: "2026-04-16",
            duration: "00:12:45",
          },
          {
            title: "GitHub Actions",
            videoUrl: "/uploads/lectures/github_actions.mp4",
            releaseDate: "2026-04-17",
            duration: "00:13:10",
          },
        ],
        quiz: {
          releaseDate: "2026-04-17",
          questions: [
            {
              question: "What does CI/CD stand for?",
              options: [
                "Continuous Integration/Continuous Deployment",
                "Code Integration/Code Delivery",
                "Continuous Improvement/Continuous Delivery",
              ],
              answer: "Continuous Integration/Continuous Deployment",
            },
            {
              question: "Which tool is commonly used for CI/CD?",
              options: ["Jenkins", "MongoDB", "React"],
              answer: "Jenkins",
            },
          ],
        },
      },
      {
        title: "Module 3 - Docker & Containers",
        pdfUrl: "/uploads/notes/devops_module3.pdf",
        lectures: [
          {
            title: "Docker Basics",
            videoUrl: "/uploads/lectures/docker_basics.mp4",
            releaseDate: "2026-04-20",
            duration: "00:11:30",
          },
          {
            title: "Docker Compose",
            videoUrl: "/uploads/lectures/docker_compose.mp4",
            releaseDate: "2026-04-21",
            duration: "00:12:40",
          },
          {
            title: "Container Orchestration",
            videoUrl: "/uploads/lectures/container_orchestration.mp4",
            releaseDate: "2026-04-22",
            duration: "00:14:00",
          },
        ],
        quiz: {
          releaseDate: "2026-04-22",
          questions: [
            {
              question: "Which command builds a Docker image?",
              options: ["docker build", "docker run", "docker init"],
              answer: "docker build",
            },
            {
              question: "What is Docker Compose used for?",
              options: [
                "Multi-container apps",
                "Database queries",
                "Authentication",
              ],
              answer: "Multi-container apps",
            },
          ],
        },
      },
      {
        title: "Module 4 - Kubernetes & Cloud Deployment",
        pdfUrl: "/uploads/notes/devops_module4.pdf",
        lectures: [
          {
            title: "Kubernetes Basics",
            videoUrl: "/uploads/lectures/kubernetes_basics.mp4",
            releaseDate: "2026-04-25",
            duration: "00:09:50",
          },
          {
            title: "Scaling Apps",
            videoUrl: "/uploads/lectures/scaling_apps.mp4",
            releaseDate: "2026-04-26",
            duration: "00:13:20",
          },
          {
            title: "Cloud Deployment",
            videoUrl: "/uploads/lectures/cloud_deployment.mp4",
            releaseDate: "2026-04-27",
            duration: "00:15:00",
          },
        ],
        quiz: {
          releaseDate: "2026-04-27",
          questions: [
            {
              question: "Which tool manages containers?",
              options: ["Kubernetes", "React", "MongoDB"],
              answer: "Kubernetes",
            },
            {
              question: "Which cloud service is commonly used?",
              options: ["AWS", "Photoshop", "Excel"],
              answer: "AWS",
            },
          ],
        },
      },
    ],

    certificates: [
      {
        courseTitle: "DevOps & Cloud Deployment",
        certificateImage: "/uploads/certificates/devops_certificate.jpg",
      },
    ],

    projects: [
      {
        title: "CI/CD Pipeline",
        desc: "Design and implement a fully automated CI/CD pipeline using Jenkins and GitHub Actions. Learn to integrate build, test, and deployment stages for seamless delivery.",
        image: "/uploads/projects/cicd_pipeline.jpg",
      },
      {
        title: "Dockerized App",
        desc: "Containerize a Node.js application using Docker, configure multi-stage builds, and deploy it to a cloud environment with Kubernetes orchestration.",
        image: "/uploads/projects/dockerized_app.jpg",
      },
      {
        title: "Kubernetes Scaling",
        desc: "Deploy and scale applications using Kubernetes clusters, ensuring high availability and resilience.",
        image: "/uploads/projects/kubernetes_scaling.jpg",
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

    faqs: [
      {
        q: "Is this course beginner-friendly?",
        a: "Yes, it starts with Linux basics before moving to advanced DevOps topics.",
      },
      {
        q: "Do you provide placement assistance?",
        a: "Yes, we connect students with industry partners for internships and jobs.",
      },
      {
        q: "Are classes live or recorded?",
        a: "Classes are recorded so you can learn at your own pace.",
      },
      {
        q: "Do students work on real projects?",
        a: "Yes, each course includes multiple real-world projects to apply skills.",
      },
      {
        q: "Is there a certificate after completion?",
        a: "Yes, certificates are awarded upon successful completion.",
      },
      {
        q: "Can I access content offline?",
        a: "Yes, you can download PDFs and videos for offline use.",
      },
      {
        q: "What support is available?",
        a: "We provide 24/7 chat and email support for all students.",
      },
      {
        q: "How long do I have access to the course?",
        a: "You get lifetime access to all course materials once enrolled.",
      },
      {
        q: "Are there any prerequisites?",
        a: "Basic knowledge of Linux and programming is recommended.",
      },
      {
        q: "Do you update course content?",
        a: "Yes, we regularly update lectures and notes to reflect the latest industry practices.",
      },
    ],

    glossary: [
      {
        term: "CI/CD",
        definition: "Continuous Integration and Continuous Deployment.",
      },
      {
        term: "Docker",
        definition: "A platform for containerizing applications.",
      },
      {
        term: "Kubernetes",
        definition: "An orchestration tool for managing containers.",
      },
      {
        term: "Cloud Deployment",
        definition:
          "Hosting applications on cloud platforms like AWS, Azure, or GCP.",
      },
    ],

    completionCriteria: [
      "Complete all lectures in each module",
      "Attempt quizzes for each module",
      "Submit all assigned projects",
      "Achieve at least 70% in quizzes",
      "Participate in capstone project review",
    ],

    certificate: true,
    status: "approved",
  },

  {
    id: "course_106",
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

    modules: [
      {
        title: "Module 1 - Python Basics",
        pdfUrl: "/uploads/notes/ds_module1.pdf",
        lectures: [
          {
            title: "Python Fundamentals",
            videoUrl: "/uploads/lectures/python_fundamentals.mp4",
            releaseDate: "2026-04-10",
            duration: "00:12:00",
          },
          {
            title: "Data Types & Structures",
            videoUrl: "/uploads/lectures/data_types.mp4",
            releaseDate: "2026-04-11",
            duration: "00:10:30",
          },
          {
            title: "Functions & Modules",
            videoUrl: "/uploads/lectures/functions_modules.mp4",
            releaseDate: "2026-04-12",
            duration: "00:14:20",
          },
        ],
        quiz: {
          releaseDate: "2026-04-12",
          questions: [
            {
              question: "Which library is core to Python?",
              options: ["os", "numpy", "pandas"],
              answer: "os",
            },
            {
              question: "Which keyword defines a function?",
              options: ["func", "def", "function"],
              answer: "def",
            },
          ],
        },
      },
      {
        title: "Module 2 - Data Analysis",
        pdfUrl: "/uploads/notes/ds_module2.pdf",
        lectures: [
          {
            title: "Introduction to Pandas",
            videoUrl: "/uploads/lectures/pandas_intro.mp4",
            releaseDate: "2026-04-15",
            duration: "00:15:00",
          },
          {
            title: "Data Cleaning",
            videoUrl: "/uploads/lectures/data_cleaning.mp4",
            releaseDate: "2026-04-16",
            duration: "00:12:45",
          },
          {
            title: "Exploratory Data Analysis",
            videoUrl: "/uploads/lectures/eda.mp4",
            releaseDate: "2026-04-17",
            duration: "00:13:10",
          },
        ],
        quiz: {
          releaseDate: "2026-04-17",
          questions: [
            {
              question: "Which library is used for dataframes?",
              options: ["numpy", "pandas", "matplotlib"],
              answer: "pandas",
            },
            {
              question: "What is EDA?",
              options: [
                "Exploratory Data Analysis",
                "Extended Data Access",
                "Efficient Data Algorithms",
              ],
              answer: "Exploratory Data Analysis",
            },
          ],
        },
      },
      {
        title: "Module 3 - Machine Learning",
        pdfUrl: "/uploads/notes/ds_module3.pdf",
        lectures: [
          {
            title: "Supervised Learning",
            videoUrl: "/uploads/lectures/supervised_learning.mp4",
            releaseDate: "2026-04-20",
            duration: "00:11:30",
          },
          {
            title: "Unsupervised Learning",
            videoUrl: "/uploads/lectures/unsupervised_learning.mp4",
            releaseDate: "2026-04-21",
            duration: "00:12:40",
          },
          {
            title: "Model Evaluation",
            videoUrl: "/uploads/lectures/model_evaluation.mp4",
            releaseDate: "2026-04-22",
            duration: "00:14:00",
          },
        ],
        quiz: {
          releaseDate: "2026-04-22",
          questions: [
            {
              question: "Which library is used for ML?",
              options: ["scikit-learn", "flask", "django"],
              answer: "scikit-learn",
            },
            {
              question: "Which metric measures classification accuracy?",
              options: ["RMSE", "Accuracy", "MAE"],
              answer: "Accuracy",
            },
          ],
        },
      },
      {
        title: "Module 4 - GenAI & Deployment",
        pdfUrl: "/uploads/notes/ds_module4.pdf",
        lectures: [
          {
            title: "Introduction to GenAI",
            videoUrl: "/uploads/lectures/genai_intro.mp4",
            releaseDate: "2026-04-25",
            duration: "00:09:50",
          },
          {
            title: "Deep Learning Models",
            videoUrl: "/uploads/lectures/deep_learning.mp4",
            releaseDate: "2026-04-26",
            duration: "00:13:20",
          },
          {
            title: "Deployment Strategies",
            videoUrl: "/uploads/lectures/deployment_strategies.mp4",
            releaseDate: "2026-04-27",
            duration: "00:15:00",
          },
        ],
        quiz: {
          releaseDate: "2026-04-27",
          questions: [
            {
              question: "Which library is used for deep learning?",
              options: ["TensorFlow", "Flask", "SQL"],
              answer: "TensorFlow",
            },
            {
              question: "What is GenAI?",
              options: ["Generative AI", "General AI", "Genetic AI"],
              answer: "Generative AI",
            },
          ],
        },
      },
    ],

    certificates: [
      {
        courseTitle: "Data Science with Python",
        certificateImage: "/uploads/certificates/datascience_certificate.jpg",
      },
    ],

    projects: [
      {
        title: "Customer Churn Prediction",
        desc: "Analyze customer data to predict churn using machine learning models. Implement data preprocessing, feature selection, and model evaluation.",
        image: "/uploads/projects/churn_prediction.jpg",
      },
      {
        title: "AI Chatbot Deployment",
        desc: "Develop and deploy an NLP-based chatbot using Python and TensorFlow, capable of understanding user queries and providing intelligent responses.",
        image: "/uploads/projects/ai_chatbot.jpg",
      },
      {
        title: "GenAI Deployment",
        desc: "Build and deploy a generative AI application using Python frameworks, integrating deep learning models for real-world use cases.",
        image: "/uploads/projects/genai_deployment.jpg",
      },
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

    faqs: [
      {
        q: "Is this course beginner-friendly?",
        a: "Yes, it starts with Python basics before moving to advanced topics.",
      },
      {
        q: "Do you provide placement assistance?",
        a: "Yes, we connect students with industry partners for internships and jobs.",
      },
      {
        q: "Are classes live or recorded?",
        a: "Classes are recorded so you can learn at your own pace.",
      },
      {
        q: "Do students work on real projects?",
        a: "Yes, each course includes multiple real-world projects to apply skills.",
      },
      {
        q: "Is there a certificate after completion?",
        a: "Yes, certificates are awarded upon successful completion.",
      },
      {
        q: "Can I access content offline?",
        a: "Yes, you can download PDFs and videos for offline use.",
      },
      {
        q: "What support is available?",
        a: "We provide 24/7 chat and email support for all students.",
      },
      {
        q: "How long do I have access to the course?",
        a: "You get lifetime access to all course materials once enrolled.",
      },
      {
        q: "Are there any prerequisites?",
        a: "Basic knowledge of Python is recommended.",
      },
      {
        q: "Do you update course content?",
        a: "Yes, we regularly update lectures and notes to reflect the latest industry practices.",
      },
    ],

    glossary: [
      {
        term: "Pandas",
        definition: "A Python library for data analysis and manipulation.",
      },
      {
        term: "NumPy",
        definition: "A Python library for numerical computing.",
      },
      {
        term: "Scikit-learn",
        definition: "A machine learning library for Python.",
      },
      {
        term: "TensorFlow",
        definition: "An open-source library for deep learning and AI.",
      },
    ],

    completionCriteria: [
      "Complete all lectures in each module",
      "Attempt quizzes for each module",
      "Submit all assigned projects",
      "Achieve at least 70% in quizzes",
      "Participate in capstone project review",
    ],

    certificate: true,
    status: "approved",
  },
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
