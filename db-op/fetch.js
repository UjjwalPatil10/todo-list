const User = require("./user.model");
//fetch single user

User.findOne()
  .then((result) => {
    console.log("User::", result);
  })
  .catch((err) => {
    console.log(err);
  });

// fetch all users
User.find()
  .then((result) => {
    console.log("User::", result);
  })
  .catch((err) => {
    console.log(err);
  });
// ===============================================================
//fetch by condition

User.countDocuments({ "address:city": /pune/i }, { _id: 0, name: 1, mobile: 1 })
  .then((result) => {
    console.log("User::", result);
  })
  .catch((err) => {
    console.log(err);
  });
// ===============================================================
//find number of users from pune

User.countDocuments({ "address:city": /pune/i })
  .then((result) => {
    console.log("User::", result);
  })
  .catch((err) => {
    console.log(err);
  });

User.find({ "address:city": /pune/i }, { _id: 0, name: 1, mobile: 1 })
  .limit(1)
  .then((result) => {
    console.log("User::", result);
  })
  .catch((err) => {
    console.log(err);
  });
