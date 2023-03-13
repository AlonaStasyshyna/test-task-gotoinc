const express = require("express");

const { authenticate, validateBody } = require("../../middlewares");
const { schemas } = require("../../models/todo");
const {
  addTodo,
  deleteTodo,
  getTodoById,
  getUserTodoes,
  updateTodo,
} = require("../../controllers/todoes");

const router = express.Router();

router.get("/", authenticate, getUserTodoes);
router.get("/:id", authenticate, getTodoById);
router.post("/", authenticate, validateBody(schemas.addTodoSchema), addTodo);
router.patch(
  "/:id",
  authenticate,
  validateBody(schemas.updateTodoSchema),
  updateTodo
);
router.delete("/:id", authenticate, deleteTodo);

module.exports = router;
