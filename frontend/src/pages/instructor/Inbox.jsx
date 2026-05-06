import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import DashboardCard from "../../components/layouts/DashboardCard";
import api from "../../utils/api";

export default function Inbox() {
  const { studentId } = useParams();
  const { state } = useLocation();
  const student = state?.student;
  const [message, setMessage] = useState("");

  const sendMessage = async () => {
    try {
      await api.post(`/instructor/messages/${studentId}`, { message });
      alert("Message sent successfully!");
      setMessage("");
    } catch (err) {
      console.error("Error sending message:", err);
      alert("Failed to send message");
    }
  };

  return (
    <div className="md:m-10 m-5">
      <DashboardCard title={`Inbox - Message to ${student?.name}`}>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write your message..."
          className="w-full border p-3 rounded mb-4"
          rows={5}
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Send
        </button>
      </DashboardCard>
    </div>
  );
}
