import cors from "cors";
import express from "express";
import morgan from "morgan";
import config from "./config/config.js";
import errorHandler from "./middlewares/error.handler.js";
import roomRoutes from "./routes/room.routes.js";

const app = express();
app.use(express.json({ limit: "15kb" }));
app.use(morgan("dev"));
app.use(
	cors({
		origin: config.CLIENT_URL,
		credentials: true,
	}),
);

app.get("/check", (_, res) => {
	res.send("API running");
});

app.use("/api/rooms", roomRoutes);

app.use(errorHandler);

export default app;
