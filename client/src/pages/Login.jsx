import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../utils/api";

export default function Login() {
  const [data, setData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", data);

      localStorage.setItem("token", res.data.token);

      alert("Login Success");

      navigate("/dashboard");

    } catch (err) {
      alert(err.response?.data || "Login Failed");
    }
  };

  return (
    <form onSubmit={submit}>
      <input 
        placeholder="Email"
        onChange={e => setData({ ...data, email: e.target.value })}
      />

      <input 
        type="password"
        placeholder="Password"
        onChange={e => setData({ ...data, password: e.target.value })}
      />

      <button>Login</button>

      
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </form>
  );
}