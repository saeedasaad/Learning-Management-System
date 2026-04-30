import React, { useEffect, useState } from "react";
import DashboardCard from "../../components/layouts/DashboardCard";
import "remixicon/fonts/remixicon.css";
import api from "../../utils/apis";

export default function InstructorDashboard() {
  const [overview, setOverview] = useState(null);

  useEffect(() => {
    const fetchOverview = async () => {
      try {
        const mockData = {
          name: "Alexander",
          email: "alexander@example.com",
          qualification: "MSc Computer Science",
          totalStudents: 120,
          uploadedLectures: 25,
          pendingQuizzes: 5,
          revenue: 4500,
          courses: [
            { title: "MERN Stack Development", enrolled: 520 },
            { title: "AI with Python", enrolled: 300 },
          ],
          activities: {
            newAssignments: 3,
            pendingReviews: 4,
            discussions: 6,
            notices: 2,
          },
          discussions: [
            { topic: "Student doubts in MongoDB", lastReplyTime: "Apr 26, 2026 09:00 PM" },
            { topic: "Quiz grading issues", lastReplyTime: "Apr 25, 2026 11:30 AM" },
          ],
          notices: [
            "Revenue report available for April",
            "New batch enrollment opens May 1",
          ],
        };

        setOverview(mockData);
      } catch (err) {
        console.error("Error fetching instructor overview:", err);
      }
    };
    fetchOverview();
  }, []);

  if (!overview) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:m-10 m-5">
      {/* Instructor Stats */}
      <DashboardCard title="Instructor Stats">
        <ul className="text-gray-700 space-y-2">
          <li><i className="ri-user-line text-[#feaf0c]"></i> Total Students: {overview.totalStudents}</li>
          <li><i className="ri-video-line text-[#feaf0c]"></i> Uploaded Lectures: {overview.uploadedLectures}</li>
          <li><i className="ri-question-line text-[#feaf0c]"></i> Pending Quizzes: {overview.pendingQuizzes}</li>
          <li><i className="ri-money-dollar-circle-line text-[#feaf0c]"></i> Revenue: ${overview.revenue}</li>
        </ul>
      </DashboardCard>

      {/* Profile Summary */}
      <DashboardCard title="Profile Summary">
        <p className="text-gray-600">Instructor: {overview.name}</p>
        <p className="text-gray-600">Email: {overview.email}</p>
        <p className="text-gray-600">Qualification: {overview.qualification}</p>
      </DashboardCard>

      {/* My Courses */}
      <DashboardCard title="My Courses">
        {overview.courses.map((course, i) => (
          <div key={i} className="flex justify-between items-center border-b py-2">
            <span className="text-gray-700">{course.title}</span>
            <span className="text-sm text-gray-500">{course.enrolled} Enrolled</span>
          </div>
        ))}
      </DashboardCard>

      {/* Activities */}
      <DashboardCard title="My Activities">
        <ul className="text-gray-700 space-y-2">
          <li><i className="ri-file-list-line text-[#feaf0c]"></i> {overview.activities.newAssignments} New Assignments</li>
          <li><i className="ri-check-line text-[#feaf0c]"></i> {overview.activities.pendingReviews} Pending Reviews</li>
          <li><i className="ri-chat-3-line text-[#feaf0c]"></i> {overview.activities.discussions} Active Discussions</li>
          <li><i className="ri-notification-line text-[#feaf0c]"></i> {overview.activities.notices} Notices Posted</li>
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
