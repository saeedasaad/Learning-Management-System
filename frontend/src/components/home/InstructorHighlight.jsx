import React from "react";
import { instructors } from "../../assets/assets";

export default function InstructorHighlight() {
  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-10">
        Meet Our Instructors
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {instructors && instructors.length > 0 ? (
          instructors.map((inst) => (
            <div
              key={inst._id}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition duration-300"
            >
              <img
                src={inst.avatar}
                alt={inst.name}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />

              <h3 className="text-xl font-semibold">
                {inst.name}
              </h3>

              <p className="text-gray-600 mt-2">
                {inst.expertise}
              </p>

              <p className="text-sm text-gray-500 mt-1">
                👨‍🎓 {inst.totalStudents} Students
              </p>
            </div>
          ))
        ) : (
          <p>No instructors available</p>
        )}
      </div>
    </section>
  );
}