import React, { useState } from "react";
import DashboardCard from "../../components/layouts/DashboardCard";

export default function InstructorChat() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "student",
      text: "Sir, when is the next lecture?",
      reply: "Tomorrow at 10 AM.",
    },
    {
      id: 2,
      sender: "student",
      text: "Can you explain question 3?",
      reply: "",
    },
  ]);

  const [replyText, setReplyText] = useState("");
  const [selectedMessage, setSelectedMessage] = useState(null);

  const handleReply = () => {
    if (!replyText.trim() || !selectedMessage) return;
    setMessages(
      messages.map((msg) =>
        msg.id === selectedMessage.id ? { ...msg, reply: replyText } : msg,
      ),
    );
    setReplyText("");
    setSelectedMessage(null);
  };

  return (
    <div className="md:m-10 m-5">
      <DashboardCard title="Instructor Chat">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left: Student Messages */}
          <div className="bg-gray-50 border rounded p-4 h-80 overflow-y-auto">
            <h3 className="text-lg font-semibold mb-3">Student Messages</h3>
            {messages.map((msg) => (
              <div
                key={msg.id}
                className="border-b py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => setSelectedMessage(msg)}
              >
                <p className="text-gray-800 font-medium">{msg.text}</p>
                {msg.reply && (
                  <p className="text-green-600 text-sm mt-1">
                    Reply: {msg.reply}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Right: Reply Box */}
          <div className="bg-white border rounded p-4">
            <h3 className="text-lg font-semibold mb-3">Reply to Student</h3>
            {selectedMessage ? (
              <>
                <p className="text-gray-700 mb-2">
                  <span className="font-bold">Question:</span>{" "}
                  {selectedMessage.text}
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
