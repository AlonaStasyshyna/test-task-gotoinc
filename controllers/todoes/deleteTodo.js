const { Todo } = require("../../models/todo");
const { HttpError } = require("../../helpers");

const deleteTodo = async (req, res) => {
  const { id } = req.params;

  const result = await Todo.findByIdAndRemove(id);

  if (!result) {
    throw HttpError(404);
  }

  res.status(200).json({ message: "Delete success" });
};

module.exports = deleteTodo;
