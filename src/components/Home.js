import { Link, Outlet } from 'react-router-dom';
import '../styles/home.css';

// to add later on if needed

function Home() {
  return (
    <div>
      <nav className="painting--navbar">
        <Link to="paintings/search"> Search </Link>
        {/* <Link to=":id"> List </Link> */}
        <Link to="paintings/add"> Add </Link>

        <Outlet />
      </nav>
    </div>
  );
}

export default Home;
