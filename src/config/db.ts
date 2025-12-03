import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI as string;
    if (!uri) throw new Error("MONGO_URI is not set in .env");
    await mongoose.connect(uri);
    console.log("MongoDB Connected Successfully (Atlas)");
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
    process.exit(1); // stop process if DB not connected
  }
};
