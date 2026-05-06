import React from "react";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export default function Glossary({ glossary = [], modules = [] }) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-bold mb-2">Glossary Terms</h3>
        {glossary.length > 0 ? (
          <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base">
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
      <div>
        <h3 className="font-bold mb-2">Downloads</h3>
        {modules.length > 0 ? (
          <div className="grid gap-2 sm:grid-cols-2">
            {modules.map((m, i) => (
              <a
                key={m.title || i}
                href={`${BASE_URL}${m.pdfUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-2 border text-black underline hover:text-[#f0b100] poiter"
              >
                Download {m.title} PDF
              </a>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No downloads available.</p>
        )}
      </div>
    </div>
  );
}
