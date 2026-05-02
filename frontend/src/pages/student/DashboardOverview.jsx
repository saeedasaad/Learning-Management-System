import React, { useEffect, useState } from "react";
import DashboardCard from "../../components/layouts/DashboardCard";
import api, { getMyCourses } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import "remixicon/fonts/remixicon.css";

export default function DashboardOverview() {
  const [profile, setProfile] = useState(null);
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // fetch profile
        const { data } = await api.get("/student/profile");
        setProfile(data);

        // fetch enrolled courses
        const enrolled = await getMyCourses();
        setCourses(enrolled);
      } catch (err) {
        console.error("Error fetching dashboard data:", err);
      }
    };
    fetchData();
  }, []);

  if (!profile) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:m-10 m-5">
      {/* Progress Section */}
      <DashboardCard title="My Progress">
        <p className="text-gray-600">
          You have completed {profile.completedCourses || 0} of{" "}
          {profile.totalCourses || 0} courses.
        </p>
        <div className="w-full bg-gray-200 rounded-full h-3 mt-3">
          <div
            className="bg-[#feaf0c] h-3 rounded-full"
            style={{
              width: `${
                profile.totalCourses
                  ? (profile.completedCourses / profile.totalCourses) * 100
                  : 0
              }%`,
            }}
          ></div>
        </div>
      </DashboardCard>

      {/* Profile Summary */}
      <DashboardCard
        title="Profile Summary"
        onClick={() => navigate("/student/profile")}
        className="cursor-pointer hover:shadow-lg transition"
      >
        <p className="text-gray-600">Student: {profile.name}</p>
        <p className="text-gray-600">Email: {profile.email}</p>
        <p className="text-gray-600">Qualification: {profile.qualification}</p>
      </DashboardCard>

      {/* My Courses */}
      <DashboardCard title="My Courses">
        {courses && courses.length > 0 ? (
          courses.map((enrollment, i) => (
            <div
              key={i}
              className="flex flex-col justify-between items-start py-2"
            >
              <span className="text-gray-700">{enrollment.course.title}</span>
              {/* <span className="text-sm text-gray-500">
                Progress: {enrollment.course.week || 0}/
                {enrollment.course.totalWeeks || 0}
              </span> */}
            </div>
          ))
        ) : (
          <p className="text-gray-500">No enrolled courses yet</p>
        )}
      </DashboardCard>

      {/* My Activities */}
      <DashboardCard title="My Activities">
        {profile.activities ? (
          <ul className="text-gray-700 space-y-2">
            <li>
              <i className="ri-pencil-line text-[#feaf0c]"></i>{" "}
              {profile.activities.exercises} Exercises Pending
            </li>
            <li>
              <i className="ri-question-line text-[#feaf0c]"></i>{" "}
              {profile.activities.quizzes} Quizzes Pending
            </li>
            <li>
              <i className="ri-chat-3-line text-[#feaf0c]"></i>{" "}
              {profile.activities.discussions} New Discussions
            </li>
            <li>
              <i className="ri-sticky-note-line text-[#feaf0c]"></i>{" "}
              {profile.activities.notes} Notes Saved
            </li>
          </ul>
        ) : (
          <p className="text-gray-500">No activity data</p>
        )}
      </DashboardCard>

      {/* Discussions Snapshot */}
      <DashboardCard title="Recent Discussions">
        {profile.discussions && profile.discussions.length > 0 ? (
          profile.discussions.map((d, i) => (
            <div key={i} className="mb-2">
              <p className="font-bold text-gray-800">{d.topic}</p>
              <p className="text-sm text-gray-500">{d.lastReplyTime}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No discussions yet</p>
        )}
      </DashboardCard>

      {/* Notice Board */}
      <DashboardCard title="Notice Board">
        {profile.notices && profile.notices.length > 0 ? (
          <ul className="text-gray-700 space-y-2">
            {profile.notices.map((notice, i) => (
              <li key={i}>
                <i className="ri-notification-line text-[#feaf0c]"></i> {notice}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No notices</p>
        )}
      </DashboardCard>
    </div>
  );
}
