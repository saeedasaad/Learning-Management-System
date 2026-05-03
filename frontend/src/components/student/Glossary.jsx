import React from "react";

const BASE_URL = import.meta.env.VITE_BACKEND_URL; // backend server URL

export default function Glossary({ glossary = [], modules = [] }) {
  return (
    <div className="space-y-6">
      {/* Glossary Terms */}
      <div>
        <h3 className="font-bold mb-2">Glossary Terms</h3>
        {glossary.length > 0 ? (
          <ul className="list-disc pl-6">
            {glossary.map((item, i) => (
              <li key={item.term || i}>
                <strong>{item.term}:</strong> {item.definition}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No glossary terms available.</p>
        )}
      </div>

      {/* Downloads */}
      <div>
        <h3 className="font-bold mb-2">Downloads</h3>
        {modules.length > 0 ? (
          <ul className="list-disc pl-6">
            {modules.map((m, i) => (
              <li key={m.title || i}>
                <a
                  href={`${BASE_URL}${m.pdfUrl}`}   // ✅ prepend backend URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Download {m.title} PDF
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No downloads available.</p>
        )}
      </div>
    </div>
  );
}
