const userModel = require("../models/user.model");
const BlacklistTokenModel = require("../models/blacklistToken.model");
const captainModel = require("../models/captain.model");
const jwt = require("jsonwebtoken");

module.exports.authUser = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    
    // Check if the token is blacklisted
    const isBlacklisted = await BlacklistTokenModel.findOne({ token });
    if (isBlacklisted) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded._id);
    req.user = user;

    return next();
  } catch (error) {
    return res
      .status(401)
      .json({ message: "Unauthorized", error: error.message });
  }
};

module.exports.authCaptain = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    // Check if the token is blacklisted
    const isBlacklisted = await BlacklistTokenModel.findOne({ token });

    if (isBlacklisted) {
      console.log("Token is blacklisted");
      return res.status(401).json({ message: "Unauthorized" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const captain = await captainModel.findById(decoded._id);
    req.captain = captain;

    return next();
  } catch (error) {
    return res
      .status(401)
      .json({ message: "Unauthorized", error: error.message });
  }
};
