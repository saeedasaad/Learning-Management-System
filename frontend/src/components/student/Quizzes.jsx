import React, { useState, useEffect } from "react";
import { getQuizzes } from "../../utils/api";
import { useNavigate } from "react-router-dom";

export default function Quizzes() {
  const [quizzes, setQuizzes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const data = await getQuizzes();
        console.log("Quizzes API response:", data);
        setQuizzes(data);
      } catch (err) {
        console.error("Error fetching quizzes:", err);
      }
    };
    fetchQuizzes();
  }, []);

  if (quizzes.length === 0) {
    return <p className="text-center text-gray-500">No quizzes available.</p>;
  }

  return (
    <div className="md:p-6 p-1">

      {/* Desktop / Tablet view */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300 text-sm md:text-base">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">Quiz Title</th>
              <th className="border px-4 py-2">Release Date</th>
              <th className="border px-4 py-2">Course</th>
              <th className="border px-4 py-2">Module</th>
              <th className="border px-4 py-2">Action</th>
              <th className="border px-4 py-2">Result</th>
            </tr>
          </thead>
          <tbody>
            {quizzes.map((quiz) => (
              <tr key={quiz._id} className="hover:bg-gray-50 text-center">
                <td className="border px-4 py-2">{quiz.title}</td>
                <td className="border px-4 py-2">
                  {new Date(quiz.releaseDate).toLocaleDateString()}
                </td>
                <td className="border px-4 py-2">{quiz.courseTitle}</td>
                <td className="border px-4 py-2">{quiz.moduleTitle}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => {
                      setSelectedQuiz(quiz);
                      setShowModal(true);
                    }}
                    className="bg-yellow-500 text-white px-4 py-1 rounded hover:bg-yellow-600"
                  >
                    Start
                  </button>
                </td>
                <td className="border px-4 py-2">
                  {quiz.result ? (
                    <span className="text-[#152956] font-medium">{quiz.result}</span>
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
      <div className="sm:hidden space-y-5">
        {quizzes.map((quiz) => (
          <div
            key={quiz._id}
            className="border border-gray-300 rounded-md p-2 shadow-sm bg-white"
          >
            <div className="flex justify-between py-1 mb-3 border-b">
              <span className="font-semibold">Quiz Title:</span>
              <span>{quiz.title}</span>
            </div>
            <div className="flex justify-between py-1 mb-3border-b ">
              <span className="font-semibold">Release Date:</span>
              <span>{new Date(quiz.releaseDate).toLocaleDateString()}</span>
            </div>
            <div className="flex justify-between py-1 mb-3 border-b">
              <span className="font-semibold">Course:</span>
              <span>{quiz.courseTitle}</span>
            </div>
            <div className="flex justify-between py-1 mb-3 border-b">
              <span className="font-semibold">Module:</span>
              <span>{quiz.moduleTitle}</span>
            </div>
            <div className="flex justify-between py-1 mb-3 border-b">
              <span className="font-semibold">Submit Status:</span>
              <span>
                <button
                  onClick={() => {
                    setSelectedQuiz(quiz);
                    setShowModal(true);
                  }}
                  className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition-transform duration-200 transform hover:scale-105"
                >
                  Start
                </button>
              </span>
            </div>
            <div className="flex justify-between py-1">
              <span className="font-semibold">Result:</span>
              <span>{quiz.result ? quiz.result : "-"}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && selectedQuiz && (
        <div className="fixed inset-0 bg-gray-200 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg w-[400px]">
            <h3 className="text-lg font-bold mb-4">Quiz Instructions</h3>
            <p className="mb-4">
              You will have {selectedQuiz.questions.length} questions to answer.
              Once submitted, your answers cannot be changed.
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
                  navigate(`/student/quiz/${selectedQuiz._id}`);
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
