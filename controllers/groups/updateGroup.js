const { Group } = require("../../models/group");
const { HttpError } = require("../../helpers");

const updateGroup = async (req, res) => {
  const { id } = req.params;

  const result = await Group.findByIdAndUpdate(id, req.body, { new: true });

  if (!result) {
    throw HttpError(404);
  }

  res.status(200).json(result);
};

module.exports = updateGroup;
