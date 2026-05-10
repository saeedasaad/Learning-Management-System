import React, { useEffect, useState } from "react";
import { getMessages } from "../../utils/api";
import avatar from "../../assets/user-avatar.png";
import DashboardCard from "../../components/layouts/DashboardCard";

export default function StudentInbox() {
  const [conversations, setConversations] = useState([]);
  const [activeChat, setActiveChat] = useState(null);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("user"));
    if (currentUser && currentUser._id) {
      getMessages(currentUser._id).then((data) => {
        setConversations(data);
      });
    }
  }, []);

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
                  onClick={() => setActiveChat(conv)}
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
          <div className="md:col-span-2 border rounded-lg shadow-sm p-6">
            {activeChat ? (
              <>
                <h3 className="font-bold text-xl mb-4">
                  Chat with {activeChat.senderName}
                </h3>
                <div className="space-y-4 max-h-[500px] overflow-y-auto">
                  {activeChat.messages.map((msg) => (
                    <div
                      key={msg._id}
                      className={`p-3 rounded-lg max-w-md ${
                        msg.isMine
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
