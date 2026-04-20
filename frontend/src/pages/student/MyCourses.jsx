import React, { useEffect, useState } from "react";
import { getMyCourses } from "../../utils/apis";
import CourseTopics from "../../components/student/CourseTopics";
import FAQs from "../../components/student/FAQs";
import Glossary from "../../components/student/Glossary";
import CompletionCriteria from "../../components/student/CompletionCriteria";

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
      <p className="text-center text-gray-500">No enrolled courses yet.</p>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-yellow-400 pb-4">
        My Courses
      </h1>

      {/* Course Selector */}
      <div className="flex gap-4 mb-6">
        {enrollments.map((enrollment) => (
          <button
            key={enrollment.course._id}
            onClick={() => setActiveCourse(enrollment.course)}
            className={`px-4 py-2 rounded ${
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
      <div className="flex gap-6 mb-6 border-b">
        {["topics", "faqs", "glossary", "completion"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 font-semibold transition ${
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
  );
}
