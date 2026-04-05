import React from "react";

export default function FAQ() {
  return (
    <div className="py-16 px-6 bg-white border-t border-gray-200">
      <h2 className="text-3xl font-bold text-center mb-10 text-[#02448d]">
        Frequently Asked Questions
      </h2>
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <h3 className="font-semibold text-[#02448d]">
            Are these courses suitable for beginners?
          </h3>
          <p className="text-gray-600">
            Yes, our courses are structured to guide beginners step by step while also challenging advanced learners.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-[#02448d]">
            Do you provide placement assistance?
          </h3>
          <p className="text-gray-600">
            We offer career guidance, mock interviews, and connections with hiring partners to help you land your dream job.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-[#02448d]">
            Are classes live or recorded?
          </h3>
          <p className="text-gray-600">
            We provide live sessions with recordings available later, so you can revisit content anytime.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-[#02448d]">
            Do students work on real projects?
          </h3>
          <p className="text-gray-600">
            Absolutely! You’ll build real-world projects that strengthen your portfolio and practical skills.
          </p>
        </div>
      </div>
    </div>
  );
}