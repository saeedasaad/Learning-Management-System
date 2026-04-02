import React, { useState } from "react";
import { registerUser } from "../utils/api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await registerUser({ name, email, password });
      alert(res.message || "Registered successfully, please login");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.error || "Registration failed");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 mt-[160px] mb-[160px]">
      <h1 className="text-2xl font-bold mb-4 text-center">Register Page</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-700">Username</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your username"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-[#f49f35]"
          />
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-[#f49f35]"
          />
        </div>
        <div>
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-[#f49f35]"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#f49f35] text-white py-2 rounded hover:bg-[#e08c20]"
        >
          Register
        </button>
      </form>
    </div>
  );
}