import React from "react";

export default function FormLayout({ title, subtitle, children }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-white shadow-2xl w-full max-w-lg p-8 rounded-lg">
        {/* Heading */}
        <h1 className="md:text-3xl text-2xl font-extrabold text-gray-800 mb-2 text-center">
          {title}
        </h1>
        {subtitle && (
          <p className="text-gray-500 text-center mb-6">{subtitle}</p>
        )}

        {/* Form Content */}
        <form className="space-y-5">{children}</form>
      </div>
    </div>
  );
}
