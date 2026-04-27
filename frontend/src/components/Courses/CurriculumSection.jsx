import React from "react";
import { FaSeedling, FaChartLine, FaRocket } from "react-icons/fa";
import EduMasterCTA from "../../assets/39eecbeca86920e153e277780f20feed.jpg";

export default function CurriculumSection({ curriculum }) {
  const levels = [
    { icon: <FaSeedling />, title: "Beginner", content: curriculum?.beginner?.join(", "), color: "text-green-600" },
    { icon: <FaChartLine />, title: "Intermediate", content: curriculum?.intermediate?.join(", "), color: "text-blue-600" },
    { icon: <FaRocket />, title: "Advanced", content: curriculum?.advanced?.join(", "), color: "text-purple-600" },
  ];

  return (
    <section
      className="relative py-20 text-white"
      style={{
        backgroundImage: `url(${EduMasterCTA})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[#044089]/70"></div>
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="md:text-4xl text-3xl font-bold mb-12">Curriculum Overview</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-4">
          {levels.map((level, index) => (
            <div key={index} className="p-6 text-center">
              <div className="flex justify-center items-center text-3xl mb-4 text-[#044089] w-14 h-14 rounded-full bg-white mx-auto">
                {level.icon}
              </div>
              <h3 className="md:text-xl text-md font-bold mb-2">{level.title}</h3>
              <p className="text-gray-200">{level.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
