import React, { useState, useEffect } from "react";
import DashboardCard from "../../components/layouts/DashboardCard";
import { getCourseMessages, sendCourseMessage } from "../../utils/api";
import "remixicon/fonts/remixicon.css";

export default function StudentDiscussions({ courseId }) {
  const [activeTab, setActiveTab] = useState("general");
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // Fetch course messages 
  useEffect(() => {
    if (courseId) {
      getCourseMessages(courseId).then(setMessages);
    }
  }, [courseId]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMsg = await sendCourseMessage(courseId, input);

    // Update messages list
    setMessages((prev) => [...prev, newMsg]);
    setInput("");
  };

  const filteredMessages = messages.filter((msg) => msg.tab === activeTab || !msg.tab);

  return (
    <div className="md:m-10 m-5">
      <DashboardCard title="Discussions">
        {/* Tabs */}
        <div className="flex mb-8">
          {["general", "qa", "group"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-medium ${
                activeTab === tab
                  ? "border-b-2 border-[#feaf0c] text-[#feaf0c]"
                  : "text-gray-600 hover:text-[#feaf0c]"
              }`}
            >
              {tab === "general" && "General"}
              {tab === "qa" && "Q&A"}
              {tab === "group" && "Group Chat"}
            </button>
          ))}
        </div>

        {/* Input box */}
        <div className="flex flex-col w-full items-start gap-2 mb-4 p-3 rounded bg-white">
          <textarea
            rows={4}
            placeholder={`Type a message in ${activeTab}...`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-[#feaf0c] resize-none"
          />
          <button
            onClick={handleSend}
            className="px-4 py-2 bg-[#feaf0c] text-white rounded hover:bg-[#e09a0a]"
          >
            Post
          </button>
        </div>

        {/* Messages */}
        <div className="p-4 overflow-y-auto">
          {filteredMessages.length === 0 ? (
            <p className="text-gray-600">No messages yet in this tab.</p>
          ) : (
            filteredMessages.map((msg) => (
              <div key={msg._id} className="mb-4 p-4 bg-white shadow-xl">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-gray-300 rounded-full w-12 h-12 flex items-center justify-center">
                    <i className="ri-user-line text-xl text-gray-500"></i>
                  </div>
                  <div>
                    <span className="font-bold text-gray-800">{msg.senderName}</span>
                    <span className="text-sm text-gray-500">
                      {new Date(msg.createdAt).toLocaleString()}
                    </span>
                  </div>
                </div>
                <p className="text-gray-700 ml-14">{msg.message}</p>
              </div>
            ))
          )}
        </div>
      </DashboardCard>
    </div>
  );
}
