import { useNavigate } from "react-router-dom";
import { getNotifications, markNotificationAsRead } from "../../utils/api";
import { useState, useEffect } from "react";

export default function NotificationDropdown() {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState([]);
  const [open, setOpen] = useState(false);

  // Fetch notifications
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("user"));
    if (currentUser && currentUser._id) {
      getNotifications(currentUser._id).then(setNotifications);
    }
  }, []);

  const handleNotificationClick = async (note) => {
    await markNotificationAsRead(note._id);

    setNotifications((prev) => prev.filter((n) => n._id !== note._id));

    if (note.type === "chat") {
      navigate("/student/inbox", { state: { senderId: note.userId } });
    } else if (note.role === "instructor") {
      navigate("/instructor/inbox");
    } else {
      navigate("/admin/dashboard");
    }
  };

  return (
    <div className="relative">
      {/* Notification Icon */}
      <button onClick={() => setOpen(!open)} className="relative">
        <i className="ri-notification-3-line text-2xl text-gray-700 hover:text-[#02428c]"></i>
        {notifications.filter((n) => !n.isRead).length > 0 && (
          <span className="absolute -top-1 -right-1 bg-[#02428c] text-white text-xs rounded-full px-1">
            {notifications.filter((n) => !n.isRead).length}
          </span>
        )}
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-80 max-h-96 bg-white rounded shadow-xl z-50 overflow-y-auto">
          <div className="flex items-center justify-between px-4 py-2 border-b">
            <h4 className="font-semibold">Notifications</h4>
          </div>
          {notifications.length === 0 ? (
            <p className="p-4 text-gray-500">No notifications</p>
          ) : (
            notifications.map((note) => (
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
            ))
          )}
        </div>
      )}
    </div>
  );
}
