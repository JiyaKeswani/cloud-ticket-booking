import { Link } from "react-router-dom";

function Navbar() {

  function logout() {
    localStorage.removeItem("token");
    window.location.href = "/login";
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">

        <Link
          className="navbar-brand"
          to="/"
        >
          ☁️ SkyPass | Book Smarter. Experience Better.
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

          <button
            className="btn btn-light btn-sm ms-3"
            onClick={logout}
          >
            Logout
          </button>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;