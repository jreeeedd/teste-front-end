import React from 'react'
import './Styled/reset.css'
import NavMenu from './Styled/Menu/NavMenu'
import NavLink from './Styled/Menu/NavLink'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Produtos from './Components/Produtos'
import Gerenciador from './Components/Gerenciador'
import { GlobalStorage } from './GlobalContext'

function App () {
  return (
    <BrowserRouter>
      <GlobalStorage>
        <NavMenu>
          <NavLink to='/'>Cardápio</NavLink>
          <NavLink to='/Gerenciador'>Gerenciador</NavLink>
        </NavMenu>
        <Routes>
          <Route path='' element={<Produtos />} />
          <Route path='/gerenciador' element={<Gerenciador />} />
        </Routes>
      </GlobalStorage>
    </BrowserRouter>
  )
}

export default App
