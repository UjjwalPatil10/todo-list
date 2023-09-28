// schema = structer

const UserModel = require("./user.model");

const users = [
  {
    name: "Topper skills 3",
    age: 6,
    mobile: "1231456788557",
    email: "sush@gmail.com",
    isActive: true,
    address: {
      city: "pune",
      country: "india",
    },
    createdAt: "2023/5/25",
    status: 1,
  },
  {
    name: "Topper skills4",
    age: 7,
    mobile: "12314567889",
    email: "sush3@gmail.com",
    isActive: true,
    address: {
      city: "pune",
      country: "india",
    },
    createdAt: "2023/5/25",
    status: 1,
  },
];

// save the document
// solution 1
// single document
// new UserModel(u)
//   .save()
//   .then((result) => {
//     console.log("User saved..", result);
//   })
//   .catch((err) => {
//     console.log("Could not save", err);
//   });

UserModel.insertMany(users)
  .then((result) => {
    console.log("User saved..", result);
  })
  .catch((err) => {
    console.log("Could not save", err);
  });
