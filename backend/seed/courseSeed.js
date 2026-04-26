import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "../config/db.js";
import Course from "../models/Course.js";
import User from "../models/User.js";

dotenv.config();

const seedCourses = async () => {
  try {
    await connectDB();

    // Clear old courses
    await Course.deleteMany();

    // Find instructor(s) first
    const instructor = await User.findOne({ email: "ryan@gmail.com" });
    if (!instructor) {
      console.error("Instructor not found. Run instructorSeed.js first!");
      process.exit(1);
    }

 const courses = [
  {
    id: "course_101",
    title: "MERN Stack Development",
    category: "Web Development",
    price: 2999,
    originalPrice: 3999,
    instructorId: instructor._id, 
    studentsEnrolled: 520,
    rating: 4.8,
    thumbnail: "/uploads/courses/C_img_1.png",
    description:
      "Learn to build full-stack applications using MongoDB, Express, React, and Node.js.",
    duration: "120+ Hours",
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
    certificates: [
      {
        courseTitle: "MERN Stack Development",
        certificateImage: "/uploads/certificates/mern_certificate.jpg",
      },
    ],

    projects: [
      {
        title: "MERN Dashboard",
        desc: "Build a modular student dashboard with authentication, dynamic charts, and responsive design.",
        image: "/uploads/projects/mern_dashboard.jpg",
      },
      {
        title: "MERN Ecommerce",
        desc: "Develop a full-stack ecommerce app with product catalog, cart, checkout, and payment integration.",
        image: "/uploads/projects/mern_ecommerce.jpg",
      },
      {
        title: "MERN Social Clone",
        desc: "Create a social media clone with posts, likes, comments, and real-time notifications.",
        image: "/uploads/projects/mern_social_clone.jpg",
      },
    ],
    certificate: true,
    status: "approved",
  },

  // course_102
  {
    id: "course_102",
    title: "Advanced React Masterclass",
    category: "Frontend",
    price: 2499,
    originalPrice: 3499,
    instructorId: instructor._id, 
    studentsEnrolled: 410,
    rating: 4.7,
    thumbnail: "/uploads/courses/C_img_2.png",
    description:
      "Master advanced React concepts including hooks, context API, performance optimization, and scalable architecture.",
    duration: "90+ Hours",
    status: "approved",

    modules: [
      {
        title: "Module 1 - React Fundamentals",
        pdfUrl: "/uploads/notes/react_module1.pdf",
        lectures: [
          {
            title: "React Basics Refresher",
            videoUrl: "/uploads/lectures/react1.mp4",
            releaseDate: "2026-04-10",
            duration: "00:10:00",
          },
          {
            title: "JSX Deep Dive",
            videoUrl: "/uploads/lectures/react2.mp4",
            releaseDate: "2026-04-11",
            duration: "00:09:00",
          },
          {
            title: "Components & Props",
            videoUrl: "/uploads/lectures/react3.mp4",
            releaseDate: "2026-04-12",
            duration: "00:08:30",
          },
          {
            title: "State & Lifecycle",
            videoUrl: "/uploads/lectures/react4.mp4",
            releaseDate: "2026-04-13",
            duration: "00:11:00",
          },
          {
            title: "Event Handling",
            videoUrl: "/uploads/lectures/react5.mp4",
            releaseDate: "2026-04-14",
            duration: "00:07:45",
          },
        ],
        quiz: {
          releaseDate: "2026-04-14",
          questions: [
            {
              question: "What is JSX?",
              options: ["JavaScript XML", "JSON", "HTML"],
              answer: "JavaScript XML",
            },
            {
              question: "Which is used for state?",
              options: ["useState", "useFetch", "useApi"],
              answer: "useState",
            },
            {
              question: "Props are?",
              options: ["Inputs", "Outputs", "Hooks"],
              answer: "Inputs",
            },
            {
              question: "React uses?",
              options: ["Virtual DOM", "Real DOM", "Shadow DOM"],
              answer: "Virtual DOM",
            },
            {
              question: "Which handles events?",
              options: ["Functions", "Classes", "Loops"],
              answer: "Functions",
            },
          ],
        },
      },

      {
        title: "Module 2 - Hooks & Context",
        pdfUrl: "/uploads/notes/react_module2.pdf",
        lectures: [
          {
            title: "useState & useEffect",
            videoUrl: "/uploads/lectures/hook1.mp4",
            releaseDate: "2026-04-15",
            duration: "00:10:30",
          },
          {
            title: "Custom Hooks",
            videoUrl: "/uploads/lectures/hook2.mp4",
            releaseDate: "2026-04-16",
            duration: "00:09:40",
          },
          {
            title: "Context API Basics",
            videoUrl: "/uploads/lectures/hook3.mp4",
            releaseDate: "2026-04-17",
            duration: "00:11:20",
          },
          {
            title: "Global State",
            videoUrl: "/uploads/lectures/hook4.mp4",
            releaseDate: "2026-04-18",
            duration: "00:08:50",
          },
          {
            title: "useReducer",
            videoUrl: "/uploads/lectures/hook5.mp4",
            releaseDate: "2026-04-19",
            duration: "00:10:10",
          },
        ],
        quiz: {
          releaseDate: "2026-04-19",
          questions: [
            {
              question: "Which hook handles side effects?",
              options: ["useEffect", "useState", "useMemo"],
              answer: "useEffect",
            },
            {
              question: "Context API solves?",
              options: ["Prop drilling", "Routing", "Styling"],
              answer: "Prop drilling",
            },
            {
              question: "Custom hooks are?",
              options: ["Reusable logic", "Components", "CSS"],
              answer: "Reusable logic",
            },
            {
              question: "useReducer is for?",
              options: ["Complex state", "Routing", "Animation"],
              answer: "Complex state",
            },
            {
              question: "Hooks introduced in?",
              options: ["React 16.8", "React 15", "React 17"],
              answer: "React 16.8",
            },
          ],
        },
      },

      {
        title: "Module 3 - Performance Optimization",
        pdfUrl: "/uploads/notes/react_module3.pdf",
        lectures: [
          {
            title: "Memoization",
            videoUrl: "/uploads/lectures/perf1.mp4",
            releaseDate: "2026-04-20",
            duration: "00:09:30",
          },
          {
            title: "React.memo",
            videoUrl: "/uploads/lectures/perf2.mp4",
            releaseDate: "2026-04-21",
            duration: "00:08:20",
          },
          {
            title: "useMemo",
            videoUrl: "/uploads/lectures/perf3.mp4",
            releaseDate: "2026-04-22",
            duration: "00:10:15",
          },
          {
            title: "useCallback",
            videoUrl: "/uploads/lectures/perf4.mp4",
            releaseDate: "2026-04-23",
            duration: "00:09:45",
          },
          {
            title: "Lazy Loading",
            videoUrl: "/uploads/lectures/perf5.mp4",
            releaseDate: "2026-04-24",
            duration: "00:08:30",
          },
        ],
        quiz: {
          releaseDate: "2026-04-24",
          questions: [
            {
              question: "useMemo does?",
              options: ["Caches values", "Fetch data", "Routing"],
              answer: "Caches values",
            },
            {
              question: "React.memo prevents?",
              options: ["Re-render", "Routing", "State"],
              answer: "Re-render",
            },
            {
              question: "Lazy loading improves?",
              options: ["Performance", "Design", "Backend"],
              answer: "Performance",
            },
            {
              question: "useCallback returns?",
              options: ["Function", "Object", "String"],
              answer: "Function",
            },
            {
              question: "Optimization goal?",
              options: ["Speed", "Size", "Color"],
              answer: "Speed",
            },
          ],
        },
      },

      {
        title: "Module 4 - Scalable Architecture",
        pdfUrl: "/uploads/notes/react_module4.pdf",
        lectures: [
          {
            title: "Folder Structure",
            videoUrl: "/uploads/lectures/arch1.mp4",
            releaseDate: "2026-04-25",
            duration: "00:08:00",
          },
          {
            title: "Reusable Components",
            videoUrl: "/uploads/lectures/arch2.mp4",
            releaseDate: "2026-04-26",
            duration: "00:09:30",
          },
          {
            title: "State Management",
            videoUrl: "/uploads/lectures/arch3.mp4",
            releaseDate: "2026-04-27",
            duration: "00:10:10",
          },
          {
            title: "Redux Basics",
            videoUrl: "/uploads/lectures/arch4.mp4",
            releaseDate: "2026-04-28",
            duration: "00:11:20",
          },
          {
            title: "Best Practices",
            videoUrl: "/uploads/lectures/arch5.mp4",
            releaseDate: "2026-04-29",
            duration: "00:08:40",
          },
        ],
        quiz: {
          releaseDate: "2026-04-29",
          questions: [
            {
              question: "Redux is used for?",
              options: ["State", "Routing", "CSS"],
              answer: "State",
            },
            {
              question: "Reusable components help?",
              options: ["Consistency", "Speed", "Both"],
              answer: "Both",
            },
            {
              question: "Best practice?",
              options: ["Modular code", "Inline everything", "Global vars"],
              answer: "Modular code",
            },
            {
              question: "Folder structure improves?",
              options: ["Maintainability", "Color", "Size"],
              answer: "Maintainability",
            },
            {
              question: "Large apps use?",
              options: ["State mgmt", "Only props", "No state"],
              answer: "State mgmt",
            },
          ],
        },
      },
    ],

    faqs: [
      {
        q: "Is this beginner friendly?",
        a: "It is recommended for intermediate learners.",
      },
      { q: "Are classes recorded?", a: "Yes, all are recorded." },
      { q: "Do I get certificate?", a: "Yes after completion." },
      { q: "Any projects included?", a: "Yes real-world projects." },
      { q: "Support available?", a: "24/7 support." },
      { q: "Offline access?", a: "Yes downloads available." },
      { q: "Duration?", a: "90+ hours." },
      { q: "Prerequisite?", a: "Basic React knowledge." },
      { q: "Updated content?", a: "Yes regularly." },
      { q: "Placement help?", a: "Yes provided." },
    ],

    glossary: [
      { term: "Hooks", definition: "Functions for state & lifecycle" },
      { term: "Context API", definition: "Global state sharing" },
      { term: "Memoization", definition: "Caching results" },
      { term: "Redux", definition: "State management library" },
    ],

    completionCriteria: [
      "Complete all lectures",
      "Attempt quizzes",
      "Submit project",
      "70% score",
      "Final review",
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

    certificate: true,
    status: "approved",
  },

  // course_103
  {
    id: "course_103",
    title: "Node.js & Express Bootcamp",
    category: "Backend Development",
    price: 2799,
    originalPrice: 3799,
    instructorId: instructor._id, 
    studentsEnrolled: 360,
    rating: 4.8,
    thumbnail: "/uploads/courses/C_img_3.png",
    description:
      "Learn backend development with Node.js and Express. Build APIs, handle authentication, work with databases, and create scalable server-side applications.",
    duration: "100+ Hours",
    status: "approved",

    modules: [
      {
        title: "Module 1 - Node.js Fundamentals",
        pdfUrl: "/uploads/notes/node_m1.pdf",
        lectures: [
          {
            title: "Intro to Node.js",
            videoUrl: "/uploads/lectures/node1.mp4",
            releaseDate: "2026-04-10",
            duration: "00:09:30",
          },
          {
            title: "Node Architecture",
            videoUrl: "/uploads/lectures/node2.mp4",
            releaseDate: "2026-04-11",
            duration: "00:10:10",
          },
          {
            title: "Modules & NPM",
            videoUrl: "/uploads/lectures/node3.mp4",
            releaseDate: "2026-04-12",
            duration: "00:09:00",
          },
          {
            title: "File System",
            videoUrl: "/uploads/lectures/node4.mp4",
            releaseDate: "2026-04-13",
            duration: "00:10:20",
          },
          {
            title: "Event Loop",
            videoUrl: "/uploads/lectures/node5.mp4",
            releaseDate: "2026-04-14",
            duration: "00:08:40",
          },
        ],
        quiz: {
          releaseDate: "2026-04-14",
          questions: [
            {
              question: "Node.js is?",
              options: ["Runtime", "Framework", "Library"],
              answer: "Runtime",
            },
            {
              question: "NPM used for?",
              options: ["Packages", "Design", "DB"],
              answer: "Packages",
            },
            {
              question: "File system module does?",
              options: ["File handling", "Routing", "UI"],
              answer: "File handling",
            },
            {
              question: "Event loop handles?",
              options: ["Async tasks", "UI", "CSS"],
              answer: "Async tasks",
            },
            {
              question: "Node uses?",
              options: ["JavaScript", "Python", "Java"],
              answer: "JavaScript",
            },
          ],
        },
      },

      {
        title: "Module 2 - Express Framework",
        pdfUrl: "/uploads/notes/node_m2.pdf",
        lectures: [
          {
            title: "Intro to Express",
            videoUrl: "/uploads/lectures/exp1.mp4",
            releaseDate: "2026-04-15",
            duration: "00:10:00",
          },
          {
            title: "Routing",
            videoUrl: "/uploads/lectures/exp2.mp4",
            releaseDate: "2026-04-16",
            duration: "00:09:30",
          },
          {
            title: "Middleware",
            videoUrl: "/uploads/lectures/exp3.mp4",
            releaseDate: "2026-04-17",
            duration: "00:08:50",
          },
          {
            title: "Request & Response",
            videoUrl: "/uploads/lectures/exp4.mp4",
            releaseDate: "2026-04-18",
            duration: "00:10:20",
          },
          {
            title: "Error Handling",
            videoUrl: "/uploads/lectures/exp5.mp4",
            releaseDate: "2026-04-19",
            duration: "00:09:10",
          },
        ],
        quiz: {
          releaseDate: "2026-04-19",
          questions: [
            {
              question: "Express is?",
              options: ["Framework", "Library", "DB"],
              answer: "Framework",
            },
            {
              question: "Middleware used for?",
              options: ["Handling requests", "Styling", "DB"],
              answer: "Handling requests",
            },
            {
              question: "app.get handles?",
              options: ["GET request", "POST", "PUT"],
              answer: "GET request",
            },
            {
              question: "Routing means?",
              options: ["URL handling", "Design", "Storage"],
              answer: "URL handling",
            },
            {
              question: "Error handling improves?",
              options: ["Stability", "Color", "Speed"],
              answer: "Stability",
            },
          ],
        },
      },

      {
        title: "Module 3 - Databases & APIs",
        pdfUrl: "/uploads/notes/node_m3.pdf",
        lectures: [
          {
            title: "MongoDB Intro",
            videoUrl: "/uploads/lectures/node6.mp4",
            releaseDate: "2026-04-20",
            duration: "00:10:10",
          },
          {
            title: "Mongoose ODM",
            videoUrl: "/uploads/lectures/node7.mp4",
            releaseDate: "2026-04-21",
            duration: "00:09:40",
          },
          {
            title: "CRUD Operations",
            videoUrl: "/uploads/lectures/node8.mp4",
            releaseDate: "2026-04-22",
            duration: "00:10:20",
          },
          {
            title: "REST APIs",
            videoUrl: "/uploads/lectures/node9.mp4",
            releaseDate: "2026-04-23",
            duration: "00:09:30",
          },
          {
            title: "API Testing",
            videoUrl: "/uploads/lectures/node10.mp4",
            releaseDate: "2026-04-24",
            duration: "00:08:50",
          },
        ],
        quiz: {
          releaseDate: "2026-04-24",
          questions: [
            {
              question: "MongoDB is?",
              options: ["NoSQL DB", "SQL DB", "Framework"],
              answer: "NoSQL DB",
            },
            {
              question: "CRUD means?",
              options: [
                "Create Read Update Delete",
                "Code Run Upload Deploy",
                "Control Route Use Design",
              ],
              answer: "Create Read Update Delete",
            },
            {
              question: "Mongoose is?",
              options: ["ODM", "UI", "API"],
              answer: "ODM",
            },
            {
              question: "REST API uses?",
              options: ["HTTP", "CSS", "HTML"],
              answer: "HTTP",
            },
            {
              question: "POST method?",
              options: ["Create", "Read", "Delete"],
              answer: "Create",
            },
          ],
        },
      },

      {
        title: "Module 4 - Authentication & Deployment",
        pdfUrl: "/uploads/notes/node_m4.pdf",
        lectures: [
          {
            title: "JWT Authentication",
            videoUrl: "/uploads/lectures/node11.mp4",
            releaseDate: "2026-04-25",
            duration: "00:09:50",
          },
          {
            title: "User Login System",
            videoUrl: "/uploads/lectures/node12.mp4",
            releaseDate: "2026-04-26",
            duration: "00:10:20",
          },
          {
            title: "Security Best Practices",
            videoUrl: "/uploads/lectures/node13.mp4",
            releaseDate: "2026-04-27",
            duration: "00:09:00",
          },
          {
            title: "Deployment Basics",
            videoUrl: "/uploads/lectures/node14.mp4",
            releaseDate: "2026-04-28",
            duration: "00:08:40",
          },
          {
            title: "Cloud Deployment",
            videoUrl: "/uploads/lectures/node15.mp4",
            releaseDate: "2026-04-29",
            duration: "00:10:10",
          },
        ],
        quiz: {
          releaseDate: "2026-04-29",
          questions: [
            {
              question: "JWT used for?",
              options: ["Authentication", "Styling", "DB"],
              answer: "Authentication",
            },
            {
              question: "Login system needs?",
              options: ["Auth", "CSS", "HTML"],
              answer: "Auth",
            },
            {
              question: "Security ensures?",
              options: ["Protection", "Color", "Speed"],
              answer: "Protection",
            },
            {
              question: "Deployment means?",
              options: ["Hosting app", "Delete", "Code"],
              answer: "Hosting app",
            },
            {
              question: "Cloud hosting example?",
              options: ["AWS", "Photoshop", "Excel"],
              answer: "AWS",
            },
          ],
        },
      },
    ],

    faqs: [
      { q: "Is this beginner friendly?", a: "Yes, starts from Node basics." },
      { q: "Do I get certificate?", a: "Yes after completion." },
      { q: "Are lectures recorded?", a: "Yes." },
      { q: "Projects included?", a: "Yes real backend projects." },
      { q: "Support?", a: "24/7 support." },
      { q: "Offline access?", a: "Yes available." },
      { q: "Duration?", a: "100+ hours." },
      { q: "Prerequisite?", a: "Basic JavaScript recommended." },
      { q: "Updated content?", a: "Yes regularly." },
      { q: "Placement help?", a: "Yes provided." },
    ],

    glossary: [
      { term: "Node.js", definition: "JavaScript runtime" },
      { term: "Express", definition: "Backend framework" },
      { term: "JWT", definition: "Authentication token" },
      { term: "REST API", definition: "HTTP-based API design" },
    ],

    completionCriteria: [
      "Complete all lectures",
      "Attempt quizzes",
      "Build API project",
      "70% score",
      "Final review",
    ],

    certificates: [
      {
        courseTitle: "Node.js & Express Bootcamp",
        certificateImage: "/uploads/certificates/node_certificate.jpg",
      },
    ],
    projects: [
      {
        title: "Node REST API",
        desc: "Develop a RESTful API with CRUD operations, authentication, and error handling using Express and MongoDB.",
        image: "/uploads/projects/node_restapi.jpg",
      },
      {
        title: "Node Auth System",
        desc: "Build a secure authentication system with JWT, role-based access, and password hashing.",
        image: "/uploads/projects/node_auth.jpg",
      },
      {
        title: "Node Scalability",
        desc: "Implement clustering and load balancing to scale Node.js applications for high traffic.",
        image: "/uploads/projects/node_scalability.jpg",
      },
    ],

    certificate: true,
    status: "approved",
  },

  // course_104
  {
    id: "course_104",
    title: "UI/UX Design Fundamentals",
    category: "Design",
    price: 1799,
    originalPrice: 2499,
    instructorId: instructor._id, 
    studentsEnrolled: 300,
    rating: 4.5,
    thumbnail: "/uploads/courses/C_img_4.png",
    description:
      "Learn UI/UX design principles including wireframing, prototyping, typography, and accessibility to create user-friendly digital experiences.",
    duration: "80+ Hours",
    status: "approved",

    modules: [
      {
        title: "Module 1 - Design Principles",
        pdfUrl: "/uploads/notes/uiux_m1.pdf",
        lectures: [
          {
            title: "Intro to UI/UX",
            videoUrl: "/uploads/lectures/uiux1.mp4",
            releaseDate: "2026-04-10",
            duration: "00:08:30",
          },
          {
            title: "Color Theory",
            videoUrl: "/uploads/lectures/uiux2.mp4",
            releaseDate: "2026-04-11",
            duration: "00:09:10",
          },
          {
            title: "Typography Basics",
            videoUrl: "/uploads/lectures/uiux3.mp4",
            releaseDate: "2026-04-12",
            duration: "00:10:00",
          },
          {
            title: "Visual Hierarchy",
            videoUrl: "/uploads/lectures/uiux4.mp4",
            releaseDate: "2026-04-13",
            duration: "00:08:45",
          },
          {
            title: "Spacing & Layout",
            videoUrl: "/uploads/lectures/uiux5.mp4",
            releaseDate: "2026-04-14",
            duration: "00:09:20",
          },
        ],
        quiz: {
          releaseDate: "2026-04-14",
          questions: [
            {
              question: "UI stands for?",
              options: ["User Interface", "User Input", "User Info"],
              answer: "User Interface",
            },
            {
              question: "UX focuses on?",
              options: ["Experience", "Code", "Server"],
              answer: "Experience",
            },
            {
              question: "Typography is?",
              options: ["Fonts", "Colors", "Layout"],
              answer: "Fonts",
            },
            {
              question: "Hierarchy means?",
              options: ["Importance order", "Colors", "Code"],
              answer: "Importance order",
            },
            {
              question: "Spacing improves?",
              options: ["Readability", "Speed", "Security"],
              answer: "Readability",
            },
          ],
        },
      },

      {
        title: "Module 2 - Wireframing & Prototyping",
        pdfUrl: "/uploads/notes/uiux_m2.pdf",
        lectures: [
          {
            title: "Wireframing Basics",
            videoUrl: "/uploads/lectures/uiux6.mp4",
            releaseDate: "2026-04-15",
            duration: "00:10:00",
          },
          {
            title: "Low vs High Fidelity",
            videoUrl: "/uploads/lectures/uiux7.mp4",
            releaseDate: "2026-04-16",
            duration: "00:09:30",
          },
          {
            title: "Prototyping Tools",
            videoUrl: "/uploads/lectures/uiux8.mp4",
            releaseDate: "2026-04-17",
            duration: "00:08:50",
          },
          {
            title: "User Flows",
            videoUrl: "/uploads/lectures/uiux9.mp4",
            releaseDate: "2026-04-18",
            duration: "00:10:10",
          },
          {
            title: "Interactive Prototypes",
            videoUrl: "/uploads/lectures/uiux10.mp4",
            releaseDate: "2026-04-19",
            duration: "00:09:40",
          },
        ],
        quiz: {
          releaseDate: "2026-04-19",
          questions: [
            {
              question: "Wireframe is?",
              options: ["Layout sketch", "Code", "Database"],
              answer: "Layout sketch",
            },
            {
              question: "Prototype is?",
              options: ["Interactive model", "Final app", "API"],
              answer: "Interactive model",
            },
            {
              question: "Figma used for?",
              options: ["Design", "Database", "Backend"],
              answer: "Design",
            },
            {
              question: "User flow shows?",
              options: ["Navigation", "Colors", "Fonts"],
              answer: "Navigation",
            },
            {
              question: "High fidelity means?",
              options: ["Detailed design", "Simple sketch", "Code"],
              answer: "Detailed design",
            },
          ],
        },
      },

      {
        title: "Module 3 - UX Research & Testing",
        pdfUrl: "/uploads/notes/uiux_m3.pdf",
        lectures: [
          {
            title: "User Research",
            videoUrl: "/uploads/lectures/uiux11.mp4",
            releaseDate: "2026-04-20",
            duration: "00:09:30",
          },
          {
            title: "Personas",
            videoUrl: "/uploads/lectures/uiux12.mp4",
            releaseDate: "2026-04-21",
            duration: "00:08:20",
          },
          {
            title: "Usability Testing",
            videoUrl: "/uploads/lectures/uiux13.mp4",
            releaseDate: "2026-04-22",
            duration: "00:10:00",
          },
          {
            title: "A/B Testing",
            videoUrl: "/uploads/lectures/uiux14.mp4",
            releaseDate: "2026-04-23",
            duration: "00:09:10",
          },
          {
            title: "Feedback Analysis",
            videoUrl: "/uploads/lectures/uiux15.mp4",
            releaseDate: "2026-04-24",
            duration: "00:08:50",
          },
        ],
        quiz: {
          releaseDate: "2026-04-24",
          questions: [
            {
              question: "Persona is?",
              options: ["User profile", "Code", "UI"],
              answer: "User profile",
            },
            {
              question: "Testing improves?",
              options: ["Usability", "Color", "Speed"],
              answer: "Usability",
            },
            {
              question: "A/B testing compares?",
              options: ["Versions", "Servers", "Codes"],
              answer: "Versions",
            },
            {
              question: "Research helps?",
              options: ["User needs", "Backend", "API"],
              answer: "User needs",
            },
            {
              question: "Feedback used for?",
              options: ["Improvement", "Delete", "Ignore"],
              answer: "Improvement",
            },
          ],
        },
      },

      {
        title: "Module 4 - Design Systems & Accessibility",
        pdfUrl: "/uploads/notes/uiux_m4.pdf",
        lectures: [
          {
            title: "Design Systems",
            videoUrl: "/uploads/lectures/uiux16.mp4",
            releaseDate: "2026-04-25",
            duration: "00:09:00",
          },
          {
            title: "Component Libraries",
            videoUrl: "/uploads/lectures/uiux17.mp4",
            releaseDate: "2026-04-26",
            duration: "00:10:20",
          },
          {
            title: "Accessibility Basics",
            videoUrl: "/uploads/lectures/uiux18.mp4",
            releaseDate: "2026-04-27",
            duration: "00:08:30",
          },
          {
            title: "Responsive Design",
            videoUrl: "/uploads/lectures/uiux19.mp4",
            releaseDate: "2026-04-28",
            duration: "00:09:40",
          },
          {
            title: "Best Practices",
            videoUrl: "/uploads/lectures/uiux20.mp4",
            releaseDate: "2026-04-29",
            duration: "00:08:50",
          },
        ],
        quiz: {
          releaseDate: "2026-04-29",
          questions: [
            {
              question: "Design system ensures?",
              options: ["Consistency", "Speed", "DB"],
              answer: "Consistency",
            },
            {
              question: "Accessibility means?",
              options: ["Inclusive design", "Fast app", "Small size"],
              answer: "Inclusive design",
            },
            {
              question: "Responsive design adapts to?",
              options: ["Screen size", "Color", "Code"],
              answer: "Screen size",
            },
            {
              question: "Component library helps?",
              options: ["Reuse", "Delete", "Slow"],
              answer: "Reuse",
            },
            {
              question: "Best practice is?",
              options: ["User-focused", "Code-heavy", "Random"],
              answer: "User-focused",
            },
          ],
        },
      },
    ],

    faqs: [
      { q: "Is this beginner friendly?", a: "Yes, starts from basics." },
      { q: "Do I get certificate?", a: "Yes after completion." },
      { q: "Are lectures recorded?", a: "Yes." },
      { q: "Projects included?", a: "Yes real-world projects." },
      { q: "Support?", a: "24/7 support." },
      { q: "Offline access?", a: "Yes available." },
      { q: "Duration?", a: "80+ hours." },
      { q: "Prerequisite?", a: "No prior experience required." },
      { q: "Updated content?", a: "Yes regularly." },
      { q: "Placement help?", a: "Yes provided." },
    ],

    glossary: [
      { term: "Wireframe", definition: "Layout blueprint" },
      { term: "Prototype", definition: "Interactive model" },
      { term: "Accessibility", definition: "Inclusive design" },
      { term: "Design System", definition: "Reusable UI rules" },
    ],

    completionCriteria: [
      "Complete all lectures",
      "Attempt quizzes",
      "Submit project",
      "70% score",
      "Final review",
    ],

    certificates: [
      {
        courseTitle: "UI/UX Design Fundamentals",
        certificateImage: "/uploads/certificates/uiux_certificate.jpg",
      },
    ],
    projects: [
      {
        title: "Interactive Prototype",
        desc: "Design and build interactive prototypes with Figma, focusing on usability and accessibility.",
        image: "/uploads/projects/Interactive_Prototype.jpg",
      },
      {
        title: "Mobile Wireframe",
        desc: "Create mobile app wireframes with clear navigation flows and responsive layouts.",
        image: "/uploads/projects/mobile_wireframe.jpg",
      },
      {
        title: "Website Redesign",
        desc: "Redesign an existing website with modern UI/UX principles, typography, and color theory.",
        image: "/uploads/projects/website_redesign.jpg",
      },
    ],

    certificate: true,
    status: "approved",
  },

  // course_105
  {
    id: "course_105",
    title: "DevOps & Cloud Deployment",
    category: "DevOps",
    price: 3499,
    originalPrice: 4499,
    instructorId: instructor._id, 
    studentsEnrolled: 290,
    rating: 4.7,
    thumbnail: "/uploads/courses/C_img_5.png",
    description:
      "Master DevOps practices including CI/CD, Docker, Kubernetes, and cloud deployment with real-world projects.",
    duration: "110+ Hours",
    status: "approved",

    modules: [
      {
        title: "Module 1 - Linux & Git",
        pdfUrl: "/uploads/notes/devops1.pdf",
        lectures: [
          {
            title: "Linux Basics",
            videoUrl: "/uploads/lectures/d1.mp4",
            releaseDate: "2026-04-10",
            duration: "00:10:20",
          },
          {
            title: "File System",
            videoUrl: "/uploads/lectures/d2.mp4",
            releaseDate: "2026-04-11",
            duration: "00:09:00",
          },
          {
            title: "Shell Commands",
            videoUrl: "/uploads/lectures/d3.mp4",
            releaseDate: "2026-04-12",
            duration: "00:08:40",
          },
          {
            title: "Git Basics",
            videoUrl: "/uploads/lectures/d4.mp4",
            releaseDate: "2026-04-13",
            duration: "00:10:30",
          },
          {
            title: "Branching",
            videoUrl: "/uploads/lectures/d5.mp4",
            releaseDate: "2026-04-14",
            duration: "00:09:50",
          },
        ],
        quiz: {
          releaseDate: "2026-04-14",
          questions: [
            {
              question: "Linux command to list?",
              options: ["ls", "dir", "show"],
              answer: "ls",
            },
            {
              question: "Git init?",
              options: ["Create repo", "Delete", "Clone"],
              answer: "Create repo",
            },
            {
              question: "Shell is?",
              options: ["CLI", "UI", "DB"],
              answer: "CLI",
            },
            {
              question: "Git branch used for?",
              options: ["Versioning", "Design", "API"],
              answer: "Versioning",
            },
            {
              question: "Git merge?",
              options: ["Combine", "Delete", "Push"],
              answer: "Combine",
            },
          ],
        },
      },

      {
        title: "Module 2 - CI/CD",
        pdfUrl: "/uploads/notes/devops2.pdf",
        lectures: [
          {
            title: "CI/CD Intro",
            videoUrl: "/uploads/lectures/d6.mp4",
            releaseDate: "2026-04-15",
            duration: "00:11:10",
          },
          {
            title: "Jenkins",
            videoUrl: "/uploads/lectures/d7.mp4",
            releaseDate: "2026-04-16",
            duration: "00:09:40",
          },
          {
            title: "GitHub Actions",
            videoUrl: "/uploads/lectures/d8.mp4",
            releaseDate: "2026-04-17",
            duration: "00:10:20",
          },
          {
            title: "Pipeline Flow",
            videoUrl: "/uploads/lectures/d9.mp4",
            releaseDate: "2026-04-18",
            duration: "00:08:50",
          },
          {
            title: "Automation",
            videoUrl: "/uploads/lectures/d10.mp4",
            releaseDate: "2026-04-19",
            duration: "00:09:30",
          },
        ],
        quiz: {
          releaseDate: "2026-04-19",
          questions: [
            {
              question: "CI means?",
              options: ["Continuous Integration", "Code Init", "Control"],
              answer: "Continuous Integration",
            },
            {
              question: "CD means?",
              options: ["Continuous Deployment", "Code Dev", "Control"],
              answer: "Continuous Deployment",
            },
            {
              question: "Jenkins is?",
              options: ["CI tool", "DB", "UI"],
              answer: "CI tool",
            },
            {
              question: "Pipeline?",
              options: ["Automation flow", "DB", "Code"],
              answer: "Automation flow",
            },
            {
              question: "Automation improves?",
              options: ["Speed", "Color", "Size"],
              answer: "Speed",
            },
          ],
        },
      },

      {
        title: "Module 3 - Docker",
        pdfUrl: "/uploads/notes/devops3.pdf",
        lectures: [
          {
            title: "Docker Intro",
            videoUrl: "/uploads/lectures/d11.mp4",
            releaseDate: "2026-04-20",
            duration: "00:10:00",
          },
          {
            title: "Images",
            videoUrl: "/uploads/lectures/d12.mp4",
            releaseDate: "2026-04-21",
            duration: "00:09:10",
          },
          {
            title: "Containers",
            videoUrl: "/uploads/lectures/d13.mp4",
            releaseDate: "2026-04-22",
            duration: "00:08:30",
          },
          {
            title: "Compose",
            videoUrl: "/uploads/lectures/d14.mp4",
            releaseDate: "2026-04-23",
            duration: "00:10:40",
          },
          {
            title: "Best Practices",
            videoUrl: "/uploads/lectures/d15.mp4",
            releaseDate: "2026-04-24",
            duration: "00:09:20",
          },
        ],
        quiz: {
          releaseDate: "2026-04-24",
          questions: [
            {
              question: "Docker used for?",
              options: ["Containers", "CSS", "HTML"],
              answer: "Containers",
            },
            {
              question: "Image is?",
              options: ["Blueprint", "App", "Server"],
              answer: "Blueprint",
            },
            {
              question: "docker run?",
              options: ["Start", "Delete", "Build"],
              answer: "Start",
            },
            {
              question: "Compose used for?",
              options: ["Multi-container", "Single", "DB"],
              answer: "Multi-container",
            },
            {
              question: "Containers are?",
              options: ["Lightweight", "Heavy", "Slow"],
              answer: "Lightweight",
            },
          ],
        },
      },

      {
        title: "Module 4 - Kubernetes & Cloud",
        pdfUrl: "/uploads/notes/devops4.pdf",
        lectures: [
          {
            title: "Kubernetes",
            videoUrl: "/uploads/lectures/d16.mp4",
            releaseDate: "2026-04-25",
            duration: "00:09:40",
          },
          {
            title: "Pods",
            videoUrl: "/uploads/lectures/d17.mp4",
            releaseDate: "2026-04-26",
            duration: "00:08:50",
          },
          {
            title: "Scaling",
            videoUrl: "/uploads/lectures/d18.mp4",
            releaseDate: "2026-04-27",
            duration: "00:10:30",
          },
          {
            title: "Cloud Intro",
            videoUrl: "/uploads/lectures/d19.mp4",
            releaseDate: "2026-04-28",
            duration: "00:09:10",
          },
          {
            title: "Deployment",
            videoUrl: "/uploads/lectures/d20.mp4",
            releaseDate: "2026-04-29",
            duration: "00:10:20",
          },
        ],
        quiz: {
          releaseDate: "2026-04-29",
          questions: [
            {
              question: "Kubernetes manages?",
              options: ["Containers", "UI", "CSS"],
              answer: "Containers",
            },
            {
              question: "Pod is?",
              options: ["Smallest unit", "Server", "DB"],
              answer: "Smallest unit",
            },
            {
              question: "Scaling?",
              options: ["Increase capacity", "Delete", "Reduce"],
              answer: "Increase capacity",
            },
            {
              question: "Cloud example?",
              options: ["AWS", "HTML", "CSS"],
              answer: "AWS",
            },
            {
              question: "Deployment ensures?",
              options: ["Availability", "Color", "Design"],
              answer: "Availability",
            },
          ],
        },
      },
    ],

    faqs: [
      { q: "Is beginner friendly?", a: "Yes starts from basics." },
      { q: "Certificate?", a: "Yes provided." },
      { q: "Recorded?", a: "Yes." },
      { q: "Projects?", a: "Yes included." },
      { q: "Support?", a: "24/7 support." },
      { q: "Offline access?", a: "Yes." },
      { q: "Duration?", a: "110+ hours." },
      { q: "Prerequisite?", a: "Basic coding helpful." },
      { q: "Updated?", a: "Yes." },
      { q: "Placement?", a: "Yes support available." },
    ],

    glossary: [
      { term: "CI/CD", definition: "Automation pipeline" },
      { term: "Docker", definition: "Container platform" },
      { term: "Kubernetes", definition: "Container manager" },
      { term: "Cloud", definition: "Remote hosting" },
    ],

    completionCriteria: [
      "Complete all lectures",
      "Attempt quizzes",
      "Submit project",
      "70% score",
      "Final review",
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
        desc: "Design and implement a fully automated CI/CD pipeline using Jenkins and GitHub Actions. Integrate build, test, and deployment stages for seamless delivery.",
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

    certificate: true,
    status: "approved",
  },

  // course_106
  {
    id: "course_106",
    title: "Data Science with Python",
    category: "Data Science",
    price: 3999,
    originalPrice: 4999,
    instructorId: instructor._id, 
    studentsEnrolled: 340,
    rating: 4.9,
    thumbnail: "/uploads/courses/C_img_6.png",
    description:
      "Learn data science using Python including data analysis, visualization, machine learning, and AI deployment.",
    duration: "115+ Hours",
    status: "approved",

    modules: [
      {
        title: "Module 1 - Python Basics",
        pdfUrl: "/uploads/notes/ds1.pdf",
        lectures: [
          {
            title: "Python Intro",
            videoUrl: "/uploads/lectures/p1.mp4",
            releaseDate: "2026-04-10",
            duration: "00:10:30",
          },
          {
            title: "Data Types",
            videoUrl: "/uploads/lectures/p2.mp4",
            releaseDate: "2026-04-11",
            duration: "00:09:20",
          },
          {
            title: "Control Flow",
            videoUrl: "/uploads/lectures/p3.mp4",
            releaseDate: "2026-04-12",
            duration: "00:08:50",
          },
          {
            title: "Functions",
            videoUrl: "/uploads/lectures/p4.mp4",
            releaseDate: "2026-04-13",
            duration: "00:10:10",
          },
          {
            title: "Modules",
            videoUrl: "/uploads/lectures/p5.mp4",
            releaseDate: "2026-04-14",
            duration: "00:09:40",
          },
        ],
        quiz: {
          releaseDate: "2026-04-14",
          questions: [
            {
              question: "Python is?",
              options: ["Language", "DB", "OS"],
              answer: "Language",
            },
            {
              question: "Function keyword?",
              options: ["def", "func", "function"],
              answer: "def",
            },
            {
              question: "List is?",
              options: ["Collection", "Loop", "API"],
              answer: "Collection",
            },
            {
              question: "If used for?",
              options: ["Condition", "Loop", "Import"],
              answer: "Condition",
            },
            {
              question: "Module is?",
              options: ["Reusable code", "UI", "DB"],
              answer: "Reusable code",
            },
          ],
        },
      },

      {
        title: "Module 2 - Data Analysis",
        pdfUrl: "/uploads/notes/ds2.pdf",
        lectures: [
          {
            title: "NumPy Basics",
            videoUrl: "/uploads/lectures/p6.mp4",
            releaseDate: "2026-04-15",
            duration: "00:11:00",
          },
          {
            title: "Pandas Intro",
            videoUrl: "/uploads/lectures/p7.mp4",
            releaseDate: "2026-04-16",
            duration: "00:10:10",
          },
          {
            title: "Data Cleaning",
            videoUrl: "/uploads/lectures/p8.mp4",
            releaseDate: "2026-04-17",
            duration: "00:09:50",
          },
          {
            title: "EDA",
            videoUrl: "/uploads/lectures/p9.mp4",
            releaseDate: "2026-04-18",
            duration: "00:10:40",
          },
          {
            title: "Visualization",
            videoUrl: "/uploads/lectures/p10.mp4",
            releaseDate: "2026-04-19",
            duration: "00:09:30",
          },
        ],
        quiz: {
          releaseDate: "2026-04-19",
          questions: [
            {
              question: "NumPy used for?",
              options: ["Arrays", "UI", "Routing"],
              answer: "Arrays",
            },
            {
              question: "Pandas used for?",
              options: ["Dataframes", "CSS", "HTML"],
              answer: "Dataframes",
            },
            {
              question: "EDA means?",
              options: ["Exploratory Data Analysis", "Edit Data", "Extra Data"],
              answer: "Exploratory Data Analysis",
            },
            {
              question: "Cleaning removes?",
              options: ["Errors", "Design", "Speed"],
              answer: "Errors",
            },
            {
              question: "Visualization shows?",
              options: ["Graphs", "Code", "API"],
              answer: "Graphs",
            },
          ],
        },
      },

      {
        title: "Module 3 - Machine Learning",
        pdfUrl: "/uploads/notes/ds3.pdf",
        lectures: [
          {
            title: "ML Intro",
            videoUrl: "/uploads/lectures/p11.mp4",
            releaseDate: "2026-04-20",
            duration: "00:10:20",
          },
          {
            title: "Supervised Learning",
            videoUrl: "/uploads/lectures/p12.mp4",
            releaseDate: "2026-04-21",
            duration: "00:09:40",
          },
          {
            title: "Unsupervised Learning",
            videoUrl: "/uploads/lectures/p13.mp4",
            releaseDate: "2026-04-22",
            duration: "00:08:50",
          },
          {
            title: "Model Training",
            videoUrl: "/uploads/lectures/p14.mp4",
            releaseDate: "2026-04-23",
            duration: "00:10:30",
          },
          {
            title: "Evaluation Metrics",
            videoUrl: "/uploads/lectures/p15.mp4",
            releaseDate: "2026-04-24",
            duration: "00:09:20",
          },
        ],
        quiz: {
          releaseDate: "2026-04-24",
          questions: [
            {
              question: "ML stands for?",
              options: ["Machine Learning", "Manual Logic", "Main Loop"],
              answer: "Machine Learning",
            },
            {
              question: "Supervised uses?",
              options: ["Labels", "No labels", "Random"],
              answer: "Labels",
            },
            {
              question: "Unsupervised uses?",
              options: ["No labels", "Labels", "Code"],
              answer: "No labels",
            },
            {
              question: "Model training?",
              options: ["Learning", "Design", "UI"],
              answer: "Learning",
            },
            {
              question: "Accuracy is?",
              options: ["Metric", "Library", "Code"],
              answer: "Metric",
            },
          ],
        },
      },

      {
        title: "Module 4 - AI & Deployment",
        pdfUrl: "/uploads/notes/ds4.pdf",
        lectures: [
          {
            title: "Deep Learning",
            videoUrl: "/uploads/lectures/p16.mp4",
            releaseDate: "2026-04-25",
            duration: "00:10:10",
          },
          {
            title: "TensorFlow",
            videoUrl: "/uploads/lectures/p17.mp4",
            releaseDate: "2026-04-26",
            duration: "00:09:30",
          },
          {
            title: "GenAI Intro",
            videoUrl: "/uploads/lectures/p18.mp4",
            releaseDate: "2026-04-27",
            duration: "00:08:40",
          },
          {
            title: "Model Deployment",
            videoUrl: "/uploads/lectures/p19.mp4",
            releaseDate: "2026-04-28",
            duration: "00:10:20",
          },
          {
            title: "Best Practices",
            videoUrl: "/uploads/lectures/p20.mp4",
            releaseDate: "2026-04-29",
            duration: "00:09:00",
          },
        ],
        quiz: {
          releaseDate: "2026-04-29",
          questions: [
            {
              question: "TensorFlow is?",
              options: ["DL library", "DB", "UI"],
              answer: "DL library",
            },
            {
              question: "Deep learning uses?",
              options: ["Neural networks", "Tables", "CSS"],
              answer: "Neural networks",
            },
            {
              question: "GenAI means?",
              options: ["Generative AI", "General AI", "Graph AI"],
              answer: "Generative AI",
            },
            {
              question: "Deployment means?",
              options: ["Release model", "Delete", "Train"],
              answer: "Release model",
            },
            {
              question: "Best practice?",
              options: ["Clean code", "Messy code", "No code"],
              answer: "Clean code",
            },
          ],
        },
      },
    ],

    faqs: [
      { q: "Is beginner friendly?", a: "Yes starts from Python basics." },
      { q: "Certificate?", a: "Yes provided." },
      { q: "Recorded?", a: "Yes." },
      { q: "Projects?", a: "Yes included." },
      { q: "Support?", a: "24/7 support." },
      { q: "Offline access?", a: "Yes." },
      { q: "Duration?", a: "115+ hours." },
      { q: "Prerequisite?", a: "Basic programming helpful." },
      { q: "Updated?", a: "Yes regularly." },
      { q: "Placement?", a: "Yes support available." },
    ],

    glossary: [
      { term: "NumPy", definition: "Array processing library" },
      { term: "Pandas", definition: "Data analysis library" },
      { term: "Machine Learning", definition: "Model training from data" },
      { term: "TensorFlow", definition: "Deep learning framework" },
    ],

    completionCriteria: [
      "Complete all lectures",
      "Attempt quizzes",
      "Submit project",
      "70% score",
      "Final review",
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
        desc: "Build a machine learning model to predict customer churn using Python and scikit-learn.",
        image: "/uploads/projects/churn_prediction.jpg",
      },
      {
        title: "AI Chatbot Deployment",
        desc: "Develop and deploy an AI chatbot with NLP capabilities using Python and Flask.",
        image: "/uploads/projects/ai_chatbot.jpg",
      },
      {
        title: "GenAI Deployment",
        desc: "Deploy generative AI models for text and image tasks with cloud integration.",
        image: "/uploads/projects/mern_dashboard.jpg",
      },
    ],

    certificate: true,
    status: "approved",
  },
];

    await Course.insertMany(courses);

    console.log("Courses seeded successfully!");
    process.exit();
  } catch (err) {
    console.error("Error seeding courses:", err);
    process.exit(1);
  }
};

seedCourses();