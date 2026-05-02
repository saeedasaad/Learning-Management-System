import Hero from "../../components/home/Hero";
import PopularCourses from "../../components/home/PopularCourses";
import InstructorHighlight from "../../components/home/InstructorHighlight";
import Testimonials from "../../components/home/Testimonials";
import CallToAction from "../../components/home/CallToAction";

function Home() {
  return (
    <>
      <Hero />
      <PopularCourses />
      <InstructorHighlight />
      <Testimonials />
      <CallToAction />
    </>
  );
}

export default Home;
