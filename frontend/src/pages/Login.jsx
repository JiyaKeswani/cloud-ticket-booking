function Login() {
  return (
    <div className="container mt-5">

      <h2>☁️ SkyPass Login</h2>

      <input
        className="form-control mt-3"
        placeholder="Email"
      />

      <input
        type="password"
        className="form-control mt-3"
        placeholder="Password"
      />

      <button
        className="btn btn-primary mt-3"
      >
        Login
      </button>

    </div>
  );
}

export default Login;