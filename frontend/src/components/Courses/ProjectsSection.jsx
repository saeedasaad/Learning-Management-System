import React from "react";

export default function ProjectsSection({ projects }) {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10 text-[#02448d]">
        Real-World Projects
      </h2>
      <p className="max-w-3xl mx-auto text-center text-gray-600 mb-12">
        Work on industry-relevant projects to strengthen your portfolio and gain
        practical experience.
      </p>

      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects && projects.length > 0 ? (
          projects.map((proj, index) => (
            <div key={index} className="bg-white shadow-md overflow-hidden">
              {proj.image && (
                <img
                  src={`http://localhost:5000${proj.image}`}
                  alt={proj.title}
                  className="w-full h-56 object-cover"
                />
              )}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-[#02448d] mb-3">
                  {proj.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {proj.desc}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No projects available.</p>
        )}
      </div>
    </section>
  );
}
