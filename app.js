const express = require("express");
const app = express();
const usersController = require("./controllers/usersController");
const todosController = require("./controllers/todosController");

app.use(express.json());

app.get("/users", usersController.getUsers);
app.get("/todos", todosController.getTodos);

app.get("/", (req, res) => {
  res.send("Welcome to test elephant");
});

app.get("*", (req, res) => {
  res.status(404).json({ error: "Page Not Found" });
});

module.exports = app;
