import React from "react";

export default function QuizList({ quiz }) {
  if (!quiz || !quiz.questions || quiz.questions.length === 0) {
    return <p className="text-gray-500">No quizzes uploaded yet.</p>;
  }

  return (
    <div className="mb-6">
      <h3 className="font-semibold mb-2">Module Quiz</h3>
      <ul className="space-y-4">
        {quiz.questions.map((q, i) => (
          <li key={i} className="border p-3 rounded">
            <p className="font-semibold">{q.question}</p>
            <ul className="list-disc list-inside text-gray-700">
              {q.options.map((opt, j) => (
                <li key={j}>{opt}</li>
              ))}
            </ul>
            <p className="text-green-600 mt-2">Answer: {q.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
