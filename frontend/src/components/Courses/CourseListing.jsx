import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../common/Button.jsx";
import { getCourses } from "../../utils/api.js";

export default function CourseListing() {
  const [courses, setCourses] = useState([]);
  console.log(courses);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await getCourses();
        setCourses(data);
      } catch (err) {
        console.error("Error fetching courses:", err);
      }
    };
    fetchCourses();
  }, []);

  return (
    <div className="py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-12 text-[#02448d]">
        All Courses
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white p-6 shadow hover:shadow-xl transition border border-[#02448d]/10"
          >
            <img
              src={`${import.meta.env.VITE_BACKEND_URL}${course.thumbnail}`}
              alt={course.title}
              className="w-full h-46 object-cover rounded mb-4"
            />

            <h3 className="text-xl font-semibold text-[#02448d]">
              {course.title}
            </h3>
            <p className="text-[#ffac0b] mt-2 font-medium flex items-center gap-1">
              <i className="ri-star-fill"></i> {course.rating}
            </p>
            <p className="text-[#02448d] font-bold mt-2">$ {course.price}</p>
            <Link to={`/courses/${course._id}`}>
              <Button
                variant="primaryBlue"
                className="mt-4 flex items-center gap-2 justify-center"
              >
                View Details <i className="ri-arrow-right-line"></i>
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
