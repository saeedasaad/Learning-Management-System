import React from "react";

export default function Glossary({ glossary, modules }) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-bold mb-2">Glossary Terms</h3>
        <ul className="list-disc pl-6">
          {glossary.map((item, i) => (
            <li key={i}>
              <strong>{item.term}:</strong> {item.definition}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="font-bold mb-2">Downloads</h3>
        <ul className="list-disc pl-6">
          {modules.map((m, i) => (
            <li key={i}>
              <a href={m.pdfUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                Download {m.title} PDF
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
