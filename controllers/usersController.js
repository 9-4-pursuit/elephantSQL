const usersQueries = require("../queries/users");

async function getUsers(req, res) {
  try {
    const users = await usersQueries.getUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error });
  }
}

module.exports = {
  getUsers,
};
