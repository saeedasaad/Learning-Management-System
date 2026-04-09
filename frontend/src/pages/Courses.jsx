import React from "react";
import CallToAction from "../components/home/CallToAction.jsx";
import CoursesBg from "../assets/courses-banner.png";
import Banner from "../components/Banner.jsx";
import CourseListing from "../components/Courses/CourseListing.jsx";
import FAQ from "../components/Courses/FAQ.jsx";

export default function Courses() {
  return (
    <div className="bg-gray-50 min-h-screen mt-4">
      <Banner
        title="Level Up Your Coding Skills"
        description="Expert-led courses designed to make you job-ready with hands-on projects and industry-relevant skills."
        bgImage={CoursesBg}
      />
      <CourseListing />
      <FAQ />
      <CallToAction />
    </div>
  );
}
