import { useState } from 'react'
import { useDispatch } from 'react-redux'
import loginService from '../services/login'
import { setUser } from '../reducers/userReducer'

const LoginForm = () => {
  const dispatch = useDispatch()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const login = async (event) => {
    event.preventDefault()
    const response = await loginService.login(username, password)
    dispatch(setUser(response))
  }

  return (
    <form onSubmit={login}>
      <input
        value={username}
        onChange={handleUsernameChange}
        type='username'
        placeholder='username'
      />
      <input
        value={password}
        onChange={handlePasswordChange}
        type='password'
        placeholder='password'
      />
      <button type='submit'>Log in</button>
    </form>
  )
}

export default LoginForm