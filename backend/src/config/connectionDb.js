import mongoose from "mongoose";
import { ENV } from "../env.js";

export const connection = async () => {
  console.log("ENV.MONGOURL", ENV.MONGOURL);
  try {
    await mongoose.connect(
      "mongodb+srv://Alamdar:wfRpp6GS4OF0ZtN9@cluster0.w7ocjqo.mongodb.net/Slack-app?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("✅ MongoDB connected successfully!");
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
  }
};
