import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../utils/api";

export default function Register() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const submit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/auth/register", data);

      alert("Registered Successfully");

      
      navigate("/login");

    } catch (err) {
      alert(err.response?.data || "Register Failed");
    }
  };

  return (
    <form onSubmit={submit}>
      <input
        placeholder="Name"
        onChange={e => setData({ ...data, name: e.target.value })}
      />

      <input
        placeholder="Email"
        onChange={e => setData({ ...data, email: e.target.value })}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={e => setData({ ...data, password: e.target.value })}
      />

      <button>Register</button>

     
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </form>
  );
}