import React from "react";
import { useState } from "react";
import { auth } from "../services/firebase";
import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup} from "firebase/auth";

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

    async function loginGoogle() {

    const provider = new GoogleAuthProvider();

    const result = await signInWithPopup(auth, provider);

    const user = result.user;

    onLogin({
      name: user.displayName,
      avatar: user.photoURL,
      status: "online"
    });

    }

    async function loginGithub() {

      const provider = new GithubAuthProvider();

      const result = await signInWithPopup(auth, provider);

      const user = result.user;

      onLogin({
        name: user.displayName || user.email,
        avatar: user.photoURL,
        status: "online"
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
      <button onClick={loginGoogle}>
        Entrar con Google
      </button>

      <button onClick={loginGithub}>
        Entrar con GitHub
      </button>
    </div>
  );
}

export default Login;