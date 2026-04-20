import React from "react";

export default function CourseHighlights({
  duration,
  modules,
  questions,
  projectsCount,
}) {
  // Safely compute values
  const moduleCount = Array.isArray(modules) ? modules.length : 0;
  const questionCount = Array.isArray(questions)
    ? questions.length
    : questions || 0;

  const highlights = [
    {
      icon: <i className="ri-time-line"></i>,
      title: duration || "N/A",
      text: "Comprehensive learning content",
    },
    {
      icon: <i className="ri-book-open-line"></i>,
      title: `${moduleCount} Modules`,
      text: "Structured curriculum",
    },
    {
      icon: <i className="ri-question-line"></i>,
      title: `${questionCount} Questions`,
      text: "Practice & mastery",
    },
    {
      icon: <i className="ri-git-merge-line"></i>,
      title: `${projectsCount || 0} Projects`,
      text: "Hands-on industry experience",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white border-t border-gray-200">
      <h2 className="text-3xl font-bold text-center mb-14 text-[#02448d]">
        Best Reasons To Choose{" "}
        <span className="md:block inline">Our Course</span>
      </h2>

      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        {highlights.map((item, index) => (
          <div
            key={index}
            className="p-8 shadow-md border border-gray-200 bg-gray-50"
          >
            <div className="flex justify-center items-center text-xl mb-6 w-10 h-10 mx-auto bg-[#02448d] text-white">
              {item.icon}
            </div>
            <h3 className="text-md font-semibold mb-1 text-[#02448d]">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
