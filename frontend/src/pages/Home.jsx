import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import PopularCourses from "../components/home/PopularCourses";
import InstructorHighlight from "../components/home/InstructorHighlight";
import Testimonials from "../components/home/Testimonials";
import HowItWorks from "../components/home/HowItWorks";
import CallToAction from "../components/home/CallToAction";

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <PopularCourses />
      <InstructorHighlight />
      <Testimonials />
      <HowItWorks />
      <CallToAction />
    </>
  );
}

export default Home;
