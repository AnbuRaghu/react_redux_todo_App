import React, { useState } from 'react'
import './TodoInput.css'

export default function TodoInput({ createTodo }) {
  const [task, setTask] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    createTodo(task)
  }
  return (
    <form className="TodoInput" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Text"
        id="task"
        name="task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      ></input>
      <button>Add Task</button>
    </form>
  )
}
