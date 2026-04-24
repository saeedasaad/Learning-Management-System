import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function QuizzesPage() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const quizzes = [
    {
      id: "quiz1",
      title: "Quiz No. 1",
      startDate: "Apr 20, 2026 12:00 AM",
      endDate: "Apr 26, 2026 11:59 PM",
      totalMarks: 10,
      submitted: false,
      result: null,
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Quizzes</h2>

      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2">Quiz Title</th>
            <th className="p-2">Dates</th>
            <th className="p-2">Total Marks</th>
            <th className="p-2">Submit Status</th>
            <th className="p-2">Result</th>
          </tr>
        </thead>
        <tbody>
          {quizzes.map((quiz) => (
            <tr key={quiz.id} className="border-t text-center text-sm">
              <td className="p-2">{quiz.title}</td>
              <td className="p-2">
                Start: {quiz.startDate} <br /> End: {quiz.endDate}
              </td>
              <td className="p-2">{quiz.totalMarks}</td>
              <td className="p-2">
                {quiz.submitted ? (
                  "Submitted "
                ) : (
                  <button
                    onClick={() => setShowModal(true)}
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                  >
                    Start Quiz
                  </button>
                )}
              </td>
              <td className="p-2">{quiz.result || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div className="fixed inset-0 bg-[#f3f4f6] bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg w-[400px]">
            <h3 className="text-lg font-bold mb-4">Quiz Instructions</h3>
            <p className="mb-4">
              You will have 5 questions to answer within 5 minutes. Once
              submitted, your answers cannot be changed.
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowModal(false);
                  navigate("/student/quiz/:id");
                }}
                className="px-4 py-2 bg-yellow-500 text-white rounded"
              >
                Confirm & Start Quiz
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
