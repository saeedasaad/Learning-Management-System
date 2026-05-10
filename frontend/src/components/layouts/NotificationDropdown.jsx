import { useNavigate } from "react-router-dom";
import { markNotificationAsRead } from "../../utils/api";
import { useState } from "react";

export default function NotificationDropdown() {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState([]);

  const handleNotificationClick = async (note) => {
    await markNotificationAsRead(note._id);

    setNotifications((prev) => prev.filter((n) => n._id !== note._id));


    if (note.role === "student") {
      navigate("/student/inbox");
    } else if (note.role === "instructor") {
      navigate("/instructor/inbox");
    } else {
      navigate("/admin/inbox");
    }
  };

  return (
    <div>
      {notifications.map((note) => (
        <div
          key={note._id}
          onClick={() => handleNotificationClick(note)}
          className="cursor-pointer px-4 py-2 hover:bg-gray-50"
        >
          <p>{note.message}</p>
          <span>{new Date(note.createdAt).toLocaleString()}</span>
        </div>
      ))}
    </div>
  );
}
