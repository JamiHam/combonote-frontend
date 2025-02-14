import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login/Login'
import Home from './components/Home'
import Notes from './components/Notes/Notes'

import { useEffect } from 'react'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/notes' element={<Notes />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
