import { useState } from "react";
import api from "../utils/api";

export default function Register() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const register = async (e) => {
    e.preventDefault();

    try {
      await api.post("/auth/register", data);
      alert("Registered Successfully");
      window.location.href = "/login";
    } catch (err) {
      alert("Register failed");
    }
  };

  return (
    <form onSubmit={register}>
      <input placeholder="Name" onChange={e=>setData({...data,name:e.target.value})}/>
      <input placeholder="Email" onChange={e=>setData({...data,email:e.target.value})}/>
      <input placeholder="Password" type="password" onChange={e=>setData({...data,password:e.target.value})}/>
      <button>Register</button>
    </form>
  );
}