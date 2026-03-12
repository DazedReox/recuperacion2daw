const { addUser, removeUser, getUsers, getUser } = require("./users");
const { joinRoom, leaveRoom } = require("./rooms");

module.exports = (io) => {

  io.on("connection", (socket) => {

    console.log("Usuario conectado");

    socket.on("login", (user) => {

      const newUser = {
        id: socket.id,
        name: user.name,
        status: user.status,
        avatar: user.avatar
      };

      addUser(newUser);

      joinRoom("general", socket.id);

      socket.join("general");

      io.emit("users", getUsers());

      io.emit("system", `${user.name} ha entrado al chat`);
    });

    socket.on("message", (msg) => {
      io.to("general").emit("message", msg);
    });

    socket.on("typing", (name) => {
      socket.broadcast.emit("typing", name);
    });

    socket.on("disconnect", () => {

      const user = getUser(socket.id);

      leaveRoom("general", socket.id);

      removeUser(socket.id);

      if (user) {
        io.emit("system", `${user.name} ha salido`);
        io.emit("users", getUsers());
      }

    });

  });

};