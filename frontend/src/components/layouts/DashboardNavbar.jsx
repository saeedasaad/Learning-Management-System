import React from "react";
import avatar from "../../assets/user-avatar.png";
import NotificationDropdown from "../layouts/NotificationDropdown"; 

export default function DashboardNavbar({ role }) {
  return (
    <div className="flex items-center justify-between py-4 px-6 bg-gray-100 border-b border-gray-300">
      {/* Dashboard Title */}
      <h2 className="text-md md:text-2xl font-bold uppercase tracking-wide text-[#134f93]">
        {role} Dashboard
      </h2>

      {/* Right Section: Notification + Avatar */}
      <div className="flex items-center gap-4">
        <NotificationDropdown />
      </div>
    </div>
  );
}
