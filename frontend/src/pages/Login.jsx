import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/authSlice";
import { loginUser } from "../api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser({ email, password });
      const response = { user: res.data.user, token: res.data.token };

      localStorage.setItem("token", response.token);
      dispatch(loginSuccess(response));

      // Redirect based on role
      if (response.user.role === "student") navigate("/student/dashboard");
      else if (response.user.role === "instructor") navigate("/instructor/dashboard");
      else if (response.user.role === "admin") navigate("/admin/dashboard");
    } catch (err) {
      alert(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 mt-[200px] mb-[200px]">
      <h1 className="text-2xl font-bold mb-4 text-center">Login Page</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-700">Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-[#f49f35]" />
        </div>
        <div>
          <label className="block text-gray-700">Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-[#f49f35]" />
        </div>
        <button type="submit" className="w-full bg-[#f49f35] text-white py-2 rounded hover:bg-[#e08c20]">
          Login
        </button>
      </form>
    </div>
  );
}