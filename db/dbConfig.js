const pgp = require("pg-promise")();

require("dotenv").config();

const connectionString = process.env.DATABASE_URL;
const db = pgp(connectionString);

module.exports = db;
