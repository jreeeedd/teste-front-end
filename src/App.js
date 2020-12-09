import React from 'react'
import './Styled/reset.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Produtos from './Components/Produtos'
import Gerenciador from './Components/Gerenciador'
import { GlobalStorage } from './GlobalContext'

function App () {
  return (
    <BrowserRouter>
      <GlobalStorage>
        <Routes>
          <Route path='' element={<Produtos />} />
          <Route path='' element={<Gerenciador />} />
        </Routes>
      </GlobalStorage>
    </BrowserRouter>
  )
}

export default App
