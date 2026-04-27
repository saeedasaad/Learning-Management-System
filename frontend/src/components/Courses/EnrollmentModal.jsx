import React, { useState } from "react";
import { registerUser, enrollCourse } from "../../utils/apis.js";
import { useNavigate } from "react-router-dom";
import InputField from "../common/InputField";
import Button from "../common/Button";

export default function EnrollmentModal({ course, onClose }) {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  // Registration
  const handleRegister = async () => {
    try {
      const res = await registerUser(form);
      if (res.token) localStorage.setItem("token", res.token);
      if (res.user) localStorage.setItem("user", JSON.stringify(res.user));
      setStep(2);
    } catch (err) {
      alert(err.response?.data?.error || "Registration failed");
    }
  };

  // Enrollment
  const handleEnroll = async () => {
    try {
      const res = await enrollCourse(course.id);
      if (res.url) {
        window.location.href = res.url;
      } else {
        alert("No payment URL received");
      }
    } catch (err) {
      alert(err.response?.data?.error || "Enrollment failed");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center md:px-4">
      <div className="bg-white rounded-lg shadow-lg p-6 md:w-full w-[80%] mx-auto md:max-w-lg relative">
        
        {/* Close Icon */}
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-[#feaf0c] transition">
          <i className="ri-close-line text-2xl"></i>
        </button>

        {step === 1 && (
          <>
            <h2 className="text-xl font-bold mb-4">Register</h2>
            <InputField label="Name" placeholder="Enter your name" value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })} icon="ri-user-3-line"/>
            <InputField label="Email" type="email" placeholder="Enter your email" value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })} icon="ri-mail-line"/>
            <InputField label="Password" type="password" placeholder="Enter your password" value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })} icon="ri-lock-line"/>
            <Button variant="formFull" className="mt-4" onClick={handleRegister}> Continue</Button>
            </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-xl font-bold mb-4">Confirm Course</h2>
            <p className="mb-2">{course.title}</p>
            <p className="mb-2">Price: ${course.price}</p>
            <p className="mb-2">Duration: {course.duration}</p>
            <Button variant="primaryBlue" className="w-full mt-4" onClick={() => setStep(3)}>
              Proceed to Payment
            </Button>
          </>
        )}

        {step === 3 && (
          <>
            <h2 className="text-xl font-bold mb-4">Payment</h2>
            <p className="mb-8">You will be redirected to Stripe Checkout</p>
            <Button variant="formFull" className="hover:bg-transparent hover:text-green-600" onClick={handleEnroll} >
              Pay & Enroll
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
