import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import DashboardCard from "../../components/layouts/DashboardCard";

export default function MyActivities() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("quizzes");

  const handleClick = (tab) => {
    setActiveTab(tab);
    navigate(tab);
  };

  return (
    <DashboardCard title="My Activities">
      {/* Toggle Buttons */}
      <div className="flex gap-6 mb-6">
        <button
          onClick={() => handleClick("quizzes")}
          className={`pb-2 font-semibold transition ${
            activeTab === "quizzes"
              ? "text-yellow-500 border-b-2 border-yellow-500"
              : "text-gray-600 hover:text-yellow-500"
          }`}
        >
          Quizzes
        </button>
        <button
          onClick={() => handleClick("exercises")}
          className={`pb-2 font-semibold transition ${
            activeTab === "exercises"
              ? "text-yellow-500 border-b-2 border-yellow-500"
              : "text-gray-600 hover:text-yellow-500"
          }`}
        >
          Exercises
        </button>
      </div>

      {/* Nested Routes Render Here */}
      <div className="mt-4">
        <Outlet />
      </div>
    </DashboardCard>
  );
}
