const UserModel = require("./user.model");

//read all documents
// UserModel.find()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// //read by id
// UserModel.findOne({ _id: "646f28c21edc9d82031a0c73" })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//fetch all having status 1
// UserModel.find({ status: 1 })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// get total number of documents
// UserModel.countDocuments()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// get only two documents
// UserModel.find()
//   .limit(2)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// sort the fetch result by name in ascending order

// UserModel.find()
//   .sort({ name: -1 })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//get only names and mobile of users
UserModel.find({}, { _id: 0, name: 1, mobile: 1 })
  .sort({ name: -1 })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
