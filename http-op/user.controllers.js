let users = [
  { id: 1, name: "aaaa", mobile: "11111", city: "pune" },
  { id: 2, name: "bbbb", mobile: "2222", city: "mumbai" },
  { id: 3, name: "cccc", mobile: "33333", city: "nashik" },
  { id: 4, name: "dddd", mobile: "4444", city: "mumbai" },
  { id: 5, name: "eeeee", mobile: "5555", city: "pune" },
];

const userController = {
  getAllUsers(req, res) {
    res.status(200).send(users);
  },

  getSingleUser(req, res) {
    //req.params={id:3}
    //const id = req.params.id
    const { id } = req.params;

    const u = users.find((u) => u.id == id);

    if (u) res.status(200).send(u);
    else res.status(404).send("User not available");
  },

  createUser(req, res) {
    //get data from request body
    const user = req.body;
    console.log("user: ", user);
    // save it
    users.push(user);

    //send response
    res.status(201).send("User created...");
  },

  updateUser(req, res) {
    const { id } = req.params;
    const data = req.body;

    const index = users.findIndex((u) => u.id == id);

    const updatedUser = { ...users[index], ...data };

    users.splice(index, 1, updatedUser);
    res.status(200).send("user updated...");
  },

  deleteUser(req, res) {
    const { id } = req.params;
    const updatedUsers = users?.filter((u) => u.id != id);
    users = updatedUsers;
    res.status(200).send("User deleted...");
  },
};
module.exports = userController;
