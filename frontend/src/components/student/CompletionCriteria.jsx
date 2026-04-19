import React from "react";

export default function CompletionCriteria({ criteria }) {
  return (
    <div>
      <h3 className="font-bold mb-2">Completion Criteria</h3>
      <ul className="list-disc pl-6">
        {criteria.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>
    </div>
  );
}
