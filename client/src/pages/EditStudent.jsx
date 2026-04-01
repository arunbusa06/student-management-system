import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../utils/api";

export default function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    course: "",
    phone: ""
  });

  useEffect(() => {
    api.get("/students", {
      headers: { Authorization: localStorage.getItem("token") }
    }).then(res => {
      const student = res.data.find(s => s.id == id);
      setData(student);
    });
  }, [id]);

  const update = async (e) => {
    e.preventDefault();

    await api.put(`/students/${id}`, data, {
      headers: { Authorization: localStorage.getItem("token") }
    });

    alert("Updated Successfully");
    navigate("/students");
  };

  return (
    <form onSubmit={update}>
      <input value={data.name} onChange={e=>setData({...data,name:e.target.value})}/>
      <input value={data.email} onChange={e=>setData({...data,email:e.target.value})}/>
      <input value={data.course} onChange={e=>setData({...data,course:e.target.value})}/>
      <input value={data.phone} onChange={e=>setData({...data,phone:e.target.value})}/>
      <button>Update</button>
    </form>
  );
}