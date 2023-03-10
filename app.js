const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const sequelize = require("./database/db");

const groupsRouter = require("./routes/api/groups");
const todoesRouter = require("./routes/api/todoes");
const usersRouter = require("./routes/api/users");

const connectToPostgres = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

connectToPostgres();

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/groups", groupsRouter);

app.use("/api/todoes", todoesRouter);

app.use("/api/users", usersRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
