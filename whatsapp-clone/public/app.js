import { Login } from "./components/Login.js";
import { UserList } from "./components/UserList.js";
import { MessageList } from "./components/MessageList.js";
import { MessageInput } from "./components/MessageInput.js";

const socket = io();

let user = null;

function login() {

    user = {
        name: document.getElementById("name").value,
        status: document.getElementById("status").value,
        avatar: document.getElementById("avatar").value
    };

    socket.emit("login", user);

    document.getElementById("login").style.display = "none";
    document.getElementById("chat").style.display = "flex";
}

function sendMessage() {

    const input = document.getElementById("messageInput");

    const msg = {
        user: user.name,
        avatar: user.avatar,
        text: input.value
    };

    socket.emit("message", msg);

    input.value = "";
}

socket.on("message", (msg) => {

    const div = document.createElement("div");

    div.innerHTML = `
        <img src="${msg.avatar}" width="30">
        <strong>${msg.user}</strong>: ${msg.text}
    `;

    document.getElementById("messages").appendChild(div);
});

socket.on("system", (msg) => {

    const div = document.createElement("div");

    div.textContent = msg;
    div.style.color = "gray";

    document.getElementById("messages").appendChild(div);
});

socket.on("users", (users) => {

    const ul = document.getElementById("users");

    ul.innerHTML = "";

    users.forEach(u => {

        const li = document.createElement("li");
        li.textContent = u.name;

        ul.appendChild(li);
    });

});

document.getElementById("messageInput").addEventListener("input", () => {

    socket.emit("typing", user.name);

});

socket.on("typing", (name) => {

    const typing = document.getElementById("typing");

    typing.textContent = `${name} está escribiendo...`;

    setTimeout(() => typing.textContent = "", 1000);
});