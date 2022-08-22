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

module.exports.login = (req, res, next) => {
  res.render("login");
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
  try {
    const user = await User.create({ email, password });
    res.status(201).json(user);
  } catch (error) {
    let message = errorHandler(error);
    res.json({ error: message });
  }
};
