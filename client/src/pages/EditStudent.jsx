import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../utils/api";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

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
    api.get("/students")
      .then(res => {
        const student = res.data.find(s => s.id === Number(id));
        if (student) setData(student);
      });
  }, [id]);

  const update = async (e) => {
    e.preventDefault();

    await api.put(`/students/${id}`, data);
    alert("Updated");
    navigate("/students");
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <Sidebar />
        <div className="content">
          <form onSubmit={update}>
            <h2>Edit Student</h2>
            <input value={data.name} onChange={e=>setData({...data,name:e.target.value})}/>
            <input value={data.email} onChange={e=>setData({...data,email:e.target.value})}/>
            <input value={data.course} onChange={e=>setData({...data,course:e.target.value})}/>
            <input value={data.phone} onChange={e=>setData({...data,phone:e.target.value})}/>
            <button className="edit">Update</button>
          </form>
        </div>
      </div>
    </>
  );
}