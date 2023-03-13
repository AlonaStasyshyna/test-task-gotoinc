const { Group } = require("../../models/group");

const addGroup = async (req, res) => {
  const { _id: owner } = req.user;

  const result = await Group.create({ ...req.body, owner });

  res.status(201).json(result);
};

module.exports = addGroup;
