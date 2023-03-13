const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleMongooseError } = require("../helpers");

const groupSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for group"],
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false }
);

groupSchema.post("save", handleMongooseError);

const addGroupSchema = Joi.object({
  name: Joi.string().required(),
});

const Group = model("group", groupSchema);

module.exports = {
  Group,
  addGroupSchema,
};
