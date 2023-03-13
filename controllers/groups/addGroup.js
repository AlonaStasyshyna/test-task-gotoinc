const { Group } = require("../../models/group");

const addGroup = async (req, res) => {
  const { _id: userId } = req.user;

  const result = await Group.create({ ...req.body, userId });

  res.status(201).json(result);
};

module.exports = addGroup;
