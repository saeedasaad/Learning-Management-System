import React from "react";

export default function ExerciseList({ exercises }) {
  if (!exercises || exercises.length === 0) {
    return <p className="text-gray-500">No exercises uploaded yet.</p>;
  }

  return (
    <div className="mb-6">
      <h3 className="font-semibold mb-2">Module Exercises</h3>
      <ul className="space-y-4">
        {exercises.map((ex, i) => (
          <li key={i} className="border p-3 rounded">
            <p className="font-semibold">{ex.title}</p>
            <p className="text-gray-700">{ex.description}</p>
            {ex.fileUrl && (
              <a
                href={ex.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline mt-2 block"
              >
                View Exercise File
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
