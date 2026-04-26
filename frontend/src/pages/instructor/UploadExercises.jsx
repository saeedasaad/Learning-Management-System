import React, { useState } from "react";
import DashboardCard from "../../components/layouts/DashboardCard";

export default function UploadExercises() {
  const [exercises, setExercises] = useState([
    {
      id: 1,
      title: "Exercise 1 - Python Basics",
      fileUrl: "/files/exercise1.pdf",
      marks: 10,
    },
    {
      id: 2,
      title: "Exercise 2 - UI/UX Design",
      fileUrl: "/files/exercise2.pdf",
      marks: 15,
    },
  ]);

  const [title, setTitle] = useState("");
  const [marks, setMarks] = useState("");
  const [file, setFile] = useState(null);

  const handleUpload = (e) => {
    e.preventDefault();
    if (!title || !marks || !file) return alert("Fill all fields");

    const newExercise = {
      id: exercises.length + 1,
      title,
      fileUrl: URL.createObjectURL(file),
      marks: parseInt(marks),
    };

    setExercises([...exercises, newExercise]);
    setTitle("");
    setMarks("");
    setFile(null);
  };

  return (
    <DashboardCard title="Upload Exercises">
      {/* Upload Form */}
      <form onSubmit={handleUpload} className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Exercise Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 rounded w-1/3"
        />
        <input
          type="number"
          placeholder="Marks"
          value={marks}
          onChange={(e) => setMarks(e.target.value)}
          className="border p-2 rounded w-1/4"
        />
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(e) => setFile(e.target.files[0])}
          className="border p-2 rounded w-1/3"
        />
        <button
          type="submit"
          className="bg-yellow-500 text-white px-4 py-2 rounded"
        >
          Upload
        </button>
      </form>

      {/* Exercise List */}
      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2">Title</th>
            <th className="p-2">File</th>
            <th className="p-2">Marks</th>
          </tr>
        </thead>
        <tbody>
          {exercises.map((ex) => (
            <tr key={ex.id} className="border-t text-center">
              <td className="p-2">{ex.title}</td>
              <td className="p-2">
                <a
                  href={ex.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  View File
                </a>
              </td>
              <td className="p-2">{ex.marks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </DashboardCard>
  );
}
