const { Todo } = require("../../models/todo");
const { HttpError } = require("../../helpers");

const updateTodo = async (req, res) => {
  const { id } = req.params;

  const result = await Todo.findByIdAndUpdate(id, req.body, { new: true });

  if (!result) {
    throw HttpError(404);
  }

  res.status(200).json(result);
};

module.exports = updateTodo;
