import { useState } from "react";
import api from "../Services/api";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] =
    useState("");
  const [password, setPassword] =
    useState("");
    const navigate = useNavigate();

  async function handleRegister() {
    try {
      await api.post(
        "/auth/register",
        {
          name,
          email,
          password
        }
      );

      alert(
  "Registration successful! Please login."
);

navigate("/login");

      setName("");
      setEmail("");
      setPassword("");

    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
        "Registration failed"
      );
    }
  }

  return (
    <div className="container mt-5">

      <h2>Join SkyPass</h2>

      <input
        className="form-control mt-3"
        placeholder="Name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

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
        className="btn btn-success mt-3"
        onClick={handleRegister}
      >
        Register
      </button>

    </div>
  );
}

export default Register;