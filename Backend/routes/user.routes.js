const express = require("express");
const { body } = require("express-validator");
const userController = require("../controllers/user.controller");

const router = express.Router();

router.post("/register", [
  body("email").isEmail().withMessage("Please enter a valid email address"),
  body('fullname.firstname')
    .isLength({ min: 3 })
    .withMessage("First name must be at least 3 characters"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters")
],userController.registerUser);

module.exports = router;
