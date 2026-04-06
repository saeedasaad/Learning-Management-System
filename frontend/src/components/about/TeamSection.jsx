import React from "react";
import Button from "../Button.jsx";
import TeamImg1 from "../../assets/team-1.jpg"; 
import TeamImg2 from "../../assets/team-2.jpg"; 

export default function TeamSection() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

      <div className="grid grid-cols-2 gap-6">
        <img
          src={TeamImg1}
          alt="Consultant 1"
          className="object-cover w-full h-[400px]"
        />
        <img
          src={TeamImg2}
          alt="Consultant 2"
          className="object-cover w-full h-[400px]"
        />
      </div>


      <div className="text-center md:text-left">
        <h2 className="text-3xl font-bold text-[#02448d] mb-6">
          Meet The Experts
        </h2>
        <p className="text-gray-600 mb-8">
          Discover our team of dedicated instructors and consultants who bring
          expertise, passion, and innovation to every learning journey.
        </p>
        <Button variant="primaryBlue">
          Discover Team <i className="ri-arrow-right-line"></i>
        </Button>
      </div>
    </section>
  );
}
