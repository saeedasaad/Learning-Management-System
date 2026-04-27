import React, { useState } from "react";

const faqs = [
  {
    question: "Are these courses suitable for beginners?",
    answer:
      "Yes, our courses are structured to guide beginners step by step while also challenging advanced learners.",
  },
  {
    question: "Do you provide placement assistance?",
    answer:
      "We offer career guidance, mock interviews, and connections with hiring partners to help you land your dream job.",
  },
  {
    question: "Are classes live or recorded?",
    answer:
      "We provide live sessions with recordings available later, so you can revisit content anytime.",
  },
  {
    question: "Do students work on real projects?",
    answer:
      "Absolutely! You’ll build real-world projects that strengthen your portfolio and practical skills.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="md:py-16 py-10 px-6 bg-gray-50 border-t border-gray-200">
      <h2 className="md:text-3xl text-2xl font-bold text-center mb-10 text-[#02448d]">
        Frequently Asked Questions
      </h2>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md border border-gray-200"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
            >
              <h3 className="font-semibold text-[#02448d] md:text-lg text-sm">
                {faq.question}
              </h3>
              <span className="text-[#02448d] md:text-xl text-lg">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <p className="px-6 pb-4 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}