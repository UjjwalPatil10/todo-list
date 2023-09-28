// app.js (or index.js)
const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/userModel"); // Import the user model

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/myDatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Your other middleware and routes will go here

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
