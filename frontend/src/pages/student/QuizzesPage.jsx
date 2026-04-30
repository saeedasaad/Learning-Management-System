import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "remixicon/fonts/remixicon.css";

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
    <>
      {/* Desktop / Tablet view */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300 text-sm md:text-base">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2">Quiz Title</th>
              <th className="border border-gray-300 px-4 py-2">Dates</th>
              <th className="border border-gray-300 px-4 py-2">Total Marks</th>
              <th className="border border-gray-300 px-4 py-2">
                Submit Status
              </th>
              <th className="border border-gray-300 px-4 py-2">Result</th>
            </tr>
          </thead>
          <tbody>
            {quizzes.map((quiz) => (
              <tr
                key={quiz.id}
                className="hover:bg-gray-50 text-center transition-colors duration-200"
              >
                <td className="border border-gray-300 px-4 py-2">
                  {quiz.title}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Start: {quiz.startDate} <br /> End: {quiz.endDate}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {quiz.totalMarks}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {quiz.submitted ? (
                    <span className="text-green-600 font-medium">
                      Submitted
                    </span>
                  ) : (
                    <button
                      onClick={() => setShowModal(true)}
                      className="flex items-center gap-2 bg-[#feaf0c] text-white px-8 py-1 rounded pointer  transition-transform duration-200 transform"
                    >
                      <span>Start</span>
                    </button>
                  )}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {quiz.result ? (
                    <span className="flex items-center gap-1 text-[#152956]"> {quiz.result}
                    </span>
                  ) : (
                    "-"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile view */}
      <div className="sm:hidden space-y-4">
        {quizzes.map((quiz) => (
          <div
            key={quiz.id}
            className="border border-gray-300 rounded-md p-3 shadow-sm bg-white"
          >
            <div className="flex justify-between py-1 mb-6">
              <span className="font-semibold">Quiz Title:</span>
              <span>{quiz.title}</span>
            </div>
            <div className="flex justify-between py-1 mb-6">
              <span className="font-semibold">Dates:</span>
              <span>
                Start: {quiz.startDate} <br /> End: {quiz.endDate}
              </span>
            </div>
            <div className="flex justify-between py-1 mb-6">
              <span className="font-semibold">Total Marks:</span>
              <span>{quiz.totalMarks}</span>
            </div>
            <div className="flex justify-between py-1 mb-6">
              <span className="font-semibold">Submit Status:</span>
              <span>
                {quiz.submitted ? (
                  <span className="text-green-600 font-medium">Submitted</span>
                ) : (
                  <button
                    onClick={() => setShowModal(true)}
                    className="flex items-center gap-2 bg-[#feaf0c] text-white px-3 py-1 rounded hover:bg-blue-600 transition-transform duration-200 transform hover:scale-105"
                  >
                    <span>Start</span>
                  </button>
                )}
              </span>
            </div>
            <div className="flex justify-between py-1">
              <span className="font-semibold">Result:</span>
              <span>
                {quiz.result ? (
                  <span className="flex items-center gap-1 text-[#152956]">{quiz.result}
                  </span>
                ) : (
                  "-"
                )}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
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
                  navigate(`/student/quiz/${quizzes[0].id}`);
                }}
                className="px-4 py-2 bg-yellow-500 text-white rounded"
              >
                Confirm & Start Quiz
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
