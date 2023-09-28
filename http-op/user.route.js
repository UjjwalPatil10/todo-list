const router = require("express").Router();

const {
  createUser,
  deleteUser,
  getAllUsers,
  getSingleUser,
  updateUser,
} = require("./user.controllers");

//http://localhost:8080/users
router.get("", getAllUsers);

//http://localhost:8080/3
router.get("/:id", getSingleUser);

//create a user
router.post("", createUser);

//update the user
router.put("/:id", updateUser);

//delete a user
router.delete("/:id", deleteUser);

module.exports = router;
