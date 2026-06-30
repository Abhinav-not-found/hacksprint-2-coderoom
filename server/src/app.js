import cors from "cors";
import express from "express";
import morgan from "morgan";
import config from "./config/config.js";
import errorHandler from "./middlewares/error.handler.js";
import roomRoutes from "./routes/room.routes.js";

const app = express();
app.use(express.json({ limit: "15kb" }));
app.use(morgan("dev"));
const allowedOrigins = [
	process.env.CLIENT_URL,
	process.env.CLIENT_URL_PROD,
].filter(Boolean);


app.use(
	cors({
		origin: (origin, callback) => {
			console.log("CORS origin:", origin);
			if (!origin) return callback(null, true);
			if (allowedOrigins.includes(origin)) {
				return callback(null, true);
			}
			return callback(new Error("Not allowed by CORS"));
		},
		credentials: true,
	}),
);

app.get("/check", (_, res) => {
	res.send("API running");
});

app.use("/api/rooms", roomRoutes);

app.use(errorHandler);

export default app;
