import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getNotifications, markNotificationAsRead } from "../../utils/api";
// import avatar from "../../assets/user-avatar.png";
import NotificationDropdown from "../layouts/NotificationDropdown"; 

export default function DashboardNavbar({ role }) {
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("user"));
    if (currentUser && currentUser._id) {
      getNotifications(currentUser._id).then(setNotifications);
    }
  }, []);

  const handleNotificationClick = async (note) => {
    await markNotificationAsRead(note._id);
    setNotifications((prev) => prev.filter((n) => n._id !== note._id));

    // Navigate to inbox depending on role
    if (note.role === "student") navigate("/student/inbox");
    else if (note.role === "instructor") navigate("/instructor/inbox");
    else navigate("/admin/inbox");
  };

  return (
    <div className="flex items-center justify-between py-4 px-6 bg-gray-100 border-b border-gray-300">
      {/* Dashboard Title */}
      <h2 className="text-md md:text-2xl font-bold uppercase tracking-wide text-[#134f93]">
        {role} Dashboard
      </h2>


    <div className="relative">
      {/* Notification Button */}
      <button onClick={() => setOpen(!open)} className="relative">
        <i className="ri-notification-3-line text-2xl text-gray-700 hover:text-[#02428c]"></i>
        {notifications.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-[#02428c] text-white text-xs rounded-full px-1">
            {notifications.filter((n) => !n.isRead).length}
          </span>
        )}
      </button>

      {/* Dropdown Panel */}
      {open && (
        <div className="absolute right-0 mt-2 w-86 h-[400px] bg-white rounded shadow-xl z-50">
          <div className="flex items-center justify-between px-4 py-2 border-b">
            <h4 className="font-semibold">
              Notifications ({notifications.length})
            </h4>
          </div>
          <div className="max-h-60 overflow-y-auto">
            {notifications.map((note) => (
              <div
                key={note._id}
                onClick={() => handleNotificationClick(note)}
                className="px-4 py-2 hover:bg-gray-50 cursor-pointer"
              >
                <p className="text-sm text-gray-800">{note.message}</p>
                <span className="text-xs text-gray-500">
                  {new Date(note.createdAt).toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
    </div>
  );
}
