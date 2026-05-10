import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import DashboardCard from "../../components/layouts/DashboardCard";
import { getMessages, sendMessage, markMessageAsSeen } from "../../utils/api";
import avatar from "../../assets/user-avatar.png";

export default function Inbox() {
  const { studentId } = useParams();
  const { state } = useLocation();
  const student = state?.student;
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // Fetch messages between instructor and student
  useEffect(() => {
    if (studentId) {
      getMessages(studentId).then(setMessages);
    }
  }, [studentId]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const newMsg = await sendMessage(studentId, input);

    setMessages((prev) => [...prev, newMsg.newMessage]);
    setInput("");
  };

  const handleSeen = async (msgId) => {
    await markMessageAsSeen(msgId);
    setMessages((prev) =>
      prev.map((m) => (m._id === msgId ? { ...m, isSeen: true } : m))
    );
  };

  return (
    <div className="md:m-10 m-5">
      <DashboardCard title={`Inbox - Message with ${student?.name || "Student"}`}>
        <div className="flex flex-col h-[600px]">
          {/* Chat thread */}
          <div className="flex-1 space-y-4 overflow-y-auto border rounded-lg p-4">
            {messages.length === 0 ? (
              <p className="text-gray-500">No messages yet.</p>
            ) : (
              messages.map((msg) => (
                <div
                  key={msg._id}
                  className={`p-3 rounded-lg max-w-md ${
                    msg.senderId === JSON.parse(localStorage.getItem("user"))._id
                      ? "bg-blue-100 self-end ml-auto text-right"
                      : "bg-gray-100"
                  }`}
                  onClick={() => handleSeen(msg._id)}
                >
                  <p>{msg.message}</p>
                  <span className="text-xs text-gray-500 block">
                    {new Date(msg.createdAt).toLocaleString()}
                    {msg.isSeen && " ✓ Seen"}
                  </span>
                </div>
              ))
            )}
          </div>

          {/* Input box */}
          <div className="mt-4 flex gap-2">
            <input
              type="text"
              placeholder="Write a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-[#feaf0c]"
            />
            <button
              onClick={handleSend}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Send
            </button>
          </div>
        </div>
      </DashboardCard>
    </div>
  );
}
