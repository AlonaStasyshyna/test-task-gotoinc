const { Group } = require("../../models/group");
const { HttpError } = require("../../helpers");

const getGroupById = async (req, res) => {
  const { id } = req.params;

  const result = await Group.findById(id);

  if (!result) {
    throw HttpError(404);
  }

  res.status(200).json(result);
};

module.exports = getGroupById;
