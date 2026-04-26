import React, { useState } from "react";
import "remixicon/fonts/remixicon.css";

export default function NotificationDropdown() {
  const [open, setOpen] = useState(false);

  // Mock notifications
  const notifications = [
    {
      id: 1,
      message: "Good news! Your information was verified.",
      time: "1 week ago",
    },
    {
      id: 2,
      message:
        "Thanks for filling out Form W-9. You completed the check and you are now compliant.",
      time: "1 week ago",
    },
  ];

  return (
    <div className="relative">
      {/* Notification Button */}
      <button onClick={() => setOpen(!open)} className="relative">
        <i className="ri-notification-3-line text-2xl text-gray-700 hover:text-[#02428c]"></i>
        {/* Badge */}
        <span className="absolute -top-1 -right-1 bg-[#02428c] text-white text-xs rounded-full px-1">
          {notifications.length}
        </span>
      </button>

      {/* Dropdown Panel */}
      {open && (
        <div className="absolute right-0 mt-2 w-86 h-[400px] bg-white rounded shadow-xl z-50">
          <div className="flex items-center justify-between px-4 py-2 border-b">
            <h4 className="font-semibold">Notifications ({notifications.length})</h4>
            <i className="ri-notification-2-line text-[#02428c]"></i>
          </div>
          <div className="max-h-60 overflow-y-auto">
            {notifications.map((note) => (
              <div key={note.id} className="px-4 py-2 hover:bg-gray-50">
                <p className="text-sm text-gray-800">{note.message}</p>
                <span className="text-xs text-gray-500">{note.time}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
