//check whether a file available or not
const fs = require("fs");

const fileName = "abc.txt";

if (fs.existsSync(fileName)) {
  console.log(fileName, "is available");
} else {
  console.log(fileName, " is not available");
}

// Error first callback:-
// if a callback having error as first parameter then it is call
// error first callback

fs.stat(fileName, (err, stat) => {
  if (err) console.log("something is wrong! ", err);
  else {
    if (stat.isFile()) {
      console.log(fileName, "is a file");
    } else {
      console.log(fileName, "is not a file");
    }
  }
});
