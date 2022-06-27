const { Sequelize } = require("sequelize");
require("dotenv").config();

let DATABASE_URL = `postgresql://${process.env.USERNAME}:${process.env.PASSWORD}@${process.env.HOST}:${process.env.DB_PORT}/${process.env.DATABASE}?sslmode=verify-full&options=--cluster%3D${process.env.ROUTING_ID}`;

const db = new Sequelize(DATABASE_URL);

(async () => {
  try {
    // establish connection
    await db.authenticate();
    console.log("Connection to database has been established successfully.");
    // sync/initialize tables
    await db.sync();
  } catch (error) {
    console.error("Unable to connect to the database: ", error);
  }
})();

module.exports = db;
