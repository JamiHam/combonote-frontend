import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login/Login'
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
