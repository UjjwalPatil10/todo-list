// HTTP
// it is a communication protocol

// Client and server on the web uses HTTP for communication.

// HTTP Requests:-
//     The clients can make different types of HTTP requests based on their purpose

//     1. get request:
//          - to fetch the data from server
//          - it does not have body
//          - it passes the data by appending to the URL

//     2. Post request
//         - it is used to sent data to server
//         - it has body to carry the data to server

//     3. put request
//         - it is used to update the resource completely

//     4. patch request
//         - it is used to update the resource partially

//     5. delete request
//         - it is used to delete a resource from server

// HTTP response
// HTTP responses has status codes to know the client type of response they received

// 1. Informational responses (100 – 199)
// 2. Successful responses (200 – 299)
//     - 200 = ok
//     - 201 = created
// 3. Redirection messages (300 – 399)
// 4. Client error responses (400 – 499)
//     - 401  = unauthorized
//     - 403 = forbidden
//     - 404 = page not found

// 5. Server error responses (500 – 599)

// Topper, 1:19 PM

// API -  Application Programming Interface

// The APIs are used to enable communication between two software applications

// RESTFul API:-

// REST - REpresentational State Transfer
// REST provides rules and guidelines to create the APIs
// If you follows the rules (constraints ) of the REST while developing the API then that API
// is called RESTFul API.

//without using expressjs
const http = require("http");
// create a server
const port = 6000;
const server = http.createServer((request, response) => {
  //create endpoints and handle the request
  const { method, url } = request;

  if (url == "/") {
    response.write("Hi From server");
    response.end();
  } else if (url == "/users") {
    response.write("All user list");
    response.end();
  } else if (url == "/products") {
    response.write("All products list");
    response.end();
  } else {
    response.write("Invalid request");
    response.end();
  }
});

///start a server (listen)

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});

// http://localhost:8080/
// http://localhost:8080/users
// http://localhost:8080/products
