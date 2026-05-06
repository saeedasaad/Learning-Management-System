import React, { useEffect, useState } from "react";
import { getMyCourses } from "../../utils/api";
import CourseTopics from "../../components/student/CourseTopics";
import FAQs from "../../components/student/FAQs";
import Glossary from "../../components/student/Glossary";
import CompletionCriteria from "../../components/student/CompletionCriteria";
import DashboardCard from "../../components/layouts/DashboardCard";

export default function MyCourses() {
  const [enrollments, setEnrollments] = useState([]);
  const [activeCourse, setActiveCourse] = useState(null);
  const [activeTab, setActiveTab] = useState("topics");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await getMyCourses();
        console.log("Fetched enrollments:", data);
        setEnrollments(data);
        if (data.length > 0) setActiveCourse(data[0].course);
      } catch (err) {
        console.error("Error fetching enrolled courses:", err);
      }
    };
    fetchCourses();
  }, []);

  if (!activeCourse) {
    return (
      <div className="p-6 grid lg:grid-cols-2 gap-6">
        <DashboardCard title="My Courses">
          <p className="text-center text-gray-500">No enrolled courses yet.</p>
        </DashboardCard>
      </div>
    );
  }

  return (
    <div className="md:m-10 m-5">
      <DashboardCard title="My Courses">
        {/* Course Selector */}
        <div className="flex flex-wrap gap-3 mb-6">
          {enrollments.map((enrollment) => (
            <button
              key={enrollment.course._id}
              onClick={() => setActiveCourse(enrollment.course)}
              className={`px-3 py-2 rounded text-sm sm:text-base ${
                activeCourse._id === enrollment.course._id
                  ? "bg-yellow-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-yellow-100"
              }`}
            >
              {enrollment.course.title}
            </button>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-8 border-b">
          {["topics", "faqs", "glossary", "completion"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 font-semibold text-sm sm:text-base transition ${
                activeTab === tab
                  ? "text-yellow-500 border-b-2 border-yellow-500"
                  : "text-gray-600 hover:text-yellow-500"
              }`}
            >
              {tab === "topics" && "Course Topics"}
              {tab === "faqs" && "FAQs"}
              {tab === "glossary" && "Glossary"}
              {tab === "completion" && "Completion Criteria"}
            </button>
          ))}
        </div>

        {/* Render Components */}
        <div className="mt-4">
          {activeTab === "topics" && (
            <CourseTopics modules={activeCourse.modules} />
          )}
          {activeTab === "faqs" && <FAQs faqs={activeCourse.faqs} />}
          {activeTab === "glossary" && (
            <Glossary
              glossary={activeCourse.glossary}
              modules={activeCourse.modules}
            />
          )}
          {activeTab === "completion" && (
            <CompletionCriteria criteria={activeCourse.completionCriteria} />
          )}
        </div>
      </DashboardCard>
    </div>
  );
}
