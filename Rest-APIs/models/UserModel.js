const mongoose = require("mongoose");

const UserModel = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "password is required"],
    unique: true,
  },
});

module.exports = mongoose.model("Users", UserModel);
