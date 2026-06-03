import express from "express";
import cors from "cors";
import courseRoutes from "./routes/courseRoutes.js";

import authRoutes from "./routes/authRoutes.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/auth", authRoutes);

app.use("/api/courses", courseRoutes);

export default app;