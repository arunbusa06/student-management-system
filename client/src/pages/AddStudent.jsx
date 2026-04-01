import { useState } from "react";
import api from "../utils/api";

export default function AddStudent() {
  const [data, setData] = useState({
    name: "",
    email: "",
    course: "",
    phone: ""
  });

  const submit = async (e) => {
    e.preventDefault();

    await api.post("/students", data, {
      headers: { Authorization: localStorage.getItem("token") }
    });

    alert("Student Added");
  };

  return (
    <form onSubmit={submit}>
      <input placeholder="Name" onChange={e=>setData({...data,name:e.target.value})}/>
      <input placeholder="Email" onChange={e=>setData({...data,email:e.target.value})}/>
      <input placeholder="Course" onChange={e=>setData({...data,course:e.target.value})}/>
      <input placeholder="Phone" onChange={e=>setData({...data,phone:e.target.value})}/>
      <button>Add</button>
    </form>
  );
}