import express from "express";
import cors from "cors";
import ConnectDB from "./configs/db.js";
import UserRoutes from "./routes/UserRoutes.js";
import TaskRoutes from "./routes/TaskRoutes.js";

// App Initialization
const app = express();

// Database
ConnectDB();

// Middlewares
app.use(express.json());
app.use(cors());

// Basic Route for User
app.use("/api/v1/user", UserRoutes);

// Basic Route for Task
app.use("/api/v1/task", TaskRoutes);

// App listen
const PORT = 5000 || 8080;

app.listen(PORT, () => {
  console.log("Server is Running on 5000 ...");
});
