import React from "react";
import DashboardCard from "../../components/layouts/DashboardCard";

export default function Profile() {
  return (
    <DashboardCard title="Student Profile">
      <p className="text-gray-600">Name: Saeeda</p>
      <p className="text-gray-600">Email: saeeda@example.com</p>
      <p className="text-gray-600">Enrolled Courses: 5</p>
    </DashboardCard>
  );
}