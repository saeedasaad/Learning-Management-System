import React from "react";
import EduMasterCTA from "../../assets/cta-banner.png";
import Button from "../common/Button";

export default function CallToAction() {
  return (
    <section
      className="relative md:py-38 py-10 text-center text-white"
      style={{
        backgroundImage: `url(${EduMasterCTA})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[#044089]/60"></div>

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <h2 className="font-extrabold md:text-4xl text-2xl mb-4 mt-8">
          Let’s Discuss Your Learning Goals
        </h2>
        <p className="md:text-lg text-sm leading-relaxed text-gray-100 mb-8 font-medium">
          Empower your future with{" "}
          <span className="text-[#feaf0f] font-semibold">EduMaster</span> —
          where knowledge meets innovation and growth. Join a community of
          learners and instructors dedicated to helping you achieve excellence.
        </p>
        <Button
          variant="filled"
          onClick={() => (window.location.href = "/contact")}
        >
          Get Started <i className="ri-arrow-right-line"></i>
        </Button>
      </div>
    </section>
  );
}
