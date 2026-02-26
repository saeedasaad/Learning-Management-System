import { heroData } from "../../assets/assets";

function Hero() {
  return (
    <section className="bg-blue-600 text-white text-center py-20">
      <h1 className="text-4xl font-bold">{heroData.title}</h1>
      <p className="mt-4 text-lg">{heroData.subtitle}</p>
      <div className="mt-6 space-x-4">
        <a href="/courses" className="bg-white text-blue-600 px-6 py-2 rounded">
          {heroData.ctaPrimary}
        </a>
        <a href="/register" className="bg-yellow-400 text-black px-6 py-2 rounded">
          {heroData.ctaSecondary}
        </a>
      </div>
    </section>
  );
}

export default Hero;
