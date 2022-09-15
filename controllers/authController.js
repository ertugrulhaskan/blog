require("dotenv").config();

const User = require("../models/user");
const jwt = require("jsonwebtoken");

const errorHandler = (error) => {
  let message = {};

  // Validation Errors
  if (error.name.includes("ValidationError")) {
    Object.values(error.errors).forEach(({ properties }) => {
      message[properties.path] = properties.message;
    });
  }
  // Unique email
  if (error.code === 11000) {
    message["email"] = "You had registered, did you forget?";
  }

  return message;
};

const passwordCompare = async (password, passwordConfirm) => {
  return password !== passwordConfirm ? false : true;
};

const MAX_TOKEN_AGE = 60 * 60; // AN HOUR TOKEN
const createToken = (id) => {
  console.log(process.env.SECRET_TOKEN_KEY);
  return jwt.sign({ id }, process.env.SECRET_TOKEN_KEY, {
    expiresIn: MAX_TOKEN_AGE,
  });
};

module.exports.login = (req, res, next) => {
  res.status(200).render("login");
};

module.exports.register = (req, res, next) => {
  res.status(200).render("register");
};

module.exports.login_auth = (req, res, next) => {
  const { email, password } = req.body;
  console.log(email, password);
  res.send("login");
};

module.exports.register_auth = async (req, res, next) => {
  const { email, password, passwordConfirm } = req.body;
  let isPasswordEqual = await passwordCompare(password, passwordConfirm);
  if (!isPasswordEqual) {
    res
      .status(400)
      .json({ error: { passwordConfirm: "Please confirm your password!" } });
    return false;
  }
  try {
    const user = await User.create({ email, password });
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: MAX_TOKEN_AGE * 1000 });
    res.status(201).json({ user: { email: user.email, id: user._id } });
  } catch (error) {
    let message = errorHandler(error);
    res.status(400).json({ error: message });
  }
};
