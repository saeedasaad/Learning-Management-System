import React, { useState } from "react";
import api from "../../utils/apis";

export default function LectureUploadForm({ courseId, moduleIndex, onLectureAdded }) {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!title || !file) return alert("Please add title and file");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);

    try {
      const { data } = await api.post(
        `/instructor/courses/${courseId}/modules/${moduleIndex}/lectures`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      onLectureAdded(data); // notify parent to update state
      setTitle("");
      setFile(null);
    } catch (err) {
      console.error("Error uploading lecture:", err);
      alert("Failed to upload lecture");
    }
  };

  return (
    <form onSubmit={handleUpload} className="flex gap-4 mb-6">
      <input
        type="text"
        placeholder="Lecture Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 rounded w-1/3"
      />
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        className="border p-2 rounded w-1/3"
      />
      <button
        type="submit"
        className="bg-yellow-500 text-white px-4 py-2 rounded"
      >
        Upload Lecture
      </button>
    </form>
  );
}
