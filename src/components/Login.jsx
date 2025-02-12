import '../styles/Login.css'
import LoginForm from './LoginForm'

const Login = () => {
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