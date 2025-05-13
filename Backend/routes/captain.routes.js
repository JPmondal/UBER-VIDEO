const express = require("express");
const { body } = require("express-validator");
const captainController = require("../controllers/captain.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const router = express.Router();

router.post(
  "/register",
  [
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 characters"),
    body("email").isEmail().withMessage("Please enter a valid email address"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
    body("vechicle.color")
      .isLength({ min: 3 })
      .withMessage("Color must be at least 3 characters"),
    body("vechicle.plate")
      .isLength({ min: 3 })
      .withMessage("Plate must be at least 3 characters"),
    body("vechicle.capacity")
      .isInt({ gt: 0 })
      .withMessage("Capacity must be a positive integer"),
    body("vechicle.vechicleType")
      .isIn(["car", "motorcycle", "auto"])
      .withMessage("Type must be either car, motorcycle, or auto"),
  ],
  captainController.registerCaptain
);

router.post('/login',[
  body("email").isEmail().withMessage("Please enter a valid email address"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
], captainController.loginCaptain);

router.get("/profile",authMiddleware.authCaptain,captainController.getCaptainProfile);

router.get("/logout", authMiddleware.authCaptain, captainController.logoutCaptain);



module.exports = router;
