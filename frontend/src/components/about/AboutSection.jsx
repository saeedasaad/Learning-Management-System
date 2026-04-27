import React from "react";
import Button from "../common/Button";
import AboutImg from "../../assets/about-1.png";

export default function AboutSection() {
  return (
    <section className="py-16 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

      <img
        src={AboutImg}
        alt="EduMaster Team"
        className="object-cover w-full"
      />


      <div className="text-center md:text-left">
        <h2 className="text-3xl font-bold text-[#02448d] mb-6">
          We Are Dedicated To Your Success
        </h2>
        <p className="text-gray-600 leading-relaxed mb-8">
          EduMaster is committed to empowering students and instructors with
          modern tools, hands‑on projects, and industry‑relevant skills. Our
          mission is to transform education into an engaging, personalized
          experience that prepares learners for real‑world success.
        </p>
        <Button variant="primaryBlue">
          Learn More <i className="ri-arrow-right-line"></i>
        </Button>
      </div>
    </section>
  );
}