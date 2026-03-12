const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const path = require("path");

const socketHandler = require("./socket");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname, "../public")));

socketHandler(io);

server.listen(3000, () => {
    console.log("Servidor en http://localhost:3000");
});