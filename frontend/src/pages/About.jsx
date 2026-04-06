import React from "react";
import Banner from "../components/Banner.jsx";
import CallToAction from "../components/home/CallToAction.jsx";
import AboutBg from "../assets/about-banner.png";
import Highlights from "../components/about/Highlights.jsx";
import TeamSection from "../components/about/TeamSection.jsx";
import AboutSection from "../components/about/AboutSection.jsx";
import MissionVisionSection from "../components/about/MissionVisionSection.jsx";

export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner */}
      <Banner
        title="About Us"
        description="Passionate About Driving Success For Learners"
        bgImage={AboutBg}
      />

      <AboutSection />
      <MissionVisionSection />
      <Highlights />
      <TeamSection />
      <CallToAction />
    </div>
  );
}