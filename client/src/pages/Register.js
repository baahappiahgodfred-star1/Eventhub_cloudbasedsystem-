import { useState } from "react";
import api from "../services/api";

function Register() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      await api.post("/auth/register", form);

      alert("Registration successful");

    } catch (err) {

      alert("Error");

    }
  };

  return (
    <div className="container mt-5">

      <h2>Register</h2>

      <form onSubmit={handleSubmit}>

        <input
          className="form-control mb-2"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />

        <input
          className="form-control mb-2"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          className="form-control mb-2"
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <button className="btn btn-primary">
          Register
        </button>

      </form>

    </div>
  );
}

export default Register;