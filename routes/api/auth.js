const express = require("express");

const { validateBody } = require("../../middlewares");
const { authSchema } = require("../../models/user");
const { registerUser, loginUser } = require("../../controllers/auth");

const router = express.Router();

router.post("/register", validateBody(authSchema), registerUser);
router.post("/login", validateBody(authSchema), loginUser)

module.exports = router;
