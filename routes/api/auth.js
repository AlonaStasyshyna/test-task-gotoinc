const express = require("express");

const { authenticate, validateBody } = require("../../middlewares");
const { authSchema, refreshSchema } = require("../../models/user");
const {
  registerUser,
  loginUser,
  logoutUser,
  refreshUserToken,
} = require("../../controllers/auth");

const router = express.Router();

router.post("/register", validateBody(authSchema), registerUser);
router.post("/login", validateBody(authSchema), loginUser);
router.get("/logout", authenticate, logoutUser);
router.post("/refresh", validateBody(refreshSchema), refreshUserToken);

module.exports = router;
