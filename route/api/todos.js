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

// @route GET api/todos/:id
// @desc Find todo by id

router.get('/:id', async (req, res) => {
  try {
    let id = req.params.id;
    await Todo.findById(id, (err, todo) => {
      if (err) return res.status(400).json({ msg: 'Wrong data' });

      res.json(todo);
    });
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
