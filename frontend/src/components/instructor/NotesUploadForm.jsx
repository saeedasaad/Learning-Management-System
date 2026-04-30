import React, { useState } from "react";
import api from "../../utils/api";

export default function NotesUploadForm({ courseId, moduleIndex, onNotesAdded }) {
  const [file, setFile] = useState(null);

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return alert("Please select a notes file");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const { data } = await api.post(
        `/instructor/courses/${courseId}/modules/${moduleIndex}/notes`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      onNotesAdded(data); // notify parent to update state
      setFile(null);
    } catch (err) {
      console.error("Error uploading notes:", err);
      alert("Failed to upload notes");
    }
  };

  return (
    <form onSubmit={handleUpload} className="flex gap-4 mb-6">
      <input
        type="file"
        accept=".pdf"
        onChange={(e) => setFile(e.target.files[0])}
        className="border p-2 rounded w-1/3"
      />
      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Upload Notes
      </button>
    </form>
  );
}
