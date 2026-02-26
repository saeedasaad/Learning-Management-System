import React from "react";
import { instructorsData } from "../../assets/assets";

export default function InstructorHighlight() {
  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-10">Meet Our Instructors</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {instructorsData.map((inst) => (
          <div
            key={inst.id}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <img
              src={inst.image}
              alt={inst.name}
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold">{inst.name}</h3>
            <p className="text-gray-600">{inst.expertise}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
