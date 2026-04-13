import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCourseById, registerUser, enrollCourse } from "../utils/api.js";
import CourseHero from "../components/Courses/CourseHero.jsx";
import CourseHighlights from "../components/Courses/CourseHighlights.jsx";
import CurriculumSection from "../components/Courses/CurriculumSection.jsx";
import ProjectsSection from "../components/Courses/ProjectsSection.jsx";
import CertificationSection from "../components/Courses/CertificationSection.jsx";
import CallToAction from "../components/home/CallToAction.jsx";
import EnrollmentModal from "../components/Courses/EnrollmentModal.jsx";

export default function CourseDetails() {
  const { _id } = useParams();
  const [course, setCourse] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!id) return;
    const fetchCourse = async () => {
      try {
        const data = await getCourseById(_id);
        setCourse(data);
      } catch (err) {
        console.error("Error fetching course:", err);
      }
    };
    fetchCourse();
  }, [_id]);

  if (!course) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-[#02448d]">Course Not Found</h2>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <CourseHero course={course} onEnroll={() => setShowModal(true)} />
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

      {showModal && (
        <EnrollmentModal course={course} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
}
