const User = require("../models/user");

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
    res.status(201).json({ user: { email: user.email, id: user._id } });
  } catch (error) {
    let message = errorHandler(error);
    res.status(400).json({ error: message });
  }
};
