import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Details from './views/Details'
import DetailsFilms from './views/DetailsFilms'
import DetailsVehicles from './views/DetailsVehicles'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/details-films/:id' element={<DetailsFilms />} />
        <Route path='/details-vehicles/:id' element={<DetailsVehicles />} />
      </Routes>
    </Router>
  )
}

export default App
