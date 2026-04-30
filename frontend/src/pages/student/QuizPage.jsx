import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function QuizPage() {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const quizData = {
    id: "quiz1",
    title: "Quiz No. 1",
    duration: 5, 
    totalMarks: 10,
    questions: [
      {
        id: 1,
        text: "What is React primarily used for?",
        options: ["Database management", "UI development", "Server hosting", "File storage"],
        correct: 1,
      },
      {
        id: 2,
        text: "Which hook is used for state management?",
        options: ["useEffect", "useState", "useContext", "useRef"],
        correct: 1,
      },
      {
        id: 3,
        text: "JSX stands for?",
        options: ["Java Syntax Extension", "JavaScript XML", "JSON Syntax Extra", "JavaScript Xtreme"],
        correct: 1,
      },
      {
        id: 4,
        text: "Which company developed React?",
        options: ["Google", "Facebook", "Microsoft", "Amazon"],
        correct: 1,
      },
      {
        id: 5,
        text: "What is the default port for React dev server?",
        options: ["3000", "8080", "5000", "4200"],
        correct: 0,
      },
    ],
  };

  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(quizData.duration * 60); 
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);


  useEffect(() => {
    if (timeLeft <= 0 && !submitted) {
      handleSubmit();
      return;
    }
    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, submitted]);

  const handleOptionSelect = (qId, optionIndex) => {
    setAnswers({ ...answers, [qId]: optionIndex });
  };

  const handleSubmit = () => {
    let marks = 0;
    quizData.questions.forEach((q) => {
      if (answers[q.id] === q.correct) marks += 2; 
    });
    setScore(marks);
    setSubmitted(true);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">{quizData.title}</h2>

      {!submitted ? (
        <>
          {/* Timer */}
          <div className="mb-4 text-red-600 font-semibold">
            Time Left: {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, "0")}
          </div>

          {/* Questions */}
          {quizData.questions.map((q) => (
            <div key={q.id} className="mb-6 p-4 border rounded shadow-sm bg-white">
              <p className="font-semibold mb-2">
                Q{q.id}. {q.text}
              </p>
              <div className="flex flex-col gap-2">
                {q.options.map((opt, idx) => (
                  <label key={idx} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name={`q-${q.id}`}
                      checked={answers[q.id] === idx}
                      onChange={() => handleOptionSelect(q.id, idx)}
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </div>
          ))}

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="px-6 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
          >
            Submit Quiz
          </button>
        </>
      ) : (
        <div className="p-6 bg-green-50 rounded shadow-md">
          <h3 className="text-xl font-bold text-green-700 mb-4">Quiz Submitted!</h3>
          <p className="text-gray-700 mb-2">
            You scored <span className="font-bold">{score}</span> out of {quizData.totalMarks}.
          </p>
          <button
            onClick={() => navigate("/student/activities/quizzes")}
            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Back to Quizzes
          </button>
        </div>
      )}
    </div>
  );
}
