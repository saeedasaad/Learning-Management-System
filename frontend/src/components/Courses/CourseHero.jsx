import React from "react";
import Button from "../Button.jsx";

export default function CourseHero({ course, instructor }) {
  return (
    <div className="relative bg-gradient-to-r from-[#1e3c72] to-[#2a5298] text-white pt-28 pb-8">
      <div className="mx-auto w-[85%] grid lg:grid-cols-2 gap-10 items-center">
        {/* Left Text Section */}
        <div className="text-center lg:text-left">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">{course.title}</h1>
          <p className="text-md mb-6 max-w-md mx-auto lg:mx-0 text-gray-200">
            {course.description}
          </p>
          {instructor && (
            <p className="text-sm text-gray-300">
              Instructor: {instructor.name} <br />
              <span className="text-[#feaf0c]">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-half-fill"></i>
                {instructor.rating}
              </span>
            </p>
          )}
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <div className="shadow-xl rounded-xl overflow-hidden">
            <img
              src={course.thumbnail}
              alt={course.title}
              className="w-full max-w-md object-cover"
            />
          </div>
        </div>
      </div>

      {/* Floating Price Bar */}
      <div className="absolute left-1/2 bottom-0 transform md:-translate-x-1/4 -translate-x-1/2 translate-y-1/2 w-[95%] sm:w-[90%] max-w-3xl">
        <div className="flex items-center justify-between bg-white text-[#02448d] px-4 sm:px-6 py-4 rounded-xl shadow-lg gap-3 sm:gap-0">
          <div className="text-xl sm:text-2xl font-bold text-center sm:text-left">
            $ {course.price}
            {course.originalPrice && (
              <span className="line-through text-gray-400 ml-3 text-base sm:text-lg">
                $ {course.originalPrice}
              </span>
            )}
          </div>
          <Button variant="filled">
            Enroll Now
          </Button>
        </div>
      </div>
    </div>
  );
}