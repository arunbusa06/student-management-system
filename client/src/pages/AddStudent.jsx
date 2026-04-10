import { useState } from "react";
import api from "../utils/api";
import { useNavigate } from "react-router-dom";

export default function AddStudent() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    course: "",
    phone: ""
  });

  const add = async (e) => {
    e.preventDefault();

    await api.post("/students", data);
    alert("Added");
    navigate("/students");
  };

  return (
    <form onSubmit={add}>
      <h2>Add Student</h2>
      <input placeholder="Name" onChange={e=>setData({...data,name:e.target.value})}/>
      <input placeholder="Email" onChange={e=>setData({...data,email:e.target.value})}/>
      <input placeholder="Course" onChange={e=>setData({...data,course:e.target.value})}/>
      <input placeholder="Phone" onChange={e=>setData({...data,phone:e.target.value})}/>
      <button>Add</button>
    </form>
  );
}