import { useState } from "react";

function MessageInput({ onSend, onTyping }) {

  const [text, setText] = useState("");

  function send() {

    if (!text.trim()) return;

    onSend(text);

    setText("");
  }

  function handleKey(e) {

    if (e.key === "Enter") {
      send();
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
        onKeyDown={handleKey}
      />

      <button onClick={send}>
        Enviar
      </button>

    </div>

  );

}

export default MessageInput;