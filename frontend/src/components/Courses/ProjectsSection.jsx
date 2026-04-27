import React from "react";

export default function ProjectsSection({ projects }) {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <h2 className="md:text-3xl text-2xl font-bold text-center md:mb-10 mb-5 text-[#02448d]">
        Real-World Projects
      </h2>
      <p className="md:max-w-3xl max-w-xl mx-auto text-sm md:text-lg text-center text-gray-600 md:mb-12 mb-10">
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
