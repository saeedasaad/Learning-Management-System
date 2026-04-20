import React from "react";

export default function CompletionCriteria({ criteria = [] }) {
  return (
    <div>
      <h3 className="font-bold mb-2">Completion Criteria</h3>
      {criteria.length > 0 ? (
        <ul className="list-disc pl-6">
          {criteria.map((c, i) => (
            <li key={c || i}>{c}</li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No completion criteria defined.</p>
      )}
    </div>
  );
}
