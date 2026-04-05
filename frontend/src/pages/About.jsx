import React from "react";
import Banner from "../components/Banner.jsx";
import CallToAction from "../components/home/CallToAction.jsx";
import Button from "../components/Button.jsx";
import AboutBg from "../assets/about-banner.png";
import AboutImg from "../assets/about-1.png";

export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner */}
      <Banner
        title="About Us"
        description="Passionate About Driving Success For Learners"
        bgImage={AboutBg}
      />

      {/* About Section */}
      <section className="py-16 px-6 max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <img src={AboutImg} alt="EduMaster Team" className="object-cover" />

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

      {/* Mission & Vision */}
      <section className="py-16 px-6 bg-white border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto text-center">
          <div>
            <h3 className="text-2xl font-semibold text-[#02448d] mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600">
              To create a world where learning is accessible, engaging, and
              tailored to every individual’s journey.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-[#02448d] mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To empower learners and instructors with innovative tools,
              mentorship, and community support that drive excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-[#02448d] text-white">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
          <div>
            <h3 className="text-4xl font-bold">680+</h3>
            <p className="mt-2">Students Trust Us</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">1,354+</h3>
            <p className="mt-2">Projects Completed</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">97%</h3>
            <p className="mt-2">Success Rate</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">15+</h3>
            <p className="mt-2">Years Experience</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
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
      </section>

      {/* Call To Action */}
      <CallToAction />
    </div>
  );
}
