import express from "express";

import { connectToDatabase } from "./Config/db.js";
import router from "./routes/userRoutes.js";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 8080;
const app = express();
app.use(express.json());

connectToDatabase();

// Middleware to handle requests and responses
app.use("/api/v1", router);

app.listen(PORT, (err) => {
  if (err) {
    console.error("Server error:", err);
  }
  console.log(`Server is listening on port ${PORT}`);
});
