const { Schema, model } = require("mongoose");

const { handleMongooseError } = require("../helpers");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Set user's name for user"],
    },
    password: {
      type: String,
      minlength: 6,
      required: [true, "Set password for user"],
    },
  },
  { versionKey: false }
);

userSchema.post("save", handleMongooseError);

const User = model("user", userSchema);

module.exports = User;
