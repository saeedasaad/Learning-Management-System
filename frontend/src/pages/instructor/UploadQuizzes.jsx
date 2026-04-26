import React, { useState } from "react";
import DashboardCard from "../../components/layouts/DashboardCard";

export default function UploadQuizzes() {
  const [quizzes, setQuizzes] = useState([
    {
      id: 1,
      title: "Quiz 1 - Basics of React",
      questions: 5,
      totalMarks: 10,
    },
    {
      id: 2,
      title: "Quiz 2 - JavaScript Fundamentals",
      questions: 5,
      totalMarks: 10,
    },
  ]);

  const [title, setTitle] = useState("");
  const [questions, setQuestions] = useState("");
  const [marks, setMarks] = useState("");

  const handleUpload = (e) => {
    e.preventDefault();
    if (!title || !questions || !marks) return alert("Fill all fields");

    const newQuiz = {
      id: quizzes.length + 1,
      title,
      questions: parseInt(questions),
      totalMarks: parseInt(marks),
    };

    setQuizzes([...quizzes, newQuiz]);
    setTitle("");
    setQuestions("");
    setMarks("");
  };

  return (
    <DashboardCard title="Upload Quizzes">
      {/* Upload Form */}
      <form onSubmit={handleUpload} className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Quiz Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 rounded w-1/3"
        />
        <input
          type="number"
          placeholder="No. of Questions"
          value={questions}
          onChange={(e) => setQuestions(e.target.value)}
          className="border p-2 rounded w-1/4"
        />
        <input
          type="number"
          placeholder="Total Marks"
          value={marks}
          onChange={(e) => setMarks(e.target.value)}
          className="border p-2 rounded w-1/4"
        />
        <button
          type="submit"
          className="bg-yellow-500 text-white px-4 py-2 rounded"
        >
          Upload
        </button>
      </form>

      {/* Quiz List */}
      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2">Quiz Title</th>
            <th className="p-2">Questions</th>
            <th className="p-2">Total Marks</th>
          </tr>
        </thead>
        <tbody>
          {quizzes.map((quiz) => (
            <tr key={quiz.id} className="border-t text-center">
              <td className="p-2">{quiz.title}</td>
              <td className="p-2">{quiz.questions}</td>
              <td className="p-2">{quiz.totalMarks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </DashboardCard>
  );
}
