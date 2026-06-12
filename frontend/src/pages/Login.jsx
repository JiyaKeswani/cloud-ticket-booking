import { useState } from "react";
import api from "../Services/api";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");
    const navigate = useNavigate();

  async function handleLogin() {
    try {
      const response = await api.post(
        "/auth/login",
        {
          email,
          password
        }
      );

      localStorage.setItem(
        "token",
        response.data.token
      );

      alert("Login successful!");
      navigate("/events");

    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
        "Login failed"
      );
    }
  }

  return (
    <div className="container mt-5">

      <h2>☁️ SkyPass Login</h2>

      <input
        className="form-control mt-3"
        placeholder="Email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <input
        type="password"
        className="form-control mt-3"
        placeholder="Password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <button
        className="btn btn-primary mt-3"
        onClick={handleLogin}
      >
        Login
      </button>

    </div>
  );
}

export default Login;