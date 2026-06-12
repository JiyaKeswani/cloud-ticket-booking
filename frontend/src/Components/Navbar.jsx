import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">

        <Link
          className="navbar-brand"
          to="/"
        >
          ☁️ SkyPass
        </Link>

        <div className="navbar-nav ms-auto">

          <Link
            className="nav-link"
            to="/events"
          >
            Events
          </Link>

          <Link
            className="nav-link"
            to="/bookings"
          >
            My Bookings
          </Link>

          <Link
            className="nav-link"
            to="/login"
          >
            Login
          </Link>

          <Link
            className="nav-link"
            to="/register"
          >
            Register
          </Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;