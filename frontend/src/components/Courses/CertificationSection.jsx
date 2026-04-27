import React from "react";

export default function CertificationSection({ certificates = [] }) {
  if (!Array.isArray(certificates)) {
    certificates = [];
  }

  return (
    <section className="py-16 px-6 bg-gray-50 flex items-center justify-center flex-col">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="md:text-4xl text-2xl font-bold mb-6 text-[#02448d]">
          Earn Your Certificate
        </h2>

        {certificates.length > 0 && (
          <p className="text-gray-700 mb-12 leading-relaxed md:text-lg text-sm">
            Upon successful completion of{" "}
            <span className="font-semibold text-[#02448d]">
              {certificates[0].courseTitle}
            </span>
            , you’ll receive a professional certificate to showcase your skills
            and validate your learning journey.
          </p>
        )}
      </div>

      <div className="max-w-6xl mx-auto">
        {certificates && certificates.length > 0 ? (
          certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-white md:w-[600px] w-[95%] mx-auto p-2 shadow-lg overflow-hidden duration-300"
            >
              <img
                src={`http://localhost:5000${cert.certificateImage}`}
                alt={`${cert.courseTitle} Certificate`}
                className="w-full object-cover"
              />
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">
            No certificates available.
          </p>
        )}
      </div>
    </section>
  );
}
