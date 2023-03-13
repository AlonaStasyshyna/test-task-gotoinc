const { Todo } = require("../../models/todo");

const getUserTodoes = async (req, res) => {
  const { _id: userId } = req.user;

  const result = await Todo.find({ userId }, "-userId");

  res.status(200).json(result);
};

module.exports = getUserTodoes;
