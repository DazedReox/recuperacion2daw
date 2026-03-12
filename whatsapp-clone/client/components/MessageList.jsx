function MessageList({ messages }) {

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
          <div key={index} className="message">

            <img
              src={msg.avatar}
              alt="avatar"
              className="avatar"
            />

            <div className="message-content">
              <strong>{msg.user}</strong>
              <p>{msg.text}</p>
            </div>

          </div>
        );

      })}

    </div>
  );

}

export default MessageList;