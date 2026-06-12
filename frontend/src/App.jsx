import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Events from "./pages/Events";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyBookings from "./pages/MyBookings";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <div className="container mt-3">
        <p className="text-muted">
          Book Smarter. Experience Better.
        </p>
      </div>

      <Routes>
        <Route
          path="/events"
          element={<Events />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/bookings"
          element={<MyBookings />}
        />
      </Routes>

    </BrowserRouter>
  );
}

export default App;