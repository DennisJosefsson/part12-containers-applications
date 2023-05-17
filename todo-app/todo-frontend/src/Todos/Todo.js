const Todo = ({ todo }) => {
  return (
    <div className="todo">
      <p>Thing to do: {todo.text}</p> <p>Done? {todo.done ? 'Yes' : 'No'}</p>
    </div>
  )
}

export default Todo
