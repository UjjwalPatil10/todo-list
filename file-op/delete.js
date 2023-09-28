const fs = require("fs");

const fileName = "abc.txt";

try {
  fs.unlinkSync(fileName);
  console.log("Deleted.........");
} catch (err) {
  console.log("not deleted");
}
