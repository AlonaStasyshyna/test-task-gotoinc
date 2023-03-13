const express = require("express");

const { validateBody } = require("../../middlewares");
const { addGroupSchema } = require("../../models/group");
const {
  addGroup,
  deleteGroup,
  getGroupById,
  getUserGroups,
  updateGroup,
} = require("../../controllers/groups");

const router = express.Router();

router.get("/", getUserGroups);
router.get("/:id", getGroupById);
router.post("/", validateBody(addGroupSchema), addGroup);
router.patch("/:id", validateBody(addGroupSchema), updateGroup);
router.delete("/:id", deleteGroup);

module.exports = router;
