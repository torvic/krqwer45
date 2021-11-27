import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
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
  const getId = (url) => {
    const urlSplitted = url.split('/')
    return parseInt(urlSplitted[5], 10)
  }
  return (
    <div>
      <h1>Personajes de Star Wars</h1>
      {dbPeople && (
        <div>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Genero</th>
              </tr>
            </thead>
            <tbody>
              {dbPeople.results.map((el) => (
                <tr key={el.name}>
                  <td>{getId(el.url)}</td>
                  <td>
                    <Link to={`/details/${getId(el.url)}`}>{el.name}</Link>
                  </td>
                  <td>{el.gender}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className='actions'>
            <button onClick={handlePrevious} disabled={!dbPeople.previous}>
              Atras
            </button>
            <button
              className='btn'
              onClick={handleNext}
              disabled={!dbPeople.next}
            >
              Siguiente
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Home
