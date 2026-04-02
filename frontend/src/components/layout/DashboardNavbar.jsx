import React from "react";
import avatar from "../../assets/user-avatar.png";

export default function DashboardNavbar({ role }) {
  return (
    <div className="flex items-center justify-between py-4 px-6 bg-gray-100 border-b border-gray-300">
      {/* Dashboard Title */}
      <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wide text-[#134f93]">
        {role} Dashboard
      </h2>

      {/* User Avatar */}
      <img
        src={avatar}
        alt="User Avatar"
        className="h-8 w-8 md:h-10 md:w-10 rounded-full border-2 border-blue-500"
      />
    </div>
  );
}