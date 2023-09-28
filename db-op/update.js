const User = require("./user.model");

//change age to 50 and add gender
User.updateOne({ userId: 3 }, { age: 55, gender: "male" })
  .then((result) => {
    console.log("User Updated:", result);
  })
  .catch((err) => {
    console.log("Could  not updated the user:", err);
  });

// =====================================================================
User.updateMany({}, { company: "Topper" })
  .then((result) => {
    console.log("User Updated:", result);
  })

  .catch((err) => {
    console.log("Could not update the user:", err);
  });
