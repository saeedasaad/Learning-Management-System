import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  RiHome2Line,
  RiBook2Line,
  RiChat3Line,
  RiUser3Line,
  RiSettings3Line,
  RiLogoutBoxLine,
} from "react-icons/ri";
import logoIcon from "../../assets/Logo-icon.png";
import logoText from "../../assets/Logo.png";

import avatar from "../../assets/user-avatar.png";

export default function ResponsiveSidebar({ role }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const navLinks = {
    student: [
      { path: "/student/dashboard", label: "Overview", icon: <RiHome2Line /> },
      {
        path: "/student/my-courses",
        label: "My Courses",
        icon: <RiBook2Line />,
      },
      { path: "/student/chat", label: "Chat", icon: <RiChat3Line /> },
      { path: "/student/profile", label: "Profile", icon: <RiUser3Line /> },
      {
        path: "/student/settings",
        label: "Settings",
        icon: <RiSettings3Line />,
      },
    ],
    instructor: [
      {
        path: "/instructor/dashboard",
        label: "Dashboard",
        icon: <RiHome2Line />,
      },
      {
        path: "/instructor/create-course",
        label: "Create Course",
        icon: <RiBook2Line />,
      },
      {
        path: "/instructor/manage-courses",
        label: "Manage Courses",
        icon: <RiChat3Line />,
      },
      { path: "/instructor/revenue", label: "Revenue", icon: <RiUser3Line /> },
      {
        path: "/instructor/profile",
        label: "Profile",
        icon: <RiSettings3Line />,
      },
    ],
    admin: [
      { path: "/admin/dashboard", label: "Dashboard", icon: <RiHome2Line /> },
      {
        path: "/admin/manage-users",
        label: "Manage Users",
        icon: <RiBook2Line />,
      },
      {
        path: "/admin/manage-courses",
        label: "Manage Courses",
        icon: <RiChat3Line />,
      },
      {
        path: "/admin/approve-courses",
        label: "Approve Courses",
        icon: <RiUser3Line />,
      },
      {
        path: "/admin/analytics",
        label: "Analytics",
        icon: <RiSettings3Line />,
      },
      {
        path: "/admin/revenue-analytics",
        label: "Revenue",
        icon: <RiSettings3Line />,
      },
    ],
  };

  return (
    <aside className="fixed top-0 left-0 h-screen bg-gray-100 border-r border-gray-300 flex flex-col justify-between py-4 w-16 md:w-56 transition-all duration-300 md:px-3 ">
  
  {/* Top Section: Logo + Navigation */}
  <div>
    {/* Logo */}
    <Link to="/" className="mb-6 flex items-center space-x-2">
      {/* Mobile Logo (icon only) */}
      <img
        src={logoIcon}
        alt="EduMaster Icon Logo"
        className="h-8 w-8 md:hidden ml-4"
      />

      {/* Desktop Logo (icon + text) */}
      <img
        src={logoText}
        alt="EduMaster Full Logo"
        className="hidden md:block h-12 w-auto"
      />
    </Link>

    {/* Navigation */}
    <nav className="flex flex-col space-y-4 md:space-y-5 w-full items-center md:items-start px-1 mt-2">
      {navLinks[role]?.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`flex items-center space-x-2 rounded-md transition-colors duration-200 w-full px-3 py-2
            ${
              location.pathname === item.path
                ? "bg-blue-100 text-blue-700 font-semibold"
                : "text-gray-600 hover:bg-blue-50 hover:text-blue-700"
            }`}
        >
          <div className="text-xl">{item.icon}</div>
          <span className="hidden md:inline">{item.label}</span>
        </Link>
      ))}
    </nav>
  </div>

  {/* Bottom Section: Logout */}
  <div className="w-full md:px-3">
    <button
      onClick={handleLogout}
      className="flex items-center space-x-2 text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-md px-3 py-2 transition-colors duration-200 w-full justify-center md:justify-start"
    >
      <RiLogoutBoxLine className="text-2xl" />
      <span className="hidden md:inline font-medium">Logout</span>
    </button>
  </div>
</aside>
  );
}
