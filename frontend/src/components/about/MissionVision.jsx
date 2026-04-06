import React from "react";

function InfoCard({ icon, title, text }) {
  return (
    <div className="bg-white p-8 flex-1 border-b-[5px] border-[#feaf0c] relative">
      <div className="bg-[#02448d] h-12 w-12 flex items-center justify-center absolute -top-6 left-6 shadow-md">
        <i className={`${icon} text-white text-xl`}></i>
      </div>
      <h3 className="text-2xl font-semibold text-[#02448d] mb-4 mt-8">
        {title}
      </h3>
      <p className="text-gray-600">{text}</p>
    </div>
  );
}

export default function MissionVision() {
  return (

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <InfoCard
          icon="ri-eye-line"
          title="Our Vision"
          text="To create a world where learning is accessible, engaging, and tailored to every individual’s journey."
        />
        <InfoCard
          icon="ri-target-fill"
          title="Our Mission"
          text="To empower learners and instructors with innovative tools, mentorship, and community support that drive excellence."
        />
      </div>

  );
}