import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "../config/db.js";
import Course from "../models/Course.js";

dotenv.config();

const addContentToCourses = async () => {
  try {
    await connectDB();


    const mernCourse = await Course.findOne({ id: "course_101" });
    if (mernCourse) {
      mernCourse.lectures = [
        { title: "Intro to MERN", videoUrl: "/uploads/lectures/mern_intro.mp4", releaseDate: new Date("2026-04-10") },
        { title: "React Basics", videoUrl: "/uploads/lectures/react_basics.mp4", releaseDate: new Date("2026-04-20") },
        { title: "MongoDB CRUD", videoUrl: "/uploads/lectures/mongo_crud.mp4", releaseDate: new Date("2026-04-25") },
        { title: "Deployment", videoUrl: "/uploads/lectures/deployment.mp4", releaseDate: new Date("2026-05-01") }
      ];

      mernCourse.notes = [
        { title: "Setup Guide", fileUrl: "/uploads/notes/setup.pdf", releaseDate: new Date("2026-04-10") },
        { title: "React Notes", fileUrl: "/uploads/notes/react.pdf", releaseDate: new Date("2026-04-20") },
        { title: "MongoDB Notes", fileUrl: "/uploads/notes/mongo.pdf", releaseDate: new Date("2026-04-25") },
        { title: "Deployment Notes", fileUrl: "/uploads/notes/deployment.pdf", releaseDate: new Date("2026-05-01") }
      ];

      mernCourse.quizzes = [
        {
          questions: [
            { question: "What does MERN stand for?", options: ["MongoDB", "Express", "React", "Node"], answer: "All of the above" },
            { question: "Which database is used in MERN?", options: ["MySQL", "MongoDB", "Postgres"], answer: "MongoDB" }
          ],
          releaseDate: new Date("2026-04-15")
        },
        {
          questions: [
            { question: "What hook is used for state?", options: ["useEffect", "useState", "useContext"], answer: "useState" }
          ],
          releaseDate: new Date("2026-04-20")
        },
        {
          questions: [
            { question: "Which library handles routing?", options: ["React Router", "Redux", "Axios"], answer: "React Router" }
          ],
          releaseDate: new Date("2026-04-25")
        },
        {
          questions: [
            { question: "Which service is used for deployment?", options: ["Heroku", "Netlify", "Both"], answer: "Both" }
          ],
          releaseDate: new Date("2026-05-01")
        }
      ];

      await mernCourse.save();
      console.log("MERN course updated with lectures, notes, quizzes");
    }

    process.exit();
  } catch (err) {
    console.error("Error adding content:", err.message);
    process.exit(1);
  }
};

addContentToCourses();
