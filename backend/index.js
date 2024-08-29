//packages
import path from "path";
import express from "express";
import { configDotenv } from "dotenv";
import cookieParser from "cookie-parser";

//utilities
import connectDB from "./config/db.js";

configDotenv();

const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => console.log(`Server running on port: ${port}`));
