import { useState } from "react";

function MessageInput({ onSend, onTyping, onFile }) {

  const [text, setText] = useState("");

  function send() {

    if (!text.trim()) return;

    onSend(text);
    setText("");
  }

  function handleFile(e) {

    const file = e.target.files[0];

    if (file) {
      onFile(file);
    }

  }

  return (

    <div className="message-input">

      <input
        type="text"
        placeholder="Escribe un mensaje..."
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          onTyping();
        }}
        onKeyDown={(e) => e.key === "Enter" && send()}
      />

      <input
        type="file"
        onChange={handleFile}
      />

      <button onClick={send}>
        Enviar
      </button>

    </div>

  );

}

export default MessageInput;