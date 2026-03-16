import React from "react";

function MessageList({ messages, currentUser }) {

  return (

    <div className="messages">
      {messages.map((msg, index) => {

        if (msg.system) {
          return (
            <div key={index} className="system-message">
              {msg.text}
            </div>
          );
        }

        return (

          <div key={index} className={`message ${msg.user === currentUser ? "own" : ""}`}>
            <img src={msg.avatar} className="avatar" />
            <div>
              <strong>{msg.user}</strong>
              {msg.text && <p>{msg.text}</p>}
              <br/>
              {msg.file && (
                msg.file.match(/\.(jpg|jpeg|png|gif)$/i) ? (
                  <img src={`https://clonwasapweb.onrender.com/upload/${msg.file}`} className="chat-image" />
                ) : (
                  <a href={`https://clonwasapweb.onrender.com/upload/${msg.file}`} download>
                    Descargar {msg.name}
                  </a>
                ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MessageList;