const fs = require("fs");
const path = require("path");

const pathRef = "sample";

const fileList = fs.readdirSync(pathRef);
for (var f of fileList) {
  console.log(f);
  console.log(path.extname);
}
