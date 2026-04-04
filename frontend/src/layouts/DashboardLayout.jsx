import React from "react";
import { Outlet } from "react-router-dom";
import ResponsiveSidebar from "../components/layouts/ResponsiveSidebar";
import DashboardNavbar from "../components/layouts/DashboardNavbar";

export default function DashboardLayout({ role }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <ResponsiveSidebar role={role} />

      {/* Main Content */}
      <main className="flex-1 bg-white ml-16 md:ml-56 transition-all duration-300">
        <DashboardNavbar role={role} />
        <Outlet />
      </main>
    </div>
  );
}