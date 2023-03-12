const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleMongooseError } = require("../helpers");

const todoSchema = new Schema(
  {
    text: {
      type: String,
      required: [true, "Set text for todo"],
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    group: {
      type: Schema.Types.String,
      ref: "group",
      default: "Not sorted",
    },
    subtasks: {
      type: Array,
    },
  },
  { versionKey: false }
);

todoSchema.post("save", handleMongooseError);

const addTodoSchema = Joi.object({
  text: Joi.string().required(),
  isCompleted: Joi.boolean(),
  group: Joi.string(),
  subtasks: Joi.array(),
});

const updateTodoSchema = Joi.object({
  text: Joi.string(),
  isCompleted: Joi.boolean(),
  group: Joi.string(),
  subtasks: Joi.array(),
});

const schemas = {
  addTodoSchema,
  updateTodoSchema,
};

const Todo = model("todo", todoSchema);

module.exports = {
  Todo,
  schemas,
};
