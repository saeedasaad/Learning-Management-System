import React, { useEffect, useState } from "react";
import DashboardCard from "../../components/layouts/DashboardCard";
import "remixicon/fonts/remixicon.css";
import { getInstructorProfile, getInstructorCourses } from "../../utils/api";

export default function InstructorDashboard() {
  const [profile, setProfile] = useState(null);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profileData = await getInstructorProfile();
        setProfile(profileData);

        const coursesData = await getInstructorCourses();
        setCourses(coursesData);
      } catch (err) {
        console.error("Error fetching instructor dashboard data:", err);
      }
    };
    fetchData();
  }, []);

  if (!profile) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:m-10 m-5">
      {/* Instructor Stats */}
      <DashboardCard title="Instructor Stats">
        <ul className="text-gray-700 space-y-2">
          <li><i className="ri-user-line text-[#feaf0c]"></i> Total Students: {profile.totalStudents}</li>
          <li><i className="ri-video-line text-[#feaf0c]"></i> Uploaded Lectures: {profile.uploadedLectures || 0}</li>
          <li><i className="ri-question-line text-[#feaf0c]"></i> Pending Quizzes: {profile.pendingQuizzes || 0}</li>
          <li><i className="ri-money-dollar-circle-line text-[#feaf0c]"></i> Revenue: ${profile.totalRevenue}</li>
        </ul>
      </DashboardCard>

      {/* Profile Summary */}
      <DashboardCard title="Profile Summary">
        <p className="text-gray-600">Instructor: {profile.name}</p>
        <p className="text-gray-600">Email: {profile.email}</p>
        <p className="text-gray-600">Qualification: {profile.qualification}</p>
      </DashboardCard>

      {/* My Courses */}
      <DashboardCard title="My Courses">
        {courses.map((course) => (
          <div key={course._id} className="flex justify-between items-center border-b py-2">
            <span className="text-gray-700">{course.title}</span>
            <span className="text-sm text-gray-500">{course.enrolledCount} Enrolled</span>
          </div>
        ))}
      </DashboardCard>
    </div>
  );
}
