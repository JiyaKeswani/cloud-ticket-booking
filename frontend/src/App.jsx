import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Events from "./pages/Events";
import MyBookings from "./pages/MyBookings";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Events />}
        />

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