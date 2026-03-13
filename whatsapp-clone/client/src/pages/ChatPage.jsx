import React from "react";
import Chat from "../components/Chat";

function ChatPage({ user }) {

  return (
    <div className="chat-page">
      <Chat user={user} />
    </div>
  );
}

export default ChatPage;