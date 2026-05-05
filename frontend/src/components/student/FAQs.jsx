import React, { useState } from "react";

export default function FAQs({ faqs = [] }) {
  const [openFaq, setOpenFaq] = useState(null);
  console.log("FAQs:", faqs);

  if (faqs.length === 0) {
    return <p className="text-gray-500">No FAQs available.</p>;
  }

  return (
    <div className="space-y-4">
      {faqs.map((faq, i) => (
        <div key={faq.q || i} className="border rounded shadow-sm">
          <button
            onClick={() => setOpenFaq(openFaq === i ? null : i)}
            className="w-full text-left px-4 py-3 font-semibold bg-gray-50 hover:bg-yellow-50 text-sm sm:text-base"
          >
            {faq.q}
          </button>
          {openFaq === i && (
            <p className="px-4 py-3 bg-gray-100 text-sm sm:text-base">
              {faq.a}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
