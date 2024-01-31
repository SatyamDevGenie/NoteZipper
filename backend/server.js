import colors from "colors";
import express from "express";
import dotenv from "dotenv";
import notes from "./data/notes.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("API is running successfully...");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  res.send(note);
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, console.log(`Server running on PORT ${PORT}`.yellow));
