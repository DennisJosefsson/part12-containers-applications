const express = require('express')
const { Todo } = require('../mongo')
const router = express.Router()
const { incrAsync } = require('../redis')

/* GET todos listing. */
router.get('/', async (_, res) => {
  const todos = await Todo.find({})
  res.send(todos)
})

/* POST todo to listing. */
router.post('/', async (req, res) => {
  console.log(req.body)
  const todo = await Todo.create({
    text: req.body.text,
    done: false,
  })

  await incrAsync('added_todos')
  res.send(todo)
})

const singleRouter = express.Router()

const findByIdMiddleware = async (req, res, next) => {
  const { id } = req.params
  req.todo = await Todo.findById(id)
  if (!req.todo) return res.sendStatus(404)

  next()
}

/* DELETE todo. */
singleRouter.delete('/', async (req, res) => {
  await req.todo.delete()
  res.sendStatus(200)
})

/* GET todo. */
singleRouter.get('/', async (req, res) => {
  res.json(req.todo).status(200) // Implement this
})

/* PUT todo. */
singleRouter.put('/', async (req, res) => {
  const updatedTodo = await req.todo.updateOne({
    $set: { done: true },
    new: true,
  })
  res.json(updatedTodo).status(200) // Implement this
})

router.use('/:id', findByIdMiddleware, singleRouter)

module.exports = router
