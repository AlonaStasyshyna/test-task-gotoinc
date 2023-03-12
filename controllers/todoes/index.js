const { ctrlWrapper } = require("../../helpers");
const addTodo = require("./addTodo");
const deleteTodo = require("./deleteTodo");
const getTodoById = require("./getTodoById");
const getUserTodoes = require("./getUserTodoes");
const updateTodo = require("./updateTodo");

module.exports = {
  addTodo: ctrlWrapper(addTodo),
  deleteTodo: ctrlWrapper(deleteTodo),
  getTodoById: ctrlWrapper(getTodoById),
  getUserTodoes: ctrlWrapper(getUserTodoes),
  updateTodo: ctrlWrapper(updateTodo),
};
