const express = require("express");

const { authenticate, validateBody } = require("../../middlewares");
const { addGroupSchema } = require("../../models/group");
const {
  addGroup,
  deleteGroup,
  getGroupById,
  getUserGroups,
  updateGroup,
} = require("../../controllers/groups");

const router = express.Router();

router.get("/", authenticate, getUserGroups);
router.get("/:id", authenticate, getGroupById);
router.post("/", authenticate, validateBody(addGroupSchema), addGroup);
router.patch("/:id", authenticate, validateBody(addGroupSchema), updateGroup);
router.delete("/:id", authenticate, deleteGroup);

module.exports = router;
