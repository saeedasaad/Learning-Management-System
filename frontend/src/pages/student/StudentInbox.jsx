import React, { useEffect, useState } from "react";
import { getMessages, sendMessage, markMessageAsSeen } from "../../utils/api";
import avatar from "../../assets/user-avatar.png";
import DashboardCard from "../../components/layouts/DashboardCard";
import { useLocation } from "react-router-dom";


export default function StudentInbox() {
  const [conversations, setConversations] = useState([]);
  const [activeChat, setActiveChat] = useState(null);
  const [input, setInput] = useState("");
  const { state } = useLocation();

useEffect(() => {
  if (state?.senderId) {
    getMessages(state.senderId).then((data) => {
      setConversations(data);
      setActiveChat(data[0]); 
    });
  }
}, [state]);

  const handleSend = async () => {
    if (!input.trim() || !activeChat) return;
    const newMsg = await sendMessage(activeChat.senderId, input);

    // Update active chat messages
    setActiveChat((prev) => ({
      ...prev,
      messages: [...prev.messages, newMsg.newMessage],
    }));

    setInput("");
  };

  const handleChatSelect = async (conv) => {
    setActiveChat(conv);
    // Mark all messages as seen
    conv.messages.forEach((msg) => {
      if (!msg.isSeen) markMessageAsSeen(msg._id);
    });
  };

  return (
    <div className="md:m-10 m-5">
      <DashboardCard title="Inbox">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left column: conversation list */}
          <div className="border rounded-lg shadow-sm overflow-y-auto">
            <h2 className="p-4 font-bold text-lg border-b">Conversations</h2>
            {conversations.length === 0 ? (
              <p className="p-4 text-gray-500">No conversations yet.</p>
            ) : (
              conversations.map((conv) => (
                <div
                  key={conv._id}
                  onClick={() => handleChatSelect(conv)}
                  className={`flex items-center gap-3 p-4 cursor-pointer hover:bg-gray-100 border-b ${
                    activeChat?._id === conv._id ? "bg-gray-200" : ""
                  }`}
                >
                  <img
                    src={avatar}
                    alt="avatar"
                    className="w-12 h-12 rounded-full border"
                  />
                  <div>
                    <p className="font-semibold">{conv.senderName}</p>
                    <p className="text-sm text-gray-600 truncate">
                      {conv.lastMessage}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Right column: chat thread */}
          <div className="md:col-span-2 border rounded-lg shadow-sm p-6 flex flex-col">
            {activeChat ? (
              <>
                <h3 className="font-bold text-xl mb-4">
                  Chat with {activeChat.senderName}
                </h3>
                <div className="space-y-4 max-h-[400px] overflow-y-auto flex-1">
                  {activeChat.messages.map((msg) => (
                    <div
                      key={msg._id}
                      className={`p-3 rounded-lg max-w-md ${
                        msg.senderId ===
                        JSON.parse(localStorage.getItem("user"))._id
                          ? "bg-blue-100 self-end ml-auto text-right"
                          : "bg-gray-100"
                      }`}
                    >
                      <p>{msg.message}</p>
                      <span className="text-xs text-gray-500 block">
                        {new Date(msg.createdAt).toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Input box */}
                <div className="mt-4 flex gap-2">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-[#feaf0c]"
                  />
                  <button
                    onClick={handleSend}
                    className="px-4 py-2 bg-[#feaf0c] text-white rounded hover:bg-[#e09a0a]"
                  >
                    Send
                  </button>
                </div>
              </>
            ) : (
              <p className="text-gray-500">
                Select a conversation to view messages.
              </p>
            )}
          </div>
        </div>
      </DashboardCard>
    </div>
  );
}
