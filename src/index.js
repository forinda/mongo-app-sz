const express = require("express");
const config = require("./config");
const db = require("./db");
const Todo = require("./db/schema/todo");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  try {
    const todos = await Todo.find({});
    console.log(todos);

    return res.json(todos);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

app.post("/", async (req, res) => {
  try {
    const todo = new Todo({
      title: req.body.title,
      isCompleted: false,
    });

    await todo.save();

    return res.json(todo);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

app.listen(config.PORT, () => {
  const message = `Server is running on http://localhost:${config.PORT}`;
  console.info(message);
});
