import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { connectToDatabase } from "./Config/db.js";
import router from "./routes/userRoutes.js";

dotenv.config();

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(cors());

// Connect to database
connectToDatabase();

// Middleware to handle requests and responses
app.use("/api/v1", router);

app.listen(PORT, (err) => {
  if (err) {
    console.error("Server error:", err);
  }
  console.log(`Server is listening on port ${PORT}`);
});
