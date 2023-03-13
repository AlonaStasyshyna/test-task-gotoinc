const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { HttpError } = require("../../helpers");
const { User } = require("../../models/user");

const { ACCESS_SECRET_KEY, REFRESH_SECRET_KEY } = process.env;

const registerUser = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  if (user) {
    throw HttpError(409, "Name in use");
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({ ...req.body, password: hashPassword });

  const payload = {
    id: user._id,
  };

  const accessToken = jwt.sign(payload, ACCESS_SECRET_KEY, {
    expiresIn: "30m",
  });
  const refreshToken = jwt.sign(payload, REFRESH_SECRET_KEY, {
    expiresIn: "7d",
  });

  res.status(201).json({
    user: {
      username: newUser.username,
    },
    accessToken,
    refreshToken,
  });
};

module.exports = registerUser;
