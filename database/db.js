const { Sequelize } = require("sequelize");
require("dotenv").config();

const { DB_USERNAME, DB_PASSWORD, DB_PORT, DB_DATABASE } = process.env;

const sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
  dialect: "postgres",
  host: "localhost",
  port: DB_PORT,
  timezone: "+00:00",
});

module.exports = sequelize;
