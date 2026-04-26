import React, { useEffect, useState } from "react";
import DashboardCard from "../../components/layouts/DashboardCard";
import "remixicon/fonts/remixicon.css";

export default function DashboardOverview() {
  const [overview, setOverview] = useState(null);

  useEffect(() => {
    // Temporary mock data (replace with API later)
    const mockData = {
      name: "Saeeda Saad",
      email: "saeeda@example.com",
      qualification: "BS Computer Science",
      completedCourses: 3,
      totalCourses: 5,
      courses: [
        {
          title: "Artificial Intelligence using Python",
          week: 3,
          totalWeeks: 12,
        },
        { title: "UI/UX & Webflow", week: 3, totalWeeks: 12 },
      ],
      activities: {
        exercises: 1,
        quizzes: 2,
        discussions: 3,
        notes: 5,
      },
      discussions: [
        {
          topic: "Datetime & Time Series Data",
          lastReplyTime: "Apr 24, 2026 06:53 PM",
        },
        {
          topic: "Lecture Download Issues",
          lastReplyTime: "Apr 24, 2026 05:00 AM",
        },
      ],
      notices: [
        "Batch 03 started on April 6, 2026",
        "Quiz deadline extended to April 30, 2026",
      ],
    };

    setOverview(mockData);
  }, []);

  if (!overview) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
      {/* Progress Section */}
      <DashboardCard title="My Progress">
        <p className="text-gray-600">
          You have completed {overview.completedCourses} of{" "}
          {overview.totalCourses} courses.
        </p>
        <div className="w-full bg-gray-200 rounded-full h-3 mt-3">
          <div
            className="bg-[#feaf0c] h-3 rounded-full"
            style={{
              width: `${(overview.completedCourses / overview.totalCourses) * 100}%`,
            }}
          ></div>
        </div>
      </DashboardCard>

      {/* Profile Summary */}
      <DashboardCard title="Profile Summary">
        <p className="text-gray-600">Student: {overview.name}</p>
        <p className="text-gray-600">Email: {overview.email}</p>
        <p className="text-gray-600">Qualification: {overview.qualification}</p>
      </DashboardCard>

      {/* My Courses */}
      <DashboardCard title="My Courses">
        {overview.courses.map((course, i) => (
          <div
            key={i}
            className="flex justify-between items-center border-b py-2"
          >
            <span className="text-gray-700">{course.title}</span>
            <span className="text-sm text-gray-500">
              Week {course.week}/{course.totalWeeks}
            </span>
          </div>
        ))}
      </DashboardCard>

      {/* My Activities */}
      <DashboardCard title="My Activities">
        <ul className="text-gray-700 space-y-2">
          <li>
            <i className="ri-pencil-line text-[#feaf0c]"></i>{" "}
            {overview.activities.exercises} Exercises Pending
          </li>
          <li>
            <i className="ri-question-line text-[#feaf0c]"></i>{" "}
            {overview.activities.quizzes} Quizzes Pending
          </li>
          <li>
            <i className="ri-chat-3-line text-[#feaf0c]"></i>{" "}
            {overview.activities.discussions} New Discussions
          </li>
          <li>
            <i className="ri-sticky-note-line text-[#feaf0c]"></i>{" "}
            {overview.activities.notes} Notes Saved
          </li>
        </ul>
      </DashboardCard>

      {/* Discussions Snapshot */}
      <DashboardCard title="Recent Discussions">
        {overview.discussions.map((d, i) => (
          <div key={i} className="mb-2">
            <p className="font-bold text-gray-800">{d.topic}</p>
            <p className="text-sm text-gray-500">{d.lastReplyTime}</p>
          </div>
        ))}
      </DashboardCard>

      {/* Notice Board */}
      <DashboardCard title="Notice Board">
        <ul className="text-gray-700 space-y-2">
          {overview.notices.map((notice, i) => (
            <li key={i}>
              <i className="ri-notification-line text-[#feaf0c]"></i> {notice}
            </li>
          ))}
        </ul>
      </DashboardCard>
    </div>
  );
}
