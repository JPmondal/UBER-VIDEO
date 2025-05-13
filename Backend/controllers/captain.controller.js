const BlacklistTokenModel = require("../models/blacklistToken.model");
const captainModel = require("../models/captain.model");
const captainService = require("../services/captain.service");
const { validationResult } = require("express-validator");

// Register captain
module.exports.registerCaptain = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  const { fullname, email, password, vechicle } = req.body;

  // Check if the email already exists
  const isCaptainAlreadyExist = await captainModel.findOne({ email });
  if (isCaptainAlreadyExist) {
    return res.status(409).json({ message: "Captain already exists" });
  }

  const hashedPassword = await captainModel.hashPassword(password);

  const captain = await captainService.createCaptain({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashedPassword,
    color: vechicle.color,
    plate: vechicle.plate,
    capacity: vechicle.capacity,
    vechicleType: vechicle.vechicleType,
  });

  const token = await captain.generateAuthToken();

  res.cookie("token", token);
  res.status(201).json({ token, captain });
};

//Captain login
module.exports.loginCaptain = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  const { email, password } = req.body;

  const captain = await captainModel.findOne({ email }).select("+password");
  if (!captain) {
    return res.status(404).json({ message: "Invalid email or password" });
  }

  const isPasswordMatch = await captain.comparePassword(password);

  if (!isPasswordMatch) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const token = await captain.generateAuthToken();

  res.cookie("token", token);
  res.status(200).json({ token, captain });
};

// Get captain profile
module.exports.getCaptainProfile = async (req, res) => {
  res.status(200).json({ captain: req.captain });
};

// Logout captain
module.exports.logoutCaptain = async (req, res) => {
    try {
        const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

        if (!token) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        await BlacklistTokenModel.create({ token });

        res.clearCookie("token");
        res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        console.error("Error during logout:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
