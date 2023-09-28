const express = require("express");
const bodyParser = require("body-parser"); //npm i body-parser
const app = express();

//add middleware
app.use(bodyParser.json());

//app.method(path/route/endpoints, requestHandler)

//http://localhost:8080/
app.get("/", (req, res) => {
  //processing the request
  res.status(200).send("welcome to express server");
});
app.use("/users", require("./user.route"));
app.listen(8080, () => {
  console.log("server is listening on port 8080");
});

//npm i -g nodemon
