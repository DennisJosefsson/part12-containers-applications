const { Todo } = require('../mongo')
const { getAsync } = require('../redis')
const { setAsync } = require('../redis')
const express = require('express')
const router = express.Router()

const setCount = async () => {
  const count = await Todo.countDocuments()

  await setAsync('added_todos', count)
}

setCount()

router.get('/', async (req, res) => {
  const count = await getAsync('added_todos')
  res.send({ added_todos: Number(count) }).status(200)
})

module.exports = router
