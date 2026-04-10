import { useState } from "react";
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
      console.error(err);
      alert("Login failed");
    }
  };

  return (
    <form onSubmit={login}>
      <input
        placeholder="Email"
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />
      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />
      <button>Login</button>
    </form>
  );
}