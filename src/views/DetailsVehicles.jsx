import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const DetailsVehicles = () => {
  const [dbDetails, setDbDetails] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://swapi.dev/api/vehicles/${id}/`)
      .then((res) => res.json())
      .then((data) => setDbDetails(data))
  }, [])
  return (
    <div>
      {dbDetails && (
        <div>
          <h1>Vehiculo "{dbDetails.name}"</h1>
          <ul>
            <li>Modelo: {dbDetails.model}</li>
            <li>Fabricante: {dbDetails.manufacturer}</li>
            <li>Largo: {dbDetails.length}</li>
            <li>Capacidad de cargo: {dbDetails.cargo_capacity}</li>
						<li>Clase de vehiculo: {dbDetails.vehicle_class}</li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default DetailsVehicles
