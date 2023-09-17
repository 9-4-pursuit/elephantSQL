const db = require("../db/dbConfig");

function getTodos() {
  return db.any("SELECT * FROM todos");
}

module.exports = {
  getTodos,
};
