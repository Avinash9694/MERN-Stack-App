import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectToDatabase = async () => {
  try {
    const MONGO_URI = process.env.URI;

    const conn = await mongoose.connect(MONGO_URI);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
};
