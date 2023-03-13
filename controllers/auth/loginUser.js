const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { HttpError } = require("../../helpers");
const { User } = require("../../models/user");

const { ACCESS_SECRET_KEY, REFRESH_SECRET_KEY } = process.env;

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  if (!user) {
    throw HttpError(401, "Name or password is wrong");
  }

  const passwordCompare = await bcrypt.compare(password, user.password);

  if (!passwordCompare) {
    throw HttpError(401, "Name or password is wrong");
  }

  const payload = {
    id: user._id,
  };

  const accessToken = jwt.sign(payload, ACCESS_SECRET_KEY, {
    expiresIn: "30m",
  });
  const refreshToken = jwt.sign(payload, REFRESH_SECRET_KEY, {
    expiresIn: "7d",
  });

  await User.findByIdAndUpdate(user._id, { accessToken, refreshToken });

  res.status(200).json({
    user: {
      username: user.username,
    },
    accessToken,
    refreshToken,
  });
};

module.exports = loginUser;
