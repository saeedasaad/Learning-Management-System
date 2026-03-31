import React from "react";
import { Link } from "react-router-dom";

export default function DashboardLayout({ children, role }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-[#f49f35] text-white p-6">
        <h2 className="text-xl font-bold mb-6 capitalize">{role} Dashboard</h2>
        <nav className="space-y-4">
          {role === "student" && (
            <>
              <Link to="/student/dashboard" className="block hover:text-black">Overview</Link>
              <Link to="/student/my-courses" className="block hover:text-black">My Courses</Link>
              <Link to="/student/chat" className="block hover:text-black">Chat</Link>
              <Link to="/student/profile" className="block hover:text-black">Profile</Link>
              <Link to="/student/settings" className="block hover:text-black">Settings</Link>
            </>
          )}
          {role === "instructor" && (
            <>
              <Link to="/instructor/dashboard" className="block hover:text-black">Dashboard</Link>
              <Link to="/instructor/create-course" className="block hover:text-black">Create Course</Link>
              <Link to="/instructor/manage-courses" className="block hover:text-black">Manage Courses</Link>
              <Link to="/instructor/revenue" className="block hover:text-black">Revenue</Link>
              <Link to="/instructor/profile" className="block hover:text-black">Profile</Link>
            </>
          )}
          {role === "admin" && (
            <>
              <Link to="/admin/dashboard" className="block hover:text-black">Dashboard</Link>
              <Link to="/admin/manage-users" className="block hover:text-black">Manage Users</Link>
              <Link to="/admin/manage-courses" className="block hover:text-black">Manage Courses</Link>
              <Link to="/admin/analytics" className="block hover:text-black">Analytics</Link>
              <Link to="/admin/revenue-analytics" className="block hover:text-black">Revenue</Link>
            </>
          )}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6">{children}</main>
    </div>
  );
}