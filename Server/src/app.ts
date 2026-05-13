import express from "express";
import cors from "cors";
import weatherRouter from "./routes/weather.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("api/weather", weatherRouter);

app.get("/api/health", (_, res) => {
    res.json({
      success: true,
      message: "Server is running",
    });
});

export default app;