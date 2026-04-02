import React from "react";
import DashboardCard from "../../components/layout/DashboardCard";

export default function DashboardOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <DashboardCard title="My Progress">
        <p className="text-gray-600">You have completed 3 of 5 courses.</p>
      </DashboardCard>

      <DashboardCard title="Upcoming Lessons">
        <ul className="text-gray-600 space-y-2">
          <li>React Basics – Tomorrow</li>
          <li>Node.js Authentication – Friday</li>
        </ul>
      </DashboardCard>

      <DashboardCard title="Messages">
        <p className="text-gray-600">2 new messages from instructors.</p>
      </DashboardCard>

      <DashboardCard title="Profile Summary">
        <p className="text-gray-600">Student: Saeeda</p>
        <p className="text-gray-600">Email: saeeda@example.com</p>
      </DashboardCard>
    </div>
  );
}