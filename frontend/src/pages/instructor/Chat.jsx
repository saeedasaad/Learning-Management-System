import React, { useEffect, useState } from "react";
import DashboardCard from "../../components/layouts/DashboardCard";
import { getMessages, sendMessage, markMessageAsSeen } from "../../utils/api";
import avatar from "../../assets/user-avatar.png";

export default function InstructorChat() {
  const [messages, setMessages] = useState([]);
  const [replyText, setReplyText] = useState("");
  const [selectedMessage, setSelectedMessage] = useState(null);

  // Fetch messages between instructor and students
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("user"));
    if (currentUser && currentUser._id) {
      getMessages(currentUser._id).then(setMessages);
    }
  }, []);

  const handleReply = async () => {
    if (!replyText.trim() || !selectedMessage) return;

    const newMsg = await sendMessage(selectedMessage.senderId, replyText);

    // Update messages list
    setMessages((prev) =>
      prev.map((msg) =>
        msg._id === selectedMessage._id
          ? { ...msg, reply: replyText, isSeen: true }
          : msg
      )
    );

    setReplyText("");
    setSelectedMessage(null);
  };

  const handleSelectMessage = async (msg) => {
    setSelectedMessage(msg);
    if (!msg.isSeen) {
      await markMessageAsSeen(msg._id);
      setMessages((prev) =>
        prev.map((m) => (m._id === msg._id ? { ...m, isSeen: true } : m))
      );
    }
  };

  return (
    <div className="md:m-10 m-5">
      <DashboardCard title="Instructor Chat">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left: Student Messages */}
          <div className="bg-gray-50 border rounded p-4 h-80 overflow-y-auto">
            <h3 className="text-lg font-semibold mb-3">Student Messages</h3>
            {messages.length === 0 ? (
              <p className="text-gray-500">No messages yet.</p>
            ) : (
              messages.map((msg) => (
                <div
                  key={msg._id}
                  className="border-b py-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSelectMessage(msg)}
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={avatar}
                      alt="avatar"
                      className="w-8 h-8 rounded-full border"
                    />
                    <p className="text-gray-800 font-medium">{msg.message}</p>
                  </div>
                  {msg.reply && (
                    <p className="text-green-600 text-sm mt-1">
                      Reply: {msg.reply}
                    </p>
                  )}
                  {msg.isSeen && (
                    <span className="text-xs text-gray-500">✓ Seen</span>
                  )}
                </div>
              ))
            )}
          </div>

          {/* Right: Reply Box */}
          <div className="bg-white border rounded p-4">
            <h3 className="text-lg font-semibold mb-3">Reply to Student</h3>
            {selectedMessage ? (
              <>
                <p className="text-gray-700 mb-2">
                  <span className="font-bold">Question:</span>{" "}
                  {selectedMessage.message}
                </p>
                <textarea
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="Type your reply..."
                  className="w-full border rounded p-2 h-24"
                />
                <button
                  onClick={handleReply}
                  className="mt-3 px-6 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                >
                  Send Reply
                </button>
              </>
            ) : (
              <p className="text-gray-500">
                Select a student message to reply.
              </p>
            )}
          </div>
        </div>
      </DashboardCard>
    </div>
  );
}
