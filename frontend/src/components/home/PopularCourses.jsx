import React from "react";
import { coursesData } from "../../assets/assets";

export default function PopularCourses() {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold mb-10">Popular Courses</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {coursesData.map((course) => (
          <div
            key={course.id}
            className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold">{course.title}</h3>
            <p className="text-gray-600">Instructor: {course.instructor}</p>
            <p className="text-yellow-500">⭐ {course.rating}</p>
          </div>
        ))}
      </div>
    </section>
  );
}