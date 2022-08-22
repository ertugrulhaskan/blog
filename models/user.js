const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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

// userSchema.post("save", function (doc, next) {
//   console.log("Saved!", doc);
//   next();
// });

userSchema.pre("save", async function (next) {
  // console.log(this);
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const User = mongoose.model("user", userSchema);

module.exports = User;
