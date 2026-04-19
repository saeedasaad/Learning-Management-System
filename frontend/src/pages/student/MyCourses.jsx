import React, { useEffect, useState } from "react";
import { getCourseById } from "../../utils/apis"; 
import CourseTopics from "../../components/student/CourseTopics";
import FAQs from "../../components/student/FAQs";
import Glossary from "../../components/student/Glossary";
import CompletionCriteria from "../../components/student/CompletionCriteria";

export default function MyCourses() {
  const [course, setCourse] = useState(null);
  const [activeTab, setActiveTab] = useState("topics");

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const data = await getCourseById("course_101");

        setCourse(data);
      } catch (err) {
        console.error("Error fetching course:", err);
      }
    };
    fetchCourse();
  }, []);

  if (!course)
    return <p className="text-center text-gray-500">Loading course...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-yellow-400 pb-4">
        {course.title}
      </h1>

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
      {activeTab === "topics" && <CourseTopics modules={course.modules} />}
      {activeTab === "faqs" && <FAQs faqs={course.faqs} />}
      {activeTab === "glossary" && (
        <Glossary glossary={course.glossary} modules={course.modules} />
      )}
      {activeTab === "completion" && (
        <CompletionCriteria criteria={course.completionCriteria} />
      )}
    </div>
  );
}
