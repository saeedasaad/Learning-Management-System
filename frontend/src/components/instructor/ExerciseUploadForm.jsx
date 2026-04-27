import React, { useState } from "react";
import api from "../../utils/apis";

export default function ExerciseUploadForm({ courseId, moduleIndex, onExerciseAdded }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!title || !description) return alert("Please add title and description");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    if (file) formData.append("file", file);

    try {
      const { data } = await api.post(
        `/instructor/courses/${courseId}/modules/${moduleIndex}/exercises`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      onExerciseAdded(data); // notify parent to update state
      setTitle("");
      setDescription("");
      setFile(null);
    } catch (err) {
      console.error("Error uploading exercise:", err);
      alert("Failed to upload exercise");
    }
  };

  return (
    <form onSubmit={handleUpload} className="mb-6">
      <input
        type="text"
        placeholder="Exercise Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 rounded w-full mb-2"
      />
      <textarea
        placeholder="Exercise Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 rounded w-full mb-2"
      />
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        className="border p-2 rounded w-full mb-2"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Upload Exercise
      </button>
    </form>
  );
}
