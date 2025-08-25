import express from "express";
import { connection } from "./config/connectionDb.js";
import { functions, inngest } from "./config/inngest.js";
import { clerkMiddleware } from "@clerk/express";

import { serve } from "inngest/express";
import { ENV } from "./env.js";

const app = express();
app.use(express.json());
app.use(clerkMiddleware());

app.use("/api/inngest", serve({ client: inngest, functions }));

app.get("/respo", async (req, res) => {
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

export default app;
