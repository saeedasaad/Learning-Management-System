import React, { useState } from "react";

export default function FAQs({ faqs }) {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, i) => (
        <div key={i} className="border rounded shadow-sm">
          <button
            onClick={() => setOpenFaq(openFaq === i ? null : i)}
            className="w-full text-left px-4 py-3 font-semibold bg-gray-50 hover:bg-yellow-50"
          >
            {faq.q}
          </button>
          {openFaq === i && <p className="px-4 py-3 bg-gray-100">{faq.a}</p>}
        </div>
      ))}
    </div>
  );
}
