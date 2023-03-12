const { Todo } = require("../../models/todo");

const getUserTodoes = async (req, res) => {
  const { _id: owner } = req.user;

  const result = await Todo.find({ owner }, "-owner");

  res.status(200).json(result);
};

module.exports = getUserTodoes;
