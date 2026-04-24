import React, { useState } from "react";
import DashboardCard from "../../components/layouts/DashboardCard";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { text: input, sender: "student" }]);
    setInput("");
  };

  return (
    <DashboardCard title="Chat">
      <div className="h-64 bg-gray-50 border rounded p-4 overflow-y-auto">
        {messages.length === 0 ? (
          <p className="text-gray-600">Chat messages will appear here.</p>
        ) : (
          messages.map((msg, i) => (
            <p key={i} className="text-gray-800 mb-2">
              {msg.text}
            </p>
          ))
        )}
      </div>

      <div className="flex mt-4">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-[#feaf0c]"
        />
        <button
          onClick={handleSend}
          className="ml-2 px-4 py-2 bg-[#feaf0c] text-white rounded"
        >
          Send
        </button>
      </div>
    </DashboardCard>
  );
}
