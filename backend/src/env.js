import dotenv from "dotenv";
dotenv.config();
export const ENV = {
  PORT: process.env.PORT,
  MONGOURL: process.env.MONGOURI,
  NODE_ENV: process.env.NODE_ENV,
};
