const userModel = require("../models/user.model");
const userService = require("../services/user.service");
const { validationResult } = require("express-validator");
const BlacklistTokenModel = require("../models/blacklistToken.model");

// Register user
module.exports.registerUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  const { fullname, email, password } = req.body;

  // Check if the email already exists
  const isUserAlreadyExist = await userModel.findOne({ email });
  if (isUserAlreadyExist) {
    return res.status(409).json({ message: "User already exists" });
  }

  //hashing password
  const hashedPassword = await userModel.hashPassword(password);

  //creating user
  const user = await userService.createUser({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashedPassword,
  });
  const token = await user.generateAuthToken();

  res.cookie("token", token);
  res.status(201).json({ token, user });
};
// User login
module.exports.loginUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  const user = await userModel.findOne({ email }).select("+password");

  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid email or password" });
  }
  const token = await user.generateAuthToken();

  res.cookie("token", token);
  res.status(200).json({ token, user });
};
// User profile
module.exports.getUserProfile = async (req, res) => {
  res.status(200).json({ user: req.user });
};
// User logout
module.exports.logoutUser = async (req, res) => {
  res.clearCookie("token");
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  await BlacklistTokenModel.create({ token });
  res.status(200).json({ message: "Logged out successfully" });
};
