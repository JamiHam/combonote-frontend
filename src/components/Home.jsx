import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
      <Link to='/notes'>notes</Link>
      <a>Home page</a>
    </div>
  )
}

export default Home