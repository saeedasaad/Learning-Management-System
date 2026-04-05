import React from "react";
import { useParams } from "react-router-dom";
import { courses, instructors } from "../assets/assets.js";
import CallToAction from "../components/home/CallToAction.jsx";

export default function CourseDetails() {
  const { id } = useParams();

  const course = courses.find((c) => c._id === id);
  const instructor = instructors.find(
    (inst) => inst._id === course?.instructorId,
  );

  if (!course) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-[#02448d]">Course Not Found</h2>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">

      <div className="relative bg-gradient-to-r from-[#1e3c72] to-[#2a5298] text-white pt-28 pb-8 ">
        <div className=" mx-auto w-[85%] grid lg:grid-cols-2 gap-10 items-center">

        <div className="text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            {course.title}
          </h1>

          <p className="text-lg mb-6 max-w-md mx-auto lg:mx-0 text-gray-200">
            {course.description}
          </p>

          {instructor && (
            <p className="text-sm text-gray-300">
              Instructor: {instructor.name} ⭐ {instructor.rating}
            </p>
          )}
        </div>

        {/* Right Image Card */}
        <div className="flex justify-center">
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-xl">
            <img
              src={course.thumbnail}
              alt={course.title}
              className="w-full max-w-md rounded-lg"
            />
          </div>
          </div>
        </div>

        {/* Floating Price Bar */}
        <div className="absolute left-1/2 bottom-0 transform -translate-x-1/5 translate-y-1/2 w-[90%] max-w-3xl ">
          <div className="flex items-center justify-between bg-white text-[#02448d] px-6 py-4 rounded-xl shadow-lg">
            <div className="text-2xl font-bold">
              ₹ {course.price}
              {course.originalPrice && (
                <span className="line-through text-gray-400 ml-3 text-lg">
                  ₹ {course.originalPrice}
                </span>
              )}
            </div>

            <button className="bg-[#ffac0b] px-6 py-3 rounded-lg font-semibold hover:bg-[#ffc94d] transition">
              Enroll Now
            </button>
          </div>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="py-12 px-6 max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center mt-20">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold text-[#02448d]">115+ Hours</h3>
          <p className="text-gray-600">Comprehensive learning content</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold text-[#02448d]">12+ Modules</h3>
          <p className="text-gray-600">Structured curriculum</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold text-[#02448d]">1k+ Questions</h3>
          <p className="text-gray-600">Practice & mastery</p>
        </div>
      </div>

      {/* Curriculum Section */}
      <div className="py-16 px-6 bg-white border-t border-gray-200">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#02448d]">
          Curriculum Overview
        </h2>
        <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="font-semibold text-[#02448d]">Beginner</h3>
            <p className="text-gray-600">Python, Data Analysis, Statistics</p>
          </div>
          <div>
            <h3 className="font-semibold text-[#02448d]">Intermediate</h3>
            <p className="text-gray-600">
              Machine Learning, Deep Learning, SQL
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-[#02448d]">Advanced</h3>
            <p className="text-gray-600">GenAI, Deployment, Capstone Project</p>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#02448d]">
          Real-World Projects
        </h2>
        <p className="max-w-3xl mx-auto text-center text-gray-600">
          Work on industry-relevant projects to strengthen your portfolio and
          gain practical experience.
        </p>
      </div>

      {/* Certification Section */}
      <div className="py-16 px-6 bg-white border-t border-gray-200 text-center">
        <h2 className="text-3xl font-bold mb-6 text-[#02448d]">
          Earn Your Certificate
        </h2>
        <p className="text-gray-600 mb-6">
          Upon completion, you’ll receive a certificate to showcase your skills.
        </p>
        <div className="inline-block bg-gray-100 p-6 rounded-lg shadow">
          <p className="text-[#02448d] font-semibold">Sample Certificate</p>
          <p className="text-gray-500">Issued to John Doe</p>
        </div>
      </div>

      {/* CTA Section */}
      <CallToAction/>

    </div>
  );
}
