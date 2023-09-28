const fs = require("fs");

const fileName = "abc.txt";

fs.watchFile(fileName, (curr, prev) => {
  console.log("create time curr: ", curr.birthtime);
  console.log("create time prev: ", prev.birthtime);

  console.log("accessed time curr: ", curr.atime);
  console.log("accessed time prev: ", curr.atime);

  console.log("modified time curr: ", curr.mtime);
  console.log("modified time prev: ", prev.mtime);
});
