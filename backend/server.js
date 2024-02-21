import colors from "colors";
import express from "express";
import dotenv from "dotenv";
import notes from "./data/notes.js";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
// import cors from "cors";

const app = express();

dotenv.config();
connectDB();

// // Use CORS middleware with options

// const corsOptions = {
//   origin: "http://localhost:5000", // Replace with your frontend domain
//   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//   credentials: true, // enable credentials (cookies, HTTP authentication)
//   optionsSuccessStatus: 204, // some legacy browsers (IE11, various SmartTVs) choke on 204
// };

// app.use(cors(corsOptions));

// Middleware
// app.use(cors()); // Enable CORS for all routes

app.use(express.json()); // Request for json data

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

app.use("/api/users", userRoutes);

// Middleware for handling the errors
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on PORT ${PORT}`.yellow));
