import dotenv from "dotenv";

dotenv.config({ quiet: true });

const config = {
	PORT: Number(process.env.PORT) || 8000,
	MONGO_URI: process.env.MONGO_URI || "",
	CLIENT_URL: process.env.CLIENT_URL_PROD || process.env.CLIENT_URL,
};

export default config;
