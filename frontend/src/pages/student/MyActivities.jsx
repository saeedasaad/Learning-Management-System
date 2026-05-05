import React, { useState } from "react";
import DashboardCard from "../../components/layouts/DashboardCard";
import Quizzes from "../../components/student/Quizzes";   
import Exercises from "../../components/student/Exercises"; 

export default function MyActivities() {
  const [activeTab, setActiveTab] = useState("quizzes");

  return (
    <div className="md:m-10 m-5">
      <DashboardCard title="My Activities">
        {/* Toggle Buttons */}
        <div className="flex gap-6 mb-6">
          <button
            onClick={() => setActiveTab("quizzes")}
            className={`pb-2 font-semibold transition ${
              activeTab === "quizzes"
                ? "text-yellow-500 border-b-2 border-yellow-500"
                : "text-gray-600 hover:text-yellow-500"
            }`}
          >
            Quizzes
          </button>
          <button
            onClick={() => setActiveTab("exercises")}
            className={`pb-2 font-semibold transition ${
              activeTab === "exercises"
                ? "text-yellow-500 border-b-2 border-yellow-500"
                : "text-gray-600 hover:text-yellow-500"
            }`}
          >
            Exercises
          </button>
        </div>

        {/* Render Components */}
        <div className="mt-4">
          {activeTab === "quizzes" && <Quizzes />}
          {activeTab === "exercises" && <Exercises />}
        </div>
      </DashboardCard>
    </div>
  );
}
