const { ctrlWrapper } = require("../../helpers");
const addGroup = require("./addGroup");
const deleteGroup = require("./deleteGroup");
const getGroupById = require("./getGroupById");
const getUserGroups = require("./getUserGroups");
const updateGroup = require("./updateGroup");

module.exports = {
  addGroup: ctrlWrapper(addGroup),
  deleteGroup: ctrlWrapper(deleteGroup),
  getGroupById: ctrlWrapper(getGroupById),
  getUserGroups: ctrlWrapper(getUserGroups),
  updateGroup: ctrlWrapper(updateGroup),
};
