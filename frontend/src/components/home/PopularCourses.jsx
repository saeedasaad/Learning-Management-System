import React from "react";
import { courses, instructors } from "../../assets/assets";
import { Link } from "react-router-dom";

export default function PopularCourses() {
  const getInstructorName = (id) => {
    const instructor = instructors.find((inst) => inst._id === id);
    return instructor ? instructor.name : "Unknown Instructor";
  };

  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(" ") + "...";
  };

  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold mb-10">Popular Courses</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {courses && courses.length > 0 ? (
          courses.map((course) => (
            <div
              key={course._id}
              className="relative group shadow-lg hover:shadow-xl transition duration-300 overflow-hidden"
            >
              {/* Course Image */}
              <img
                src={course.thumbnail || "/assets/course-placeholder.jpg"}
                alt={course.title}
                className="w-full h-56 object-cover transform group-hover:scale-105 transition duration-500"
              />

              {/* Overlay with smooth fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d488d] via-[#1a579d] to-[#3772b6] flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500 px-4">
                <h3 className="text-white text-lg font-bold mb-2 drop-shadow-lg">
                  {course.title}
                </h3>
                <p className="text-gray-200 text-sm mb-4 drop-shadow-md">
                  {truncateText(course.description, 15)}
                </p>
                <Link
                  to={`/courses/${course._id}`}
                  className="text-white font-semibold tracking-wide relative drop-shadow-md after:content-[''] after:block after:w-full after:h-[2px] after:bg-[#f49f35] after:scale-x-0 group-hover:after:scale-x-100 after:transition after:duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>No courses available</p>
        )}
      </div>
    </section>
  );
}