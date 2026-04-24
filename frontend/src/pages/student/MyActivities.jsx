import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function MyActivities() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("quizzes");

  const handleClick = (tab) => {
    setActiveTab(tab);
    navigate(tab);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-yellow-400 pb-4">
        My Activities
      </h1>

      {/* Toggle Buttons */}
      <div className="flex gap-6 mb-6">
        <button
          onClick={() => handleClick("quizzes")}
          className={`px-4 py-2 rounded font-semibold transition ${
            activeTab === "quizzes"
              ? "text-yellow-500 border-b-2 border-yellow-500"
              : "text-gray-600 hover:text-yellow-500"
          }`}
        >
          Quizzes
        </button>
        <button
          onClick={() => handleClick("exercises")}
          className={`px-4 py-2 rounded font-semibold transition ${
            activeTab === "exercises"
              ? "text-yellow-500 border-b-2 border-yellow-500"
              : "text-gray-600 hover:text-yellow-500"
          }`}
        >
          Exercises
        </button>
      </div>

      <Outlet />
    </div>
  );
}
