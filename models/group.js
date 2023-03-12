const { Schema, model } = require("mongoose");

const { handleMongooseError } = require("../helpers");

const groupSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for group"],
    },
  },
  { versionKey: false }
);

groupSchema.post("save", handleMongooseError);

const Group = model("group", groupSchema);

module.exports = Group;
