// npm i express
//npm i -g nodemon
// for run
//nodemon App

const express = require("express");
const app = express();
const bodyParser = require("body-parser"); //npm i body-parser
//create the server
app.use(bodyParser.json()); // it parses the raw data received from request
// the parsed data in JSON will be available at "req.body"
let users = [
  { id: 1, name: "aaa", mobile: "111", city: "pune" },

  { id: 2, name: "bbb", mobile: "2222", city: "mumbai" },

  { id: 3, name: "ccc", mobile: "3333", city: "pune" },

  { id: 4, name: "ddd", mobile: "4444", city: "mumbai" },

  { id: 5, name: "eee", mobile: "5555", city: "pune" },

  { id: 6, name: "fff", mobile: "66666", city: "pune" },
];

//handle request
// app.get(route,requestHandler)
//https://localhost:8080

app.get("/", (req, res) => {
  res.status(200).send("Hello from Server...");
});
//https://localhost:8080/users

app.get("/users", (req, res) => {
  res.status(200).send(users);
});

//https://localhost:8080/users/1

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const user = users?.find((u) => u.id == id);
  let data = "Invalid User";
  if (user) data = user;
  res.status(200).send(data);
  // if (user) res.status(200).send(user);

  // else res.status(200).send("Invalid User");
});
// =========================================================================================
// below we add data/create data in post body
//https://localhost:8080/users

app.post("/users", (req, res) => {
  const data = req.body;
  users.push(data);
  res.status(200).send({ message: "Created the user", result: users });
});

// ==========================================================
//to delete any  user
//https://localhost:8080/users/3

app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  users = users.filter((u) => u.id != id);
  res.status(200).send("User removed..");
});
// ===========================================================
// to update any particular user
//https://localhost:8080/users/3

app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const index = users.findIndex((u) => u.id == id);
  if (index >= 0) {
    users.splice(index, 1, { ...users[index], ...req.body });
  }
  res.status(200).send("User updated...");
});
// ======================================================================

app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
