import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { submitExercise } from "../../utils/api";
import DashboardCard from "../../components/layouts/DashboardCard";

export default function SubmitExercise() {
  const { exerciseId } = useParams();
  const navigate = useNavigate();
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return alert("Please select a file");

    const formData = new FormData();
    formData.append("pdf", file);

    try {
      await submitExercise(exerciseId, formData);
      alert("Exercise submitted successfully");
      navigate("/student/activities");
    } catch (err) {
      console.error("Error submitting exercise:", err);
    }
  };

  return (
    <div className="md:m-10 m-5">
      <DashboardCard>
        <div className="md:p-6 p-2">
          <h2 className="text-xl font-bold mb-4">Submit Exercise</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-semibold mb-2">
                Select your file:
              </label>
              <input
                type="file"
                accept="application/pdf"
                onChange={(e) => setFile(e.target.files[0])}
                className="border p-2 rounded w-full"
              />
            </div>
            <div className="flex gap-4">
              <button
                type="submit"
                className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={() => navigate("/student/activities")}
                className="bg-gray-300 px-6 py-2 rounded hover:bg-gray-400"
              >
                Back
              </button>
            </div>
          </form>
        </div>
      </DashboardCard>
    </div>
  );
}
