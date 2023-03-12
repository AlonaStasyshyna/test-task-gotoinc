const { Todo } = require("../../models/todo");
const { HttpError } = require("../../helpers");

const getTodoById = async (req, res) => {
  const { id } = req.params;

  const result = await Todo.findById(id);

  if (!result) {
    throw HttpError(404);
  }

  res.status(200).json(result);
};

module.exports = getTodoById;
