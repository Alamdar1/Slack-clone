import express from "express";
import dotenv from "dotenv";
import { connection } from "./config/connectionDb.js";

const app = express();
dotenv.config();
app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(3000, () => connection());
