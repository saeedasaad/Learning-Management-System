import React, { useState, useEffect } from "react";
import { getExercises, submitExercise } from "../../utils/apis";
import Table from "../../components/common/Table";
import "remixicon/fonts/remixicon.css"; 

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
      alert("Exercise submitted successfully");
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

      <Table
        columns={["title", "fileUrl", "dueDate", "submitted", "marks"]}
        data={exercises}
        renderActions={(ex) => (
          <div className="flex flex-wrap gap-2">
            {ex.submitted ? (
              <span className="text-green-600 flex items-center gap-1">
                <i className="ri-check-double-line"></i> Submitted
              </span>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const file = e.target.pdf.files[0];
                  if (file) handleSubmit(ex._id, file);
                }}
                encType="multipart/form-data"
                className="flex flex-col gap-2"
              >
                <input
                  type="file"
                  name="pdf"
                  accept="application/pdf"
                  className="text-xs"
                />
                <button
                  type="submit"
                  className="text-[#152956] hover:text-[#feaf0c] p-2 cursor-pointer transition-transform duration-200 transform hover:scale-110"
                  title="Submit Exercise"
                >
                  <i className="ri-upload-2-line text-lg"></i>
                </button>
              </form>
            )}
          </div>
        )}
      />
    </div>
  );
}
