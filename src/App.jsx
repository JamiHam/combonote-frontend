import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login/Login'
import Home from './components/Home'
import Documents from './components/Documents/Documents'
import Table from './components/Table/Table'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/documents' element={<Documents />} />
        <Route path='/table' element={<Table />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
