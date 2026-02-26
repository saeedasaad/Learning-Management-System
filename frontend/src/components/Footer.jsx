import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto px-6 text-center">
        {/* Copyright */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} LMS Platform. All rights reserved.
        </p>

        {/* Navigation Links */}
        <div className="mt-4 space-x-6">
          <a href="/about" className="hover:text-gray-400 transition">
            About
          </a>
          <a href="/contact" className="hover:text-gray-400 transition">
            Contact
          </a>
          <a href="/courses" className="hover:text-gray-400 transition">
            Courses
          </a>
          <a href="/privacy" className="hover:text-gray-400 transition">
            Privacy Policy
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="mt-4 flex justify-center space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook text-xl hover:text-blue-400"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter text-xl hover:text-blue-400"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram text-xl hover:text-pink-400"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin text-xl hover:text-blue-300"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
