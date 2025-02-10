import '../styles/Login.css'
import InputField from './InputField'

const Login = () => {

  const login = async () => {

  }

  return (
    <div className='login-container'>
      <h2>Log in</h2>

      <form onSubmit={login}>
        <InputField type='username' placeholder='username' />
        <InputField type='password' placeholder='password' />
        <button type='submit'>Log in</button>
      </form>

      <div className='signup-prompt'>
        <a>{"Don't have an account? "}</a>
        <a href='#'>sign up</a>
      </div>
    </div>
  )
}

export default Login