import { Link } from "react-router-dom";
import Button from "../Button";
import { heroData } from "../../assets/assets";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white text-center overflow-hidden mt-[70px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${heroData.heroBg})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#14509562]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          {heroData.title}
        </h1>

        <p className="mt-6 text-lg md:text-xl opacity-90">
          {heroData.subtitle}
        </p>

        <div className="mt-8 flex justify-center">
          <Link to={heroData.linkPrimary}>
            <Button variant="filled">{heroData.ctaPrimary}</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;