const express = require('express');
const router = express.Router();
const Todo = require('../../models/Todo');

// @route GET api/ todos
// @desc List all todos

router.get('/', (req, res) => {
  Todo.find((err, todos) => {
    if (err) {
      console.log(err);
    } else {
      res.json(todos);
    }
  });
});

// @route POST api/todos/add
// @desc Create new todo

router.post('/add', async (req, res) => {
  try {
    let todo = new Todo(req.body);
    await todo.save().then(todo => {
      res.status(200).json({ todo: 'todo added successfully' });
    });
  } catch (err) {
    console.error(err.message);
    res.status(400).send('adding new todo failed');
  }
});

module.exports = router;
