import React from "react";

export default function LectureList({ lectures }) {
  if (!lectures || lectures.length === 0) {
    return <p className="text-gray-500">No lectures uploaded yet.</p>;
  }

  return (
    <table className="w-full border mb-6">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-2">Title</th>
          <th className="p-2">File</th>
          <th className="p-2">Release Date</th>
          <th className="p-2">Duration</th>
        </tr>
      </thead>
      <tbody>
        {lectures.map((lec, i) => (
          <tr key={i} className="border-t text-center">
            <td className="p-2">{lec.title}</td>
            <td className="p-2">
              <a
                href={lec.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                View File
              </a>
            </td>
            <td className="p-2">{lec.releaseDate}</td>
            <td className="p-2">{lec.duration}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
