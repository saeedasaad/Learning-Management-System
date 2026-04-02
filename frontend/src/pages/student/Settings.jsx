import React from "react";
import DashboardCard from "../../components/layout/DashboardCard";

export default function Settings() {
  return (
    <DashboardCard title="Settings">
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700">Change Password</label>
          <input
            type="password"
            placeholder="New Password"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-[#feaf0c]"
          />
        </div>
        <div>
          <label className="block text-gray-700">Notification Preferences</label>
          <select className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-[#feaf0c]">
            <option>Email</option>
            <option>SMS</option>
            <option>Push Notifications</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-[#134f93] text-white px-4 py-2 rounded hover:bg-[#feaf0c]"
        >
          Save Settings
        </button>
      </form>
    </DashboardCard>
  );
}