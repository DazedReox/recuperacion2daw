import express from "express";
import cors from "cors";
import courseRoutes from "./routes/courseRoutes.js";
import testRoutes from "./routes/testRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import rankingRoutes from "./routes/rankingRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import topicRoutes from "./routes/topicRoutes.js";
import contentRoutes from "./routes/contentRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/tests", testRoutes);
app.use("/api/ranking", rankingRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/topics", topicRoutes);
app.use("/api/contents", contentRoutes);
export default app;