import mongoose from "mongoose";
import { ENV } from "../env.js";

export const connection = async () => {
  try {
    await mongoose.connect(ENV.MONGOURL);
    console.log("✅ MongoDB connected successfully!");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
};
