import React from "react";

export default function Banner({ title, description, bgImage }) {
  return (
    <section
      className="relative py-20 px-6 text-center text-white"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay Layer */}
      <div className="absolute inset-0 bg-[#02448d]/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-3">{title}</h1>
        <p className="text-lg leading-relaxed">{description}</p>
      </div>
    </section>
  );
}