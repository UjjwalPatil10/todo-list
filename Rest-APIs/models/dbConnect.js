const mongoose = require("mongoose");
require("dotenv").config();
const Url = process.env.DB_URL;

async function dbConnect() {
  mongoose
    .connect(Url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log(`Connected to MongoDB`);
    })
    .catch((err) => {
      console.log(`Could not connect to MongoDB`, err);
    });
}

module.exports = dbConnect;
