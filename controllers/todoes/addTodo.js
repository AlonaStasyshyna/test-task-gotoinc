const { Todo } = require("../../models/todo");

const addTodo = async (req, res) => {
  const { _id: userId } = req.user;

  const result = await Todo.create({ ...req.body, userId });

  res.status(201).json(result);
};

module.exports = addTodo;
