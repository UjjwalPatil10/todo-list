const userLoginModel = require("../models/userLoginModel");
const bcrypt = require("bcryptjs");
// register user
exports.createRegisterUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    //validation
    if (!name || !email || !password) {
      return res.status(400).send({ message: "Please fill all fields" });
    }
    // existing user
    const exisitingUser = await userLoginModel.findOne({ email });
    if (exisitingUser) {
      return res.status(401).send({ message: "Email already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 8);
    //save new user
    const user = new userLoginModel({ name, email, password: hashedPassword });
    await user.save();

    return res.status(201).send({ message: "New user created", data: user });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Error in registering User", error });
  }
};

//login user
exports.loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
      return res
        .status(400)
        .send({ message: "Please provide email or password" });
    }
    const user = await userLoginModel.findOne({ email });
    if (!user) {
      return res.status(400).send({ message: "email is not registered" });
    }

    //password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send({ message: "Invalid username or password" });
    }
    return res.status(200).send({ message: "Login Successfully", data: user });
  } catch (error) {
    return res.status(500).send({ message: "Error in Login User", error });
  }
};
