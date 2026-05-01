const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config({ path: "./.env" });

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Check API
app.get("/", (req, res) => {
  res.send("Server running");
});

// Test API (for frontend connection)
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend connected successfully 🚀" });
});

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

// Port
const PORT = process.env.PORT || 5001;
app.get("/", (req, res) => {
  res.send("Backend running successfully 🚀");
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
