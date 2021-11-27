import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
const Details = () => {
  const [dbDetails, setDbDetails] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${id}/`)
      .then((res) => res.json())
      .then((data) => setDbDetails(data))
  }, [])

  const getId = (url) => {
    const urlSplitted = url.split('/')
    return parseInt(urlSplitted[5], 10)
  }
  return (
    <div>
      {dbDetails && (
        <div>
          <h2>Detalles del personaje {dbDetails.name} </h2>
          <ul>
            <li>Nombre: {dbDetails.name}</li>
            <li>Estatura: {dbDetails.height}</li>
            <li>Color de Ojos: {dbDetails.eye_color}</li>
            <li>
              Peliculas:
              <ul>
                {dbDetails.films.map((el) => (
                  <li key={el}>
                    <Link to={`/details-films/${getId(el)}`}>Ver pelicula</Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              Vehiculos:
              <ul>
                {dbDetails.vehicles.map((el) => (
                  <li key={el}>
                    <Link to={`/details-vehicles/${getId(el)}`}>
                      Ver vehiculo
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Details
