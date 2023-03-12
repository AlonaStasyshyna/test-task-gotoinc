const express = require("express");

const { validateBody } = require("../../middlewares");
const { schemas } = require("../../models/todo");
const {
  addTodo,
  deleteTodo,
  getTodoById,
  getUserTodoes,
  updateTodo,
} = require("../../controllers/todoes");

const router = express.Router();

router.get("/", getUserTodoes);
router.get("/:id", getTodoById);
router.post("/", validateBody(schemas.addTodoSchema), addTodo);
router.patch("/:id", validateBody(schemas.updateTodoSchema), updateTodo);
router.delete("/:id", deleteTodo);

module.exports = router;
