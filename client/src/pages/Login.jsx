import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../utils/api";

export default function Login() {
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const login = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", data);
      localStorage.setItem("token", res.data.token);
      alert("Login successful");
      window.location.href = "/students";
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <form onSubmit={login}>
      <h2>Login</h2>
      <input placeholder="Email" onChange={e => setData({...data,email:e.target.value})}/>
      <input placeholder="Password" type="password" onChange={e => setData({...data,password:e.target.value})}/>
      <button>Login</button>
      <div style={{ marginTop: "1rem" }}>
        <Link to="/register">Don't have an account? Register here</Link>
      </div>
    </form>
  );
}