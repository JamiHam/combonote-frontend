import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
      <a>Home page</a>
      <br />
      <Link to='/login'>Log in</Link>
      <br />
      <Link to='/documents'>My documents</Link>
      <br />
      <Link to='/table'>Table</Link>
    </div>
  )
}

export default Home