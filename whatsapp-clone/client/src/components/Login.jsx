import React from "react";
import { useState } from "react";

function Login({ onLogin }) {

  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [avatar, setAvatar] = useState("avatars/avatar1.png");

  function submit() {
    onLogin({
      name,
      status,
      avatar: "/avatars/" + avatar.split("/").pop()
    });
  }

  return (

    <div className="login">
      <h2 class="titulo">Entrar al chat</h2>

      <input class="nombre"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input class="estado"
        placeholder="Estado"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      />

      <select class="avatar" value={avatar} onChange={(e) => setAvatar(e.target.value)}>
        <option value="avatars/avatar1.png">Avatar 1</option>
        <option value="avatars/avatar2.png">Avatar 2</option>
        <option value="avatars/avatar3.png">Avatar 3</option>
      </select>

      <button class="entrar" onClick={submit}>Entrar</button>
    </div>
  );
}

export default Login;