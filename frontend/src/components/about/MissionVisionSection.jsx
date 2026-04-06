import React from "react";
import MissionVisionImg from "../../assets/mission-vision.jpg";
import AboutBg_2 from "../../assets/about-bg.png";
import MissionVision from "./MissionVision.jsx";

export default function MissionVisionSection() {
  return (
    <section
      className="relative py-16 px-6 text-white"
      style={{
        backgroundImage: `url(${AboutBg_2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-center md:text-left w-[90%] mx-auto">
        <h2 className="text-3xl font-bold mb-10 w-[85%] mx-auto">
          Discover The Core Principles <br />
          That Guide Us
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-end gap-10">
          <div className="bg-white p-2 w-full md:w-1/3 h-[250px] md:h-[300px] rounded-lg shadow-md">
            <img
              src={MissionVisionImg}
              alt="Our Vision"
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          <div className="w-full md:w-1/2 h-auto">
            <MissionVision />
          </div>
        </div>
      </div>
    </section>
  );
}