import React, { useState } from "react";
import api from "../../utils/apis";

export default function QuizUploadForm({ courseId, moduleIndex, onQuizAdded }) {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [answer, setAnswer] = useState("");

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!question || !answer) return alert("Please add question and answer");

    const quizData = { question, options, answer };

    try {
      const { data } = await api.post(
        `/instructor/courses/${courseId}/modules/${moduleIndex}/quiz`,
        quizData
      );

      onQuizAdded(data); // notify parent to update state
      setQuestion("");
      setOptions(["", "", "", ""]);
      setAnswer("");
    } catch (err) {
      console.error("Error uploading quiz:", err);
      alert("Failed to upload quiz");
    }
  };

  return (
    <form onSubmit={handleUpload} className="mb-6">
      <input
        type="text"
        placeholder="Quiz Question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="border p-2 rounded w-full mb-2"
      />

      {options.map((opt, i) => (
        <input
          key={i}
          type="text"
          placeholder={`Option ${i + 1}`}
          value={opt}
          onChange={(e) => handleOptionChange(i, e.target.value)}
          className="border p-2 rounded w-full mb-2"
        />
      ))}

      <input
        type="text"
        placeholder="Correct Answer"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        className="border p-2 rounded w-full mb-2"
      />

      <button
        type="submit"
        className="bg-purple-600 text-white px-4 py-2 rounded"
      >
        Upload Quiz
      </button>
    </form>
  );
}
