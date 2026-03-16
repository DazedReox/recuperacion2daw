const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const path = require("path");

const socketHandler = require("./socket");

const cors = require("cors");
const app = express();
app.use(cors());

app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; img-src 'self' https: data:; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; connect-src *;"
  );
  next();
});

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
    cb(null, path.join(process.cwd(), "uploads"));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });
app.post("/upload", upload.single("file"), (req, res) => {

  console.log("Upload recibido");

  if (!req.file) {
    console.log("No se recibió archivo");
    return res.status(400).json({ error: "No file uploaded" });
  }

  console.log("Archivo guardado:", req.file);

  res.json({
    file: req.file.filename,
    original: req.file.originalname
  });

});

app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

socketHandler(io);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log("Servidor iniciado");
});