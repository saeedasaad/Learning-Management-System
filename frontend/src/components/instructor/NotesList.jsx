import React from "react";

export default function NotesList({ notes }) {
  if (!notes) {
    return <p className="text-gray-500">No notes uploaded yet.</p>;
  }

  // Use backend URL from .env
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  return (
    <div className="mb-6">
      <h3 className="font-semibold mb-2">Module Notes</h3>
      <a
        href={`${backendUrl}${notes}`}  
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline"
      >
        View Notes (PDF)
      </a>
    </div>
  );
}
