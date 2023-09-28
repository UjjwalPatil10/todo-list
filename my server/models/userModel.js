// userModel.js
const mongoose = require("mongoose");

// Define the user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  // Add any other properties you want to store for the user
  // For example: name, age, address, etc.
});

// Create and export the User model based on the schema
const User = mongoose.model("User", userSchema);
module.exports = User;
