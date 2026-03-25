import React from "react";
import { useParams } from "react-router-dom";
import { courses, instructors } from "../assets/assets.js";

export default function CourseDetails() {
  const { id } = useParams();

  const course = courses.find((c) => c._id === id);

  const instructor = instructors.find(
    (inst) => inst._id === course?.instructorId
  );

  if (!course) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Course Not Found</h2>
      </div>
    );
  }

  return (
    <div className="py-16 px-6 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow">
        
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-64 object-cover rounded mb-6"
        />

        <h1 className="text-3xl font-bold mb-4">
          {course.title}
        </h1>

        <p className="text-gray-600 mb-4">
          Instructor: {instructor?.name}
        </p>

        <p className="text-yellow-500 mb-4">
          ⭐ {course.rating}
        </p>

        <p className="text-blue-600 font-bold text-xl mb-6">
          ₹ {course.price}
        </p>

        <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition">
          Enroll Now
        </button>
      </div>
    </div>
  );
}