import { Link } from "react-router-dom";
import { heroData } from "../../assets/assets";
import heroBg from "../../assets/hero-bg.jpg";
import Button from "../Button";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white text-center overflow-hidden mt-[70px]">
      {/* Background Image */}
      <img
        src={heroBg}
        alt="hero"
        className="absolute inset-0 w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          {heroData.title}
        </h1>

        <p className="mt-6 text-lg md:text-xl opacity-90">
          {heroData.subtitle}
        </p>

        <div className="mt-8 flex gap-4 justify-center flex-wrap">
          <Link to="/register">
            <Button variant="filled">{heroData.ctaSecondary || "Register"}</Button>
          </Link>
          <Link to="/courses">
            <Button variant="outline">{heroData.ctaPrimary || "Courses"}</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
