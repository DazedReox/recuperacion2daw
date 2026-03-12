import { useEffect, useState } from "react";

import UserList from "./UserList";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";


function Chat({ user }) {

  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [typing, setTyping] = useState("");

  useEffect(() => {

    socket.emit("login", user);

    socket.on("users", (users) => {
      setUsers(users);
    });

    socket.on("message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    socket.on("system", (msg) => {
      setMessages((prev) => [...prev, { system: true, text: msg }]);
    });

    socket.on("typing", (name) => {
      setTyping(`${name} está escribiendo...`);

      setTimeout(() => setTyping(""), 1000);
    });

  }, []);

  function sendMessage(text) {

    const msg = {
      user: user.name,
      avatar: user.avatar,
      text: text
    };

    socket.emit("message", msg);
  }

  function handleTyping() {
    socket.emit("typing", user.name);
  }

  return (

    <div className="chat-container">

      <UserList users={users} />

      <div className="chat-main">

        <MessageList messages={messages} />

        <div className="typing">{typing}</div>

        <MessageInput
          onSend={sendMessage}
          onTyping={handleTyping}
        />

      </div>

    </div>
  );
}

export default Chat;