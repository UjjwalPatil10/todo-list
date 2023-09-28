const express = require("express");
const app = express();

const dbConnect = require("./models/dbConnect");
const UserModel = require("./models/UserModel");
dbConnect();

const newUser = new UserModel({
  email: "got@gmail.com",
  password: "ujjus12345",
  isActive: false, // Add isActive field with value false
});

newUser
  .save()
  .then((user) => {
    console.log("User Inserted Successfully", user);
  })
  .catch((err) => {
    console.log(err);
  });

// find the user
// UserModel.find({ email: "ujju@gmail.com" })
//   .then((users) => {
//     console.log("Users Found:", users);
//   })
//   .catch((err) => {
//     console.log("Error finding users:", err);
//   });

// UserModel.find()
//   .then((users) => {
//     console.log("Users Found:", users);
//   })
//   .catch((err) => {
//     console.log("Error finding users:", err);
//   });

//update the User

// UserModel.updateOne({ email: "got@gmail.com" }, { password: "got1234" })
//   .then((users) => {
//     console.log("Users updated successfully:", users);
//   })
//   .catch((err) => {
//     console.log("Error updating users:", err);
//   });
//update many user
// UserModel.updateMany(
//   { email: "got@gmail.com" },
//   { $set: { password: "newpassword" } }
// )
//   .then((users) => {
//     console.log("Documents updated Successfully:", users);
//   })
//   .catch((err) => {
//     console.log("Error updating users:", err);
//   });

// delete the user

// UserModel.deleteOne({ email: "got@gmail.com" })
//   .then((users) => {
//     console.log("User Deleted Successfully:", users);
//   })
//   .catch((err) => {
//     console.log("Error updating users:", err);
//   });

// UserModel.deleteMany({ isActive: false })
//   .then((users) => {
//     console.log("User Deleted Successfully:", users);
//   })
//   .catch((err) => {
//     console.log("Error updating users:", err);
//   });

//covered queries in mongodb
// covered queries retrievs results using only the indexd data without accessing actual documents
// it reduces network traffic as only retrieve index data will be accessed
UserModel.collection.createIndex({ email: 4 });
UserModel.find({ email: "got@gmail.com" })
  .select({ email: 4, _id: 0 }) //select is used for which field is included or excluded in query results
  .then((users) => {
    console.log("Users Found:", users);
  })
  .catch((err) => {
    console.log("Error updating users:", err);
  });
module.exports = app;
