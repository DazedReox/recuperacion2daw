import { useState } from "react";

function Login({ onLogin }) {

  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [avatar, setAvatar] = useState("avatars/avatar1.png");

  function submit() {

    onLogin({
      name,
      status,
      avatar
    });

  }

  return (

    <div className="login">

      <h2>Entrar al chat</h2>

      <input
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Estado"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      />

      <select
        value={avatar}
        onChange={(e) => setAvatar(e.target.value)}
      >
        <option value="avatars/avatar1.png">Avatar 1</option>
        <option value="avatars/avatar2.png">Avatar 2</option>
        <option value="avatars/avatar3.png">Avatar 3</option>
      </select>

      <button onClick={submit}>Entrar</button>

    </div>
  );
}

export default Login;