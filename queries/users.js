const db = require("../db/dbConfig");

function getUsers() {
  return db.any("SELECT * FROM users");
}

module.exports = {
  getUsers,
};
