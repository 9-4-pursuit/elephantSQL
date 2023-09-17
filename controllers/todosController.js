const todosQueries = require("../queries/todos");

async function getTodos(req, res) {
  try {
    const todos = await todosQueries.getTodos();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error });
  }
}

module.exports = {
  getTodos,
};
