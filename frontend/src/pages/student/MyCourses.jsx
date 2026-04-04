import React from "react";
import DashboardCard from "../../components/layouts/DashboardCard";

export default function MyCourses() {
  const courses = [
    { id: 1, title: "MERN Stack Development", progress: "70%" },
    { id: 2, title: "UI/UX Design Basics", progress: "40%" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
      {courses.map(course => (
        <DashboardCard key={course.id} title={course.title}>
          <p className="text-gray-600">Progress: {course.progress}</p>
        </DashboardCard>
      ))}
    </div>
  );
}