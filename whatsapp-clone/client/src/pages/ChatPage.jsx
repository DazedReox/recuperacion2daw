import React from "react";
import Chat from "../components/Chat";

function ChatPage({ user, setUser }) {
  return <Chat user={user} setUser={setUser} />;
  return (
    <div className="chat-page">
      <Chat user={user} />
    </div>
  );
}

export default ChatPage;