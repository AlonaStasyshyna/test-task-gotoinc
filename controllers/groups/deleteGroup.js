const { Group } = require("../../models/group");
const { HttpError } = require("../../helpers");

const deleteGroup = async (req, res) => {
  const { id } = req.params;

  const result = await Group.findByIdAndRemove(id);

  if (!result) {
    throw HttpError(404);
  }

  res.status(200).json({ message: "Delete success" });
};

module.exports = deleteGroup;
