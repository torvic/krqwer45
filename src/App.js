import React, { useEffect, useState } from 'react'

/// Modifica el componente para que se puedan agregar tareas, tachar y destacharlas y error de validacion en el input

const App = () => {
  const [dbPeople, setDbPeople] = useState(null)
  useEffect(() => {
    fetch('https://swapi.dev/api/people/?page=1')
      .then((res) => res.json())
      .then((data) => setDbPeople(data))
  }, [])
  const handleNext = () => {
    const urlNext = dbPeople && dbPeople.next
    console.log('next', urlNext)
    fetch(urlNext)
      .then((res) => res.json())
      .then((data) => setDbPeople(data))
  }
  const handlePrevious = () => {
    const urlPrevious = dbPeople && dbPeople.previous
    console.log('prev', urlPrevious)
    fetch(urlPrevious)
      .then((res) => res.json())
      .then((data) => setDbPeople(data))
  }
  return (
    <div>
      <h1>Paginacion API de Star Wars</h1>
      {dbPeople && (
        <div>
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Genero</th>
                <th>Año de Nacimiento</th>
                <th>Altura</th>
                <th>Peso</th>
              </tr>
            </thead>
            <tbody>
              {dbPeople.results.map((el) => (
                <tr key={el.name}>
                  <td>{el.name}</td>
                  <td>{el.gender}</td>
                  <td>{el.birth_year}</td>
                  <td>{el.height}</td>
                  <td>{el.mass}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className='actions'>
            <button onClick={handlePrevious} disabled={!dbPeople.previous}>
              Atras
            </button>
            <button className='btn' onClick={handleNext} disabled={!dbPeople.next}>
              Siguiente
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
