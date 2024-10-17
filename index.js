// index.js
import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import studentRoutes from "./routes/studentRoutes.js";
import dotenv from "dotenv";
import {PORT, MONGO_URI} from "./app/config/config.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api", studentRoutes);

// Connect to MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Error connecting to MongoDB:", err));

// Start server
app.listen(PORT || 3000, () => {
  console.log(`Server running on port ${PORT}`);
});
