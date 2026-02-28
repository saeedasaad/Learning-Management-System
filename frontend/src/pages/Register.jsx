import React from "react";

export default function Register() {
  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 mt-[160px] mb-[160px]">
      <h1 className="text-2xl font-bold mb-4 text-center">Register Page</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700">Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-[#f49f35]"
          />
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-[#f49f35]"
          />
        </div>
        <div>
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
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