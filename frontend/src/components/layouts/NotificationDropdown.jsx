import React, { useState, useEffect } from "react";
import "remixicon/fonts/remixicon.css";
import { getNotifications, markNotificationAsRead } from "../../utils/api";

export default function NotificationDropdown() {
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("user"));
    if (currentUser) {
      getNotifications(currentUser._id).then((data) => {
        setNotifications(data);
      });
    }
  }, []);

  const handleMarkAsRead = async (id) => {
    await markNotificationAsRead(id);
    setNotifications((prev) =>
      prev.map((note) =>
        note._id === id ? { ...note, isRead: true } : note
      )
    );
  };

  return (
    <div className="relative">
      {/* Notification Button */}
      <button onClick={() => setOpen(!open)} className="relative">
        <i className="ri-notification-3-line text-2xl text-gray-700 hover:text-[#02428c]"></i>
        {/* Badge */}
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
            <i className="ri-notification-2-line text-[#02428c]"></i>
          </div>
          <div className="max-h-60 overflow-y-auto">
            {notifications.map((note) => (
              <div
                key={note._id}
                className={`px-4 py-2 hover:bg-gray-50 ${
                  note.isRead ? "opacity-60" : ""
                }`}
                onClick={() => handleMarkAsRead(note._id)}
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
  );
}
