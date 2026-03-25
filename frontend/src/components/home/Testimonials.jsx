import React from "react";
import { reviews, users } from "../../assets/assets";

export default function Testimonials() {

  // Get student name using studentId
  const getStudentName = (studentId) => {
    const student = users.find((user) => user._id === studentId);
    return student ? student.name : "Anonymous Student";
  };

  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-10">
        What Our Students Say
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
        {reviews && reviews.length > 0 ? (
          reviews.map((review) => (
            <div
              key={review._id}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300"
            >
              <p className="text-gray-700 italic mb-4">
                "{review.comment}"
              </p>

              <h3 className="text-lg font-semibold">
                {getStudentName(review.studentId)}
              </h3>

              <p className="text-yellow-500 mt-2">
                ⭐ {review.rating}
              </p>
            </div>
          ))
        ) : (
          <p>No testimonials available</p>
        )}
      </div>
    </section>
  );
}