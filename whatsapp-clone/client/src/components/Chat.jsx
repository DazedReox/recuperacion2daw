import { useEffect, useState } from "react";

import UserList from "./UserList";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";


function Chat({ user }) {

  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [typing, setTyping] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {

    socket.emit("login", user);

    socket.on("users", (users) => {
      setUsers(users);
    });
   
    socket.on("private_message", (msg) => {

      setMessages(prev => [...prev, msg]);

    });
    
    {selectedUser && (
      <div className="private-header">
      Chat privado con {selectedUser.name}
      </div>
    )}

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

  if (selectedUser) {

    socket.emit("private_message", {
      to: selectedUser.id,
      message: text
    });

  } else {

    const msg = {
      user: user.name,
      avatar: user.avatar,
      text
    };

    socket.emit("message", msg);

  }

}
async function sendFile(file) {

  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch("http://localhost:3000/upload", {
    method: "POST",
    body: formData
  });

  const data = await res.json();

  socket.emit("message", {
    user: user.name,
    avatar: user.avatar,
    file: data.file,
    name: data.original
  });

}

  return (

    <div className="chat-container">
      <UserList
        users={users}
        onSelectUser={setSelectedUser}
      />

      <div className="chat-main">

        <MessageList messages={messages} />

        <div className="typing">{typing}</div>

        <MessageInput
          onSend={sendMessage}
          onTyping={handleTyping}
          onFile={sendFile}
        />

      </div>

    </div>
  );
}

export default Chat;