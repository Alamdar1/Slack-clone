import express from "express";
import dotenv from "dotenv";
import { connection } from "./config/connectionDb.js";

const app = express();
app.get("/", (req, res) => {
  res.send("Hello");
});

const startServer = async () => {
  try {
    await connection();
    if (ENV.NODE_ENV !== "production") {
      app.listen(ENV.PORT, () => {
        console.log("Server started on port:", ENV.PORT);
      });
    }
  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1);
  }
};

startServer();
