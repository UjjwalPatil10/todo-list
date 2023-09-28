const User = require("./user.model");

//remove user having userId 3

User.deleteOne({ userId: 3 })
  .then((result) => {
    console.log("User deleted...", result);
  })
  .catch((err) => {
    console.log("Could not deleted...", err);
  });
// =========================================
