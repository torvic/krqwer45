import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const DetailsFilms = () => {
  const [dbDetails, setDbDetails] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://swapi.dev/api/films/${id}/`)
      .then((res) => res.json())
      .then((data) => setDbDetails(data))
  }, [])
  return (
    <div>
      {dbDetails && (
        <div>
          <h1>Pelicula "{dbDetails.title}"</h1>
					<ul>
						<li>Director: {dbDetails.director}</li>
						<li>Prouctor: {dbDetails.producer}</li>
						<li>Fecha de Lanzamiento: {dbDetails.release_date}</li>
					</ul>
          <p>{dbDetails.opening_crawl}</p>
        </div>
      )}
    </div>
  )
}

export default DetailsFilms
