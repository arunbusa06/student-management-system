const userModel = require("../models/userModel");
const { hashPassword, comparePassword } = require("../utils/hashPassword");
const generateToken = require("../utils/generateToken");

exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  const hashed = await hashPassword(password);

  userModel.createUser(name, email, hashed, "user", (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Registered" });
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  userModel.findUserByEmail(email, async (err, result) => {
    if (result.length === 0)
      return res.status(400).json("User not found");

    const user = result[0];

    const match = await comparePassword(password, user.password);

    if (!match) return res.status(400).json("Wrong password");

    const token = generateToken(user);

    res.json({ token });
  });
};