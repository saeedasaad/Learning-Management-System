import React from "react";

export default function ExerciseList({ exercises }) {
  if (!exercises || exercises.length === 0) {
    return <p className="text-gray-500">No exercises uploaded yet.</p>;
  }

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  return (
    <div className="mb-6">
      <h3 className="font-semibold mb-2">Module Exercises</h3>

      {/* Desktop / Tablet view */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300 text-sm md:text-base">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">Title</th>
              <th className="border px-4 py-2">File</th>
              <th className="border px-4 py-2">Due Date</th>
              <th className="border px-4 py-2">Marks</th>
            </tr>
          </thead>
          <tbody>
            {exercises.map((ex) => (
              <tr key={ex._id} className="hover:bg-gray-50 text-center">
                <td className="border px-4 py-2">{ex.title}</td>
                <td className="border px-4 py-2">
                  {ex.fileUrl && (
                    <a
                      href={`${backendUrl}${ex.fileUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      Exercise File
                    </a>
                  )}
                </td>
                <td className="border px-4 py-2 text-red-600">
                  {ex.dueDate ? new Date(ex.dueDate).toLocaleDateString() : "-"}
                </td>
                <td className="border px-4 py-2">
                  {ex.marks ? ex.marks : "-"}
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
              {ex.fileUrl && (
                <a
                  href={`${backendUrl}${ex.fileUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Exercise File
                </a>
              )}
            </div>
            <div className="flex justify-between py-1 mb-3 border-b">
              <span className="font-semibold">Due Date:</span>
              <span className="text-red-600">
                {ex.dueDate ? new Date(ex.dueDate).toLocaleDateString() : "-"}
              </span>
            </div>
            <div className="flex justify-between py-1">
              <span className="font-semibold">Marks:</span>
              <span>{ex.marks ? ex.marks : "-"}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
