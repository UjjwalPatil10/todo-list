// without using any third party package

const http = require("http");

let users = [
  { id: 1, name: "aaaa", mobile: "11111", city: "pune" },
  { id: 2, name: "bbbb", mobile: "22222", city: "mumbai" },
  { id: 3, name: "cccc", mobile: "33333", city: "nashik" },
  { id: 4, name: "dddd", mobile: "44444", city: "mumbai" },
  { id: 5, name: "eeee", mobile: "55555", city: "pune" },
];

// create a server
const server = http.createServer((req, res) => {
  const { url, method } = req;

  // http://localhost:8080/
  if (url == "/" && method == "GET") {
    res.write("welcome to my server");
    res.end();
  } else if (url == "/users" && method == "GET") {
    // http://localhost:8080/users
    res.write(JSON.stringify(users));
    res.end();
  } else if (/\/users\/[0-9]+/.test(url) && method == "GET") {
    // http://localhost:8080/users/1
    const id = url.split("/")[2];

    const user = users.find((u) => u.id == id);
    res.write(JSON.stringify(user));
    res.end();
  } else if (url == "/users" && method == "POST") {
    // http://localhost:8080/users

    let body = "";
    req
      .on("data", (chunk) => {
        body += chunk;
      })
      .on("end", () => {
        users.push(JSON.parse(body));
        res.write("User created...");
        res.end();
      });
  } else if (/\/users\/[0-9]+/.test(url) && method == "DELETE") {
    // http://localhost:8080/users/1
    const id = url.split("/")[2];

    const userList = users.filter((u) => u.id != id);
    users = userList;
    res.write("User deleted...");
    res.end();
  } else if (/\/users\/[0-9]+/.test(url) && method == "PUT") {
    // http://localhost:8080/users/1
    const id = url.split("/")[2];

    const index = users.findIndex((u) => u.id == id);
    const user = users[index];

    let body = "";
    req
      .on("data", (chunk) => {
        body += chunk;
      })
      .on("end", () => {
        const newUser = JSON.parse(body);

        users.splice(index, 1, { ...user, ...newUser });

        res.write("User updated...");
        res.end();
      });
  } else {
    res.write("Invalid request");
    res.end();
  }
});

// start the server

server.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
// http://localhost:8080
