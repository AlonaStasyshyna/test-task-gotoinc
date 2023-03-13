const jwt = require("jsonwebtoken");

const { HttpError } = require("../../helpers");
const { User } = require("../../models/user");

const { ACCESS_SECRET_KEY, REFRESH_SECRET_KEY } = process.env;

const refreshUserToken = async (req, res) => {
  const { refreshToken } = req.body;

  try {
    const { id } = jwt.verify(refreshToken, REFRESH_SECRET_KEY);
    const isExist = await User.findOne({ refreshToken });

    if (!isExist) {
      throw HttpError(403, "Token invalid");
    }

    const payload = {
      id,
    };

    const accessToken = jwt.sign(payload, ACCESS_SECRET_KEY, {
      expiresIn: "30m",
    });

    res.status(200).json({
      accessToken,
      refreshToken,
    });
  } catch (error) {
    throw HttpError(403, error.message);
  }
};

module.exports = refreshUserToken;
