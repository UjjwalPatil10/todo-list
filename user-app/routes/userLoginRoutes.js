const router = require("express").Router();

const {
  createRegisterUser,
  loginController,
} = require("../controllers/userLoginController");

router.post("/register", createRegisterUser);
router.post("/login", loginController);

module.exports = router;
