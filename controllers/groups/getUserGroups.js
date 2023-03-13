const { Group } = require("../../models/group");

const getUserGroups = async (req, res) => {
  const { _id: owner } = req.user;

  const result = await Group.find({ owner }, "-owner");

  res.status(200).json(result);
};

module.exports = getUserGroups;
