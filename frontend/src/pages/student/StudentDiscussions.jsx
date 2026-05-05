import React, { useState } from "react";
import DashboardCard from "../../components/layouts/DashboardCard";
import "remixicon/fonts/remixicon.css";

export default function DiscussionsPage() {
  const [activeTab, setActiveTab] = useState("general");
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "Madiha",
      role: "student",
      text: "Assalam_O_Alaikum Sir, I wanted to ask how we are supposed to submit the hands-on exercise done in Jupyter Notebook?",
      time: "Apr 24, 2026 06:53 PM",
      reply: {
        sender: "Instructor",
        text: "Dear Madiha, please upload your Jupyter Notebook as a PDF in the exercises section. That way it will be reviewed properly.",
        time: "Apr 24, 2026 07:10 PM",
      },
      tab: "qa",
    },
    {
      id: 2,
      sender: "Ibtasam",
      role: "student",
      text: "Assalamualaikum dear instructor, I am facing issues in watching lectures due to electricity outages. Is there any way to download lectures?",
      time: "Apr 24, 2026 05:00 AM",
      reply: {
        sender: "Instructor",
        text: "Dear Ibtasam, downloading lectures is not permitted. Please watch them directly on LMS when electricity and internet are stable.",
        time: "Apr 24, 2026 09:37 AM",
      },
      tab: "general",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessage = {
      id: Date.now(),
      sender: "You",
      role: "student",
      text: input,
      time: new Date().toLocaleString(),
      tab: activeTab,
    };
    setMessages([newMessage, ...messages]);
    setInput("");
  };

  const filteredMessages = messages.filter((msg) => msg.tab === activeTab);

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

        {/* Search + Sort */}
        <div className="flex justify-between mb-8 shadow-md p-4">
          <input
            type="text"
            placeholder="Search discussions..."
            className="border rounded px-3 py-2 w-1/2"
          />
          <select className="border rounded px-3 py-2">
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>

        <hr className="w-full h-1 mb-6" />

        <div className="flex flex-col w-full items-start gap-2 mb-4 p-3 rounded bg-white">
          <textarea
            rows={4}
            cols={20}
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

        <div className="p-4 overflow-y-auto">
          {filteredMessages.length === 0 ? (
            <p className="text-gray-600">No messages yet in this tab.</p>
          ) : (
            filteredMessages.map((msg) => (
              <div key={msg.id} className="mb-4 p-4 bg-white shadow-xl">

                <div className="flex flex-col items-start p-4 gap-2 mb-4 bg-white rounded shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="bg-gray-300 rounded-full w-12 h-12 flex items-center justify-center">
                      <i className="ri-user-line text-xl text-gray-500"></i>
                    </div>

                    <div className="flex flex-col">
                      <span className="font-bold text-gray-800">
                        {msg.sender}
                      </span>
                      <span className="text-sm text-gray-500">{msg.time}</span>
                    </div>
                  </div>

                  <p className="text-gray-700 ml-14">{msg.text}</p>
                </div>

  
                {msg.reply && (
                  <div className="mt-4 bg-green-50 rounded shadow-md p-4 border-l-4 border-green-500">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-green-200 rounded-full w-12 h-12 flex items-center justify-center">
                        <i className="ri-user-voice-line text-xl text-green-700"></i>
                      </div>

                      <div className="flex flex-col">
                        <span className="font-bold text-green-700">
                          {msg.reply.sender}
                        </span>
                        <span className="text-sm text-gray-500">
                          {msg.reply.time}
                        </span>
                      </div>
                    </div>

                    {/* Reply Text */}
                    <p className="text-gray-700 ml-14">{msg.reply.text}</p>
                  </div>
                )}

                {/* Student Reply Option */}
                <div className="mt-3 flex items-center gap-2">
                  <i className="ri-reply-line text-gray-500"></i>
                  <button className="text-sm text-[#feaf0c] hover:underline">
                    Reply
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </DashboardCard>
    </div>
  );
}
