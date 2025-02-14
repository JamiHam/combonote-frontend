import '../../styles/Login.css'
import LoginForm from './LoginForm'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Login = () => {
  const navigate = useNavigate()
  const user = useSelector(state => state.user)

  useEffect(() => {
    if (user) navigate('/')
  }, [user])

  return (
    <div className='login-container'>
      <h2>Log in</h2>

      <LoginForm />

      <div className='signup-prompt'>
        <a>{"Don't have an account? "}</a>
        <a href='#'>sign up</a>
      </div>
    </div>
  )
}

export default Login