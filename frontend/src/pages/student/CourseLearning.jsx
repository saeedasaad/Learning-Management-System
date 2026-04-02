import React from "react";
import DashboardCard from "../../components/layout/DashboardCard";

export default function CourseLearning() {
  return (
    <DashboardCard title="Course Learning">
      <p className="text-gray-600">Welcome to your course. Select a lecture to begin learning.</p>
      <ul className="mt-4 space-y-2 text-gray-600">
        <li>Lecture 1: Introduction</li>
        <li>Lecture 2: Advanced Concepts</li>
        <li>Lecture 3: Project Work</li>
      </ul>
    </DashboardCard>
  );
}