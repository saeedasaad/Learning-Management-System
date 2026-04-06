import React from "react";

export default function Highlights() {
  const stats = [
    { number: "680+", label: "Students Trust Us" },
    { number: "1,354+", label: "Projects Completed" },
    { number: "97%", label: "Success Rate" },
    { number: "15+", label: "Years Experience" },
  ];

  return (
    <section className="py-10 px-4 bg-[#02448d] text-white md:w-[80%] w-[90%] mx-auto border-b-[5px] border-[#feaf0c]">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto text-center">
        {stats.map((item, index) => (
          <div key={index}>
            <h3 className="text-2xl font-bold">{item.number}</h3>
            <p className="mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}