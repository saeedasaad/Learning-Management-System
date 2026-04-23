import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      
      {/* Card */}
      <div className="bg-white shadow-2xl w-full max-w-lg p-8">
        
        {/* Heading */}
        <h1 className="text-3xl font-extrabold text-gray-800 mb-2 text-center">
          Contact Us
        </h1>

        <p className="text-gray-500 text-center mb-6">
          We'd love to hear from you. Send us a message!
        </p>

        {/* Form */}
        <form className="space-y-5">
          
          {/* Name */}
          <div>
            <label className="text-sm text-gray-600">Name</label>
            <div className="flex items-center border mt-1 px-3 py-2">
              <i className="ri-user-3-line text-gray-400 mr-2"></i>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full outline-none text-sm"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-gray-600">Email</label>
            <div className="flex items-center border mt-1 px-3 py-2">
              <i className="ri-mail-line text-gray-400 mr-2"></i>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full outline-none text-sm"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="text-sm text-gray-600">Message</label>
            <div className="flex items-start border mt-1 px-3 py-2">
              <i className="ri-chat-3-line text-gray-400 mr-2 mt-1"></i>
              <textarea
                rows="4"
                placeholder="Write your message"
                className="w-full outline-none text-sm resize-none"
              ></textarea>
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-[#f49f35] hover:bg-[#e08c20] text-white py-2 font-semibold transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}