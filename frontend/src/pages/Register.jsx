function Register() {
  return (
    <div className="container mt-5">

      <h2>Join SkyPass</h2>

      <input
        className="form-control mt-3"
        placeholder="Name"
      />

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
        className="btn btn-success mt-3"
      >
        Register
      </button>

    </div>
  );
}

export default Register;