import http from "http";
import chalk from "chalk";
import app from "./src/app.js";
import config from "./src/config/config.js";
import connectDB from "./src/config/database.js";
import { initSocket } from "./src/socket/socket.js";

async function startServer() {
  try {
    await connectDB();

    const server = http.createServer(app);

    initSocket(server);
    server.listen(config.PORT, () => {
      console.log(chalk.bgCyan(`Server running on port ${config.PORT}`));
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

startServer();
