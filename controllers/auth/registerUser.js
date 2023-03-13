const bcrypt = require("bcryptjs");

const { HttpError } = require("../../helpers");
const { User } = require("../../models/user");

const registerUser = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  if (user) {
    throw HttpError(409, "Name in use");
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({ ...req.body, password: hashPassword });

  res.status(201).json({
    user: {
      username: newUser.username,
    },
  });
};

module.exports = registerUser;
