import React, { useState } from "react";
import { registerUser, enrollCourse } from "../../utils/apis.js";
import { useNavigate } from "react-router-dom";

export default function EnrollmentModal({ course, onClose }) {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  //  Registration
  const handleRegister = async () => {
    try {
      const res = await registerUser(form);

      if (res.token) {
        localStorage.setItem("token", res.token);
      }
      if (res.user) {
        localStorage.setItem("user", JSON.stringify(res.user));
      }

      console.log("Register response:", res);
      setStep(2);
    } catch (err) {
      alert(err.response?.data?.error || "Registration failed");
    }
  };

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
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-lg">
        
        {step === 1 && (
          <>
            <h2 className="text-xl font-bold mb-4">Register</h2>
            <input
              type="text"
              placeholder="Name"
              className="border w-full mb-2 p-2"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email"
              className="border w-full mb-2 p-2"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <input
              type="password"
              placeholder="Password"
              className="border w-full mb-2 p-2"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            <button
              onClick={handleRegister}
              className="bg-[#f49f35] text-white px-4 py-2 rounded w-full"
            >
              Continue
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-xl font-bold mb-4">Confirm Course</h2>
            <p>{course.title}</p>
            <p>Price: ${course.price}</p>
            <p>Duration: {course.duration}</p>
            <button
              onClick={() => setStep(3)}
              className="bg-[#02448d] text-white px-4 py-2 rounded w-full mt-4"
            >
              Proceed to Payment
            </button>
          </>
        )}

        {step === 3 && (
          <>
            <h2 className="text-xl font-bold mb-4">Payment</h2>
            <p>You will be redirected to Stripe Checkout</p>
            <button
              onClick={handleEnroll}
              className="bg-green-600 text-white px-4 py-2 rounded w-full mt-4"
            >
              Pay & Enroll
            </button>
          </>
        )}

        <button
          onClick={onClose}
          className="mt-4 text-gray-500 hover:text-gray-700"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
