import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCourseById } from "../utils/api.js";
import CourseHero from "../components/Courses/CourseHero.jsx";
import CourseHighlights from "../components/Courses/CourseHighlights.jsx";
import CurriculumSection from "../components/Courses/CurriculumSection.jsx";
import ProjectsSection from "../components/Courses/ProjectsSection.jsx";
import CertificationSection from "../components/Courses/CertificationSection.jsx";
import CallToAction from "../components/home/CallToAction.jsx";

export default function CourseDetails() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const data = await getCourseById(id);
        setCourse(data);
      } catch (err) {
        console.error("Error fetching course:", err);
      }
    };
    fetchCourse();
  }, [id]);

  if (!course) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-[#02448d]">Course Not Found</h2>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <CourseHero course={course} instructor={{ name: course.instructorId }} />
      <CourseHighlights
        duration={course.duration}
        modules={course.modules}
        questions={course.questions}
        projectsCount={course.projects.length}
      />
      <CurriculumSection curriculum={course.curriculum} />
      <ProjectsSection projects={course.projects} />
      <CertificationSection certificates={course.certificates} />
      <CallToAction />
    </div>
  );
}
