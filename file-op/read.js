const fs = require("fs");

const fileName = "abc.txt";

//async
fs.readFile(fileName, (err, data) => {
  if (err) console.log("could not read");
  else console.log("file data: ", data);
});

//sync
try {
  const data = fs.readFileSync(fileName, "utf-8");
  console.log(data.toString());
} catch (err) {
  console.log("could not read");
}
