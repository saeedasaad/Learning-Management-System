import React from "react";
import { testimonialsData } from "../../assets/assets";

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-10">What Our Students Say</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {testimonialsData.map((test) => (
          <div
            key={test.id}
            className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
          >
            <p className="text-gray-700 italic mb-4">"{test.feedback}"</p>
            <h3 className="text-lg font-semibold">{test.student}</h3>
            <p className="text-yellow-500">⭐ {test.rating}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
