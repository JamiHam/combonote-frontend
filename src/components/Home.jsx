import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
      <a>Home page</a>
      <br />
      <Link to='/login'>Log in</Link>
      <br />
      <Link to='/notes'>Notes</Link>
    </div>
  )
}

export default Home