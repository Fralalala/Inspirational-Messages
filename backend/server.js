import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv"
import messageRoutes from './routes/messageRoutes.js'

dotenv.config()

const app = express();

connectDB()

app.use(express.json());

app.use("/api/message", messageRoutes)

app.get("/", (req, res) => {
  res.send("API is running....");
});

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`server running in ${PORT}`)) 