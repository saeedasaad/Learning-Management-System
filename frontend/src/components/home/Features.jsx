import React from "react";
import { featuresData } from "../../assets/assets";

export default function Features() {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-10">Platform Features</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {featuresData.map((feature) => (
          <div
            key={feature.id}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}