import React, { useState, useEffect } from "react";
import { getExercises, submitExercise } from "../../utils/apis";

export default function ExercisesPage() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const data = await getExercises();
        setExercises(data);
      } catch (err) {
        console.error("Error fetching exercises:", err);
      }
    };
    fetchExercises();
  }, []);

  const handleSubmit = async (exerciseId, file) => {
    const formData = new FormData();
    formData.append("pdf", file);

    try {
      await submitExercise(exerciseId, formData);
      alert("Exercise submitted successfully ");
    } catch (err) {
      console.error("Error submitting exercise:", err);
    }
  };

  if (exercises.length === 0) {
    return (
      <p className="text-center text-gray-500 p-2 border">
        No exercises available.
      </p>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Exercises</h2>

      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2">Title</th>
            <th className="p-2">Exercise</th>
            <th className="p-2">Due Date</th>
            <th className="p-2">Submit</th>
            <th className="p-2">Marks</th>
          </tr>
        </thead>
        <tbody>
          {exercises.map((ex) => (
            <tr key={ex._id} className="border-t">
              <td className="p-2">{ex.title}</td>
              <td className="p-2">
                <a
                  href={`http://localhost:5000${ex.fileUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Exercise File
                </a>
              </td>
              <td className="p-2 text-red-600">{ex.dueDate}</td>
              <td className="p-2">
                {ex.submitted ? (
                  <span className="text-green-600">Submitted </span>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      const file = e.target.pdf.files[0];
                      if (file) handleSubmit(ex._id, file);
                    }}
                    encType="multipart/form-data"
                  >
                    <input type="file" name="pdf" accept="application/pdf" />
                    <button
                      type="submit"
                      className="bg-blue-500 text-white px-3 py-1 rounded mt-2"
                    >
                      Submit
                    </button>
                  </form>
                )}
              </td>
              <td className="p-2">Total Marks: {ex.marks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
