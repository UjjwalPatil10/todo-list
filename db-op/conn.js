// creating DB Connection

// There are two ways to create a connection

//import the mongoose

const mongoose = require("mongoose");

//compose a url of DB
// const url = "mongodb://127.0.0.1:27017/twelvepm";
const url = "mongodb://localhost:27017/twelvem";

//create a default connection
// 1st way
mongoose.connect(url);

//access default created connection

const conn = mongoose.connection;

//listen to database event

conn.on("connected", () => {
  console.log("Connection established...");
});
conn.on("error", () => {
  console.log("Connection not established...");
});

conn.on("disconnected", () => {
  console.log("Connection ended..");
});
// ===============

// 2nd way

// const conn1 = mongoose.createConnection(url);
// const conn2 = mongoose.createConnection(url);
// conn1.on("connected", () => {
//   console.log(" connection 1 established...");
// });
// conn1.on("error", () => {
//   console.log(" connection 1 not established...");
// });

// conn1.on("disconnectes", () => {
//   console.log(" connection 1 ended..");
// });

// conn2.on("connected", () => {
//   console.log("connection 2  established...");
// });
// conn2.on("error", () => {
//   console.log("connection 2 not established...");
// });

// conn2.on("disconnectes", () => {
//   console.log("connection 2 ended..");
// });
