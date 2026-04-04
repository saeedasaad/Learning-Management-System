import React from "react";
import DashboardCard from "../../components/layouts/DashboardCard";

export default function Chat() {
  return (
    <DashboardCard title="Chat">
      <div className="h-64 bg-gray-50 border rounded p-4 overflow-y-auto">
        <p className="text-gray-600">Chat messages will appear here.</p>
      </div>
      <input
        type="text"
        placeholder="Type a message..."
        className="w-full mt-4 border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-[#feaf0c]"
      />
    </DashboardCard>
  );
}