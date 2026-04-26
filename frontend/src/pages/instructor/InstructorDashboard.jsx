import React from "react";
import DashboardCard from "../../components/layouts/DashboardCard";

export default function InstructorDashboard() {
  const stats = [
    { title: "Total Students", value: 120 },
    { title: "Uploaded Lectures", value: 25 },
    { title: "Pending Quizzes", value: 5 },
    { title: "Revenue ($)", value: 4500 },
  ];

  return (
    <DashboardCard title="Instructor Dashboard">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-yellow-100 border rounded p-6 text-center shadow"
          >
            <h3 className="text-lg font-semibold">{stat.title}</h3>
            <p className="text-2xl font-bold mt-2">{stat.value}</p>
          </div>
        ))}
      </div>
    </DashboardCard>
  );
}
