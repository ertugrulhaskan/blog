const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    hash: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "E-mail cannot be fill blank"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "You should type a password"],
      minLength: [8, "Passwords must be at least 8 characters long"],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
