const { Group } = require("../../models/group");

const getUserGroups = async (req, res) => {
  const { _id: userId } = req.user;

  const result = await Group.find({ userId }, "-userId");

  res.status(200).json(result);
};

module.exports = getUserGroups;
