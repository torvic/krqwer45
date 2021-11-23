import React, { Component } from 'react'

/// Modifica el componente para que se puedan agregar tareas, tachar y destacharlas y error de validacion en el input

class App extends Component {
  constructor() {
    super()
    this.state = {
      tasks: [
        { id: 1, name: 'Sacar la ropa', done: false },
        { id: 2, name: 'Hacer la cama', done: true },
        { id: 3, name: 'Leer un rato', done: false },
      ],
      newTask: '',
      error: null,
    }
  }
  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.newTask.length === 0) {
      this.setState({ ...this.state, error: true })
    } else {
      this.setState({
        tasks: [
          ...this.state.tasks,
          {
            id: this.state.tasks.length + 1,
            name: this.state.newTask,
            done: false,
          },
        ],
        newTask: '',
      })
    }
  }
  handleChange = (e) => {
    this.setState({
      ...this.state,
      newTask: e.target.value,
      error: null,
    })
  }
  handleDelete = (task) => {
    console.log('delete')
    const taskFiltered = this.state.tasks.filter((el) => el.id !== task.id)
    this.setState({ ...this.state, tasks: taskFiltered })
  }
  toggleTask = (task) => {
    const updateTask = { ...task, done: !task.done }
    this.setState({
      ...this.state,
      tasks: this.state.tasks.map((el) =>
        el.id === task.id ? updateTask : el
      ),
    })
  }
  render() {
    return (
      <div className='wrapper'>
        <div className='list'>
          <h3>Por hacer:</h3>
          {this.state.tasks.length ? (
            <ul className='todo'>
              {this.state.tasks.map((task, index) => (
                <div className='item' key={task.id}>
                  <li
                    onClick={() => this.toggleTask(task)}
                    className={task.done ? 'done' : null}
                  >
                    {task.name}
                  </li>
                  <button
                    className='item__button'
                    onClick={() => this.handleDelete(task)}
                  >
                    X
                  </button>
                </div>
              ))}
            </ul>
          ) : (
            <p>No hay tareas aun ...</p>
          )}
          <form onSubmit={this.handleSubmit}>
            <input
              className={this.state.error && 'error'}
              type='text'
              onChange={this.handleChange}
              id='new-task'
              placeholder='Ingresa una tarea y oprime Enter'
              value={this.state.newTask}
            />
          </form>
        </div>
      </div>
    )
  }
}

export default App
