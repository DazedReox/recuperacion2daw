import React, { useState } from "react";

function MessageInput({ onSend, onTyping, onFile }) {

  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    
    if (!text.trim()) return;
    onSend(text);
    setText("");
  }

  function handleChange(e) {
    setText(e.target.value);
    onTyping();
  }

  function handleFile(e) {
    const file = e.target.files[0];
    if (file) {
      onFile(file);
    }
  }

  return (

    <div className="message-input">

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Escribe un mensaje..."
          value={text}
          onChange={handleChange}
        />

        <input
          type="file"
          onChange={handleFile}
        />

        <button type="submit">
          Enviar
        </button>

      </form>

    </div>

  );
}

export default MessageInput;