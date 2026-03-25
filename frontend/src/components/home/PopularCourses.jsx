import React from "react";
import { courses, instructors } from "../../assets/assets";

export default function PopularCourses() {
  // Helper function to get instructor name
  const getInstructorName = (id) => {
    const instructor = instructors.find((inst) => inst._id === id);
    return instructor ? instructor.name : "Unknown Instructor";
  };

  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold mb-10">
        Popular Courses
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {courses && courses.length > 0 ? (
          courses.map((course) => (
            <div
              key={course._id}
              className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-xl transition duration-300"
            >
              <img
                src={course.thumbnail || "/assets/course-placeholder.jpg"}
                alt={course.title}
                className="w-full h-40 object-cover rounded mb-4"
              />

              <h3 className="text-xl font-semibold">
                {course.title}
              </h3>

              <p className="text-gray-600 mt-2">
                Instructor: {getInstructorName(course.instructorId)}
              </p>

              <p className="text-yellow-500 mt-2">
                ⭐ {course.rating}
              </p>

              <p className="text-blue-600 font-bold mt-2">
                ₹ {course.price}
              </p>
            </div>
          ))
        ) : (
          <p>No courses available</p>
        )}
      </div>
    </section>
  );
}