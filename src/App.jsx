import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
