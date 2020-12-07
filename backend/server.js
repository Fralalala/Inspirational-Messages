import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import messageRoutes from "./routes/messageRoutes.js";
import filterRoutes from "./routes/filterRoutes.js";
import path from "path";
import fetch from "node-fetch";

dotenv.config();

const app = express();

connectDB();

app.use(express.json());

app.use("/api/message", messageRoutes);

app.use("/api/filter", filterRoutes);


const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server running in ${PORT}`));
