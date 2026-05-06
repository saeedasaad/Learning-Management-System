import React, { useEffect, useState } from "react";
import { getExercises } from "../../utils/api";
import { useNavigate } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export default function Exercises() {
  const [exercises, setExercises] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const data = await getExercises();
        console.log("Exercises API response:", data);
        setExercises(data);
      } catch (err) {
        console.error("Error fetching exercises:", err);
      }
    };
    fetchExercises();
  }, []);

  if (exercises.length === 0) {
    return <p className="text-center text-gray-500">No exercises available.</p>;
  }

  return (
    <div className="md:p-6 p-1">

      {/* Desktop / Tablet view */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300 text-sm md:text-base">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">Title</th>
              <th className="border px-4 py-2">Exercise</th>
              <th className="border px-4 py-2">Due Date</th>
              <th className="border px-4 py-2">Submit</th>
              <th className="border px-4 py-2">Marks</th>
              <th className="border px-4 py-2">Result</th>
            </tr>
          </thead>
          <tbody>
            {exercises.map((ex) => (
              <tr key={ex._id} className="hover:bg-gray-50 text-center">
                <td className="border px-4 py-2">{ex.title}</td>
                <td className="border px-4 py-2">
                  <a
                    href={`${BASE_URL}${ex.fileUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    Exercise File
                  </a>
                </td>
                <td className="border px-4 py-2 text-red-600">
                  {new Date(ex.dueDate).toLocaleDateString()}
                </td>
                <td className="border px-4 py-2">
                  {ex.submitted ? (
                    <span className="text-green-600 font-medium">Submitted</span>
                  ) : (
                    <button
                      onClick={() => navigate(`/student/exercises/${ex._id}/submit`)}
                      className="bg-yellow-500 text-white px-4 py-1 rounded hover:bg-yellow-600 transition-transform duration-200 transform hover:scale-105"
                    >
                      Submit
                    </button>
                  )}
                </td>
                <td className="border px-4 py-2">Total Marks: {ex.marks}</td>
                <td className="border px-4 py-2">
                  {ex.result ? (
                    <span className="text-[#152956] font-medium">{ex.result}</span>
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
        {exercises.map((ex) => (
          <div
            key={ex._id}
            className="border border-gray-300 rounded-md p-3 shadow-sm bg-white"
          >
            <div className="flex justify-between py-1 mb-3 border-b">
              <span className="font-semibold">Title:</span>
              <span>{ex.title}</span>
            </div>
            <div className="flex justify-between py-1 mb-3 border-b">
              <span className="font-semibold">Exercise:</span>
              <a
                href={`${BASE_URL}${ex.fileUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Exercise File
              </a>
            </div>
            <div className="flex justify-between py-1 mb-3 border-b">
              <span className="font-semibold">Due Date:</span>
              <span className="text-red-600">
                {new Date(ex.dueDate).toLocaleDateString()}
              </span>
            </div>
            <div className="flex justify-between py-1 mb-3 border-b">
              <span className="font-semibold">Marks:</span>
              <span>{ex.marks}</span>
            </div>
            <div className="flex justify-between py-1 mb-3 border-b">
              <span className="font-semibold">Submit Status:</span>
              <span>
                {ex.submitted ? (
                  <span className="text-green-600 font-medium">Submitted</span>
                ) : (
                  <button
                    onClick={() => navigate(`/student/exercises/${ex._id}/submit`)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition-transform duration-200 transform hover:scale-105"
                  >
                    Submit
                  </button>
                )}
              </span>
            </div>
            <div className="flex justify-between py-1">
              <span className="font-semibold">Result:</span>
              <span>{ex.result ? ex.result : "-"}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
