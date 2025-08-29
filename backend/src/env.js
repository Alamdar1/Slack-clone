import dotenv from "dotenv";
dotenv.config();
export const ENV = {
  PORT: process.env.PORT,
  MONGOURL: process.env.MONGOURI,
  NODE_ENV: process.env.NODE_ENV,
  CLERK_PUBLISHABLE_KEY: process.env.CLERK_PUBLISHABLE_KEY,
  CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
  INGEST_EVENT_KEY: process.env.INGEST_EVENT_KEY,
  INGEST_SIGNIN_KEY: process.env.INGEST_SIGNIN_KEY,
  STREAM_SECRET: process.env.STREAM_SECRET,
  STREAM_API: process.env.STREAM_API,
};
