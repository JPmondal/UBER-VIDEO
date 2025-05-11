const captainModel = require("../models/captain.model");
const captainService = require("../services/captain.service");
const { validationResult } = require("express-validator");

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
}
