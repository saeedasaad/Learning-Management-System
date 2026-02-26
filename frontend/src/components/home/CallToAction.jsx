import React from "react";
import { callToActionData } from "../../assets/assets";

export default function CallToAction() {
  return (
    <section className="py-16 bg-blue-600 text-white text-center">
      <h2 className="text-3xl font-bold mb-6">{callToActionData.title}</h2>
      <a
        href={callToActionData.link}
        className="bg-yellow-400 text-black px-6 py-3 rounded font-semibold hover:bg-yellow-500 transition"
      >
        {callToActionData.buttonText}
      </a>
    </section>
  );
}