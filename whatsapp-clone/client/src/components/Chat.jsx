import React from "react";
import { useEffect, useState } from "react";
import socket from "../services/socket";

import UserList from "./UserList";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

import { signOut } from "firebase/auth";
import { auth } from "../services/firebase";


function Chat({ user }) {

  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [typing, setTyping] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  async function logout() {

    try {
      await signOut(auth);
      socket.disconnect();
      setUser(null);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {

  socket.emit("login", user);

  const handleUsers = (users) => {
    setUsers(users);
  };

  const handleMessage = (msg) => {
    setMessages((prev) => [...prev, msg]);
  };

  const handlePrivate = (msg) => {
    setMessages((prev) => [...prev, msg]);
  };

  const handleSystem = (msg) => {
    setMessages((prev) => [...prev, { system: true, text: msg }]);
  };

  const handleTyping = (name) => {
    setTyping(`${name} está escribiendo...`);
    setTimeout(() => setTyping(""), 1000);
  };

  socket.on("users", handleUsers);
  socket.on("message", handleMessage);
  socket.on("private_message", handlePrivate);
  socket.on("system", handleSystem);
  socket.on("typing", handleTyping);

  return () => {
    socket.off("users", handleUsers);
    socket.off("message", handleMessage);
    socket.off("private_message", handlePrivate);
    socket.off("system", handleSystem);
    socket.off("typing", handleTyping);
  };

}, []);

  function handleTyping() {
    socket.emit("typing", user.name);
  }

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
    
    const res = await fetch("https://clonwasapweb.onrender.com/upload", {
      method: "POST",
      body: formData
    });

    if (!res.ok) {
      console.error("Error subiendo archivo");
      return;
    }

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
        <button onClick={logout} className="logout-button">
          Cerrar sesión
        </button>
        {selectedUser ? (
          <div className="private-header">
            Chat privado con {selectedUser.name}
            <button className="back-button" onClick={() => setSelectedUser(null)}>
              Volver al chat general
            </button>
          </div>
        ) : (
          <div className="private-header">
            Chat general
          </div>
        )}

        <MessageList messages={messages} currentUser={user.name} />
        

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