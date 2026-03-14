const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const path = require("path");

const socketHandler = require("./socket");

const cors = require("cors");
const app = express();
app.use(cors());

const fs = require("fs");

if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*"
  }
});
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });
app.post("/upload", upload.single("file"), (req, res) => {

  res.json({
    file: req.file.filename,
    original: req.file.originalname
  });

});

app.use("/uploads", express.static("uploads"));

socketHandler(io);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log("Servidor iniciado");
});