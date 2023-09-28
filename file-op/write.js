const fs = require("fs");
const pfs = require("fs/promises");

const fileName = "abc.txt";
// Asynchronous API
const data = "this is sample data write in the file";

fs.writeFile(fileName, data, () => {
  console.log("written to the file...");
});
// Synchronous API

try {
  fs.writeFileSync(fileName, data);
  console.log("write to file");
} catch (err) {
  console.log("could not written");
}

// Promise API
pfs
  .writeFile(fileName, data)
  .then((data) => {
    console.log("written to file by promise");
  })
  .catch((err) => {
    console.log("not written...");
  });
fs.appendFile(fileName, "this is appended content", (err) => {
  if (err) console.log("could not appended");
  else console.log("appended....");
});
