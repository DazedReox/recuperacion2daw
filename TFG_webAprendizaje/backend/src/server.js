import dotenv from "dotenv";
import app from "./app.js";
import pool from "./config/db.js";
import statisticsRoutes from "./routes/statisticsRoutes.js";

dotenv.config();

const PORT =
    process.env.PORT || 5000;

pool.query("SELECT 1")
    .then(() => console.log("MySQL conectado"))
    .catch(console.error);

app.listen(PORT, () => {

    console.log(
        `Servidor ejecutándose en puerto ${PORT}`
    );
});
app.use(
    "/api/statistics",
    statisticsRoutes
);