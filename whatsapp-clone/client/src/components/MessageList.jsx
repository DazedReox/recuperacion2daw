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
              className="avatar"
            />

            <div>

              <strong>{msg.user}</strong>

              {msg.text && <p>{msg.text}</p>}

              {msg.file && (

                msg.file.match(/\.(jpg|jpeg|png|gif)$/i) ?

                <img
                  src={`http://localhost:3000/uploads/${msg.file}`}
                  width="200"
                />

                :

                <a
                  href={`http://localhost:3000/uploads/${msg.file}`}
                  download
                >
                  Descargar {msg.name}
                </a>

              )}

            </div>

          </div>

        );

      })}

    </div>

  );

}

export default MessageList;