import React from "react";
import { reviews } from "../../assets/assets";

export default function Testimonials() {

  const renderStars = (rating) => {
    const totalStars = 5;
    return Array.from({ length: totalStars }, (_, index) => (
      <i
        key={index}
        className={
          index < rating
            ? "ri-star-fill text-yellow-400"
            : "ri-star-line text-gray-300"
        }
      ></i>
    ));
  };

  return (
    <section className="md:py-20 py-10 bg-gray-100 text-center">
      {/* Heading */}
      <h2 className="md:text-4xl text-2xl px-8 md:px-0 font-semibold text-[#02448d] mb-4 mt-8">
        What our students say about us
      </h2>

      {/* Paragraph */}
      <p className="md:text-md text-sm text-gray-600 mb-12 max-w-2xl mx-auto px-8 md:px-0">
        Hear directly from our students about their learning experience and how
        our platform helped them grow their skills and confidence.
      </p>


      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {reviews && reviews.length > 0 ? (
          reviews.slice(0, 3).map((review) => (
            <div
              key={review._id} className="bg-white p-8 shadow-xl hover:shadow-2xl transition duration-300 text-center">

              <div className="text-[34px] mb-4" style={{ color: "#014189" }}>
                <i className="ri-double-quotes-l"></i>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed text-sm line-clamp-2">
                {review.comment}
              </p>

              <div className="flex justify-center mb-3">
                <img src={review.image} alt={review.name} className="w-16 h-16 rounded-full object-cover" />
              </div>

              <h3 className="text-sm font-semibold text-gray-800">
                {review.name}
              </h3>

              <div className="flex justify-center mt-2 text-lg">
                {renderStars(review.rating)}
              </div>
            </div>
          ))
        ) : (
          <p>No testimonials available</p>
        )}
      </div>
    </section>
  );
}