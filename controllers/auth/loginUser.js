const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { HttpError } = require("../../helpers");
const { User } = require("../../models/user");

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  if (!user) {
    throw HttpError(401, "Name or password invalid");
  }

  const passwordCompare = await bcrypt.compare(password, user.password);

  if (!passwordCompare) {
    throw HttpError(401, "Name or password invalid");
  }
};

module.exports = loginUser;
