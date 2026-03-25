import React from "react";
import { Link } from "react-router-dom";
import { courses, instructors } from "../assets/assets.js";

export default function CourseListing() {

  const getInstructorName = (id) => {
    const instructor = instructors.find((inst) => inst._id === id);
    return instructor ? instructor.name : "Unknown Instructor";
  };

  return (
    <div className="py-16 px-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-12">
        All Courses
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {courses.map((course) => (
          <div
            key={course._id}
            className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition"
          >
            <img
              src={course.thumbnail}
              alt={course.title}
              className="w-full h-40 object-cover rounded mb-4"
            />

            <h2 className="text-xl font-semibold">
              {course.title}
            </h2>

            <p className="text-gray-600 mt-2">
              Instructor: {getInstructorName(course.instructorId)}
            </p>

            <p className="text-yellow-500 mt-2">
              ⭐ {course.rating}
            </p>

            <p className="text-blue-600 font-bold mt-2">
              ₹ {course.price}
            </p>

            <Link
              to={`/courses/${course._id}`}
              className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
