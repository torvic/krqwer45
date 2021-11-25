import React, { Component, useEffect, useState } from 'react'

/// Modifica el componente para que se puedan agregar tareas, tachar y destacharlas y error de validacion en el input

const App = () => {
  const [tasks, setTasks] = useState([])
  const [error, setError] = useState(null)
  const [newTask, setNewTask] = useState('')
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((data) => setTasks(data))
  }, [])
  const handleSubmit = (e) => {
    e.preventDefault()
    if (newTask.length === 0) {
      setError(true)
    } else {
      setTasks([
        ...tasks,
        { id: tasks.length + 2, title: newTask, completed: false },
      ])
			setNewTask('')
    }
  }
  const handleChange = (e) => {
    setNewTask(e.target.value)
  }
  const handleDelete = (task) => {
    const taskDeleted = tasks.filter((el) => el.id !== task.id)
    setTasks(taskDeleted)
  }
  const toggleTask = (task) => {
    const updateTask = { ...task, completed: !task.completed }
    const tasksMapper = tasks.map((el) => (el.id === task.id ? updateTask : el))
    setTasks(tasksMapper)
  }
  return (
    <div className='wrapper'>
      <div className='list'>
        <h3>Por hacer:</h3>
        {tasks.length ? (
          <ul className='todo'>
            {tasks.map((task, index) => (
              <div className='item' key={task.id}>
                <li
                  onClick={() => toggleTask(task)}
                  className={task.completed ? 'done' : null}
                >
                  {task.title}
                </li>
                <button
                  className='item__button'
                  onClick={() => handleDelete(task)}
                >
                  X
                </button>
              </div>
            ))}
          </ul>
        ) : (
          <p>No hay tareas aun ...</p>
        )}
        <form onSubmit={handleSubmit}>
          <input
            className={error && 'error'}
            type='text'
            onChange={handleChange}
            id='new-task'
            placeholder='Ingresa una tarea y oprime Enter'
            value={newTask}
          />
        </form>
      </div>
    </div>
  )
}

export default App
