import React from "react";
import { Link } from "react-router-dom";
import { courses, instructors } from "../assets/assets.js";

export default function CourseListing() {
  const getInstructorName = (id) => {
    const instructor = instructors.find((inst) => inst._id === id);
    return instructor ? instructor.name : "Unknown Instructor";
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="py-16 px-6 text-center bg-[#02448d] text-white">
        <h1 className="text-4xl font-bold mb-4">
          Level Up Your Coding Skills
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          Expert-led courses designed to make you job-ready with hands-on projects and industry-relevant skills.
        </p>
      </div>

      {/* Courses Grid */}
      <div className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#02448d]">
          All Courses
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {courses.map((course) => (
            <div
              key={course._id}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition border border-[#02448d]/10"
            >
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-40 object-cover rounded mb-4"
              />

              <h3 className="text-xl font-semibold text-[#02448d]">
                {course.title}
              </h3>

              <p className="text-gray-600 mt-2">
                Instructor: {getInstructorName(course.instructorId)}
              </p>

              <p className="text-[#ffac0b] mt-2 font-medium">
                ⭐ {course.rating}
              </p>

              <p className="text-[#02448d] font-bold mt-2">
                ₹ {course.price}
              </p>

              <Link
                to={`/courses/${course._id}`}
                className="mt-4 inline-block bg-[#02448d] text-white px-4 py-2 rounded hover:bg-[#ffac0b] hover:text-[#02448d] transition font-semibold"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 px-6 bg-white border-t border-gray-200">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#02448d]">
          Frequently Asked Questions
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          <div>
            <h3 className="font-semibold text-[#02448d]">Are these courses suitable for beginners?</h3>
            <p className="text-gray-600">Yes, our courses are structured to guide beginners step by step while also challenging advanced learners.</p>
          </div>
          <div>
            <h3 className="font-semibold text-[#02448d]">Do you provide placement assistance?</h3>
            <p className="text-gray-600">We offer career guidance, mock interviews, and connections with hiring partners to help you land your dream job.</p>
          </div>
          <div>
            <h3 className="font-semibold text-[#02448d]">Are classes live or recorded?</h3>
            <p className="text-gray-600">We provide live sessions with recordings available later, so you can revisit content anytime.</p>
          </div>
          <div>
            <h3 className="font-semibold text-[#02448d]">Do students work on real projects?</h3>
            <p className="text-gray-600">Absolutely! You’ll build real-world projects that strengthen your portfolio and practical skills.</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-6 bg-[#02448d] text-center text-white">
        <h2 className="text-3xl font-bold mb-6">
          Transform Your Learning Into a Career Breakthrough
        </h2>
        <p className="max-w-2xl mx-auto mb-8">
          Join thousands of learners who have advanced their careers with our expert-led, project-based courses.
        </p>
        <Link
          to="/courses"
          className="bg-[#ffac0b] text-[#02448d] px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#02448d] transition"
        >
          Explore Courses
        </Link>
      </div>
    </div>
  );
}