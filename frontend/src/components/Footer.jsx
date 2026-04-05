import React from "react";
import "remixicon/fonts/remixicon.css"; 
import EduMasterLogo from "../assets/edumaster-logo-white.png"; 

export default function Footer() {
  return (
    <footer className="bg-[#044089] text-white relative">
      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-[#feaf0f]"></div>

      <div className="container w-[90%] mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <img
            src={EduMasterLogo}
            alt="EduMaster Logo"
            className="w-30 mb-4"
          />
          <p className="text-sm text-gray-200">
            Empowering students and instructors with modern learning tools.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-[#feaf0f]">Homepage</a></li>
            <li><a href="/about" className="hover:text-[#feaf0f]">About Us</a></li>
            <li><a href="/courses" className="hover:text-[#feaf0f]">Courses</a></li>
            <li><a href="/contact" className="hover:text-[#feaf0f]">Contact Us</a></li>
            <li><a href="/privacy" className="hover:text-[#feaf0f]">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Online Learning</li>
            <li>Course Management</li>
            <li>Student Analytics</li>
            <li>Instructor Tools</li>
            <li>Certification</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p className="text-sm">123 Learning Street, Karachi, Pakistan</p>
          <p className="text-sm">info@edumaster.com</p>
          <p className="text-sm">Mon - Sat: 9:00 - 18:00</p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <i className="ri-facebook-fill text-xl hover:text-[#feaf0f]"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <i className="ri-twitter-fill text-xl hover:text-[#feaf0f]"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <i className="ri-instagram-fill text-xl hover:text-[#feaf0f]"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <i className="ri-linkedin-fill text-xl hover:text-[#feaf0f]"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-200 py-4">
        &copy; {new Date().getFullYear()} EduMaster. All rights reserved.
      </div>
    </footer>
  );
}