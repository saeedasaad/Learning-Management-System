import React from "react";
import Button from "../Button.jsx";

export default function CourseHero({ course, instructor, onEnroll }) {
  return (
    <div className="relative bg-gradient-to-r from-[#1e3c72] to-[#2a5298] text-white pt-28 pb-8">

      <div className="mx-auto w-[85%] grid lg:grid-cols-2 gap-10 items-center">
        
        <div className="text-center lg:text-left">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">{course.title}</h1>
          <p className="text-md mb-6 max-w-md mx-auto lg:mx-0 text-gray-200">
            {course.description}
          </p>
          {instructor && (
            <p className="text-sm text-gray-300">
              Instructor: {instructor.name}
            </p>
          )}
        </div>

        <div className="flex justify-center">
          <div className="shadow-xl rounded-xl overflow-hidden">
            <img
              src={`http://localhost:5000${course.thumbnail}`}
              alt={course.title}
              className="w-full max-w-md object-cover"
            />
          </div>
        </div>
      </div>

      <div className="absolute left-1/2 bottom-0 transform -translate-x-1/4 translate-y-1/2 w-[95%] sm:w-[90%] max-w-3xl">
        <div className="flex items-center justify-between bg-white text-[#02448d] px-4 sm:px-6 py-4 rounded-xl shadow-lg">
          <div className="text-xl sm:text-2xl font-bold">
            $ {course.price}
            {course.originalPrice && (
              <span className="line-through text-gray-400 ml-3 text-base sm:text-lg">
                $ {course.originalPrice}
              </span>
            )}
          </div>
          <Button variant="filled" onClick={onEnroll}>
            Enroll Now
          </Button>
        </div>
      </div>
    </div>
  );
}
