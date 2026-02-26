import React from "react";
import { howItWorksData } from "../../assets/assets";

export default function HowItWorks() {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold mb-10">How It Works</h2>
      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {howItWorksData.map((step) => (
          <div
            key={step.step}
            className="p-6 border rounded-lg shadow hover:shadow-md transition"
          >
            <div className="text-2xl font-bold text-blue-600 mb-2">
              Step {step.step}
            </div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}