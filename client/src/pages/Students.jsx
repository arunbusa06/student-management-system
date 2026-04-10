import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import api from "../utils/api";

export default function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    api.get("/students")
      .then(res => setStudents(res.data))
      .catch(err => console.log(err));
  }, []);

  const deleteStudent = async (id) => {
    await api.delete(`/students/${id}`);
    setStudents(students.filter(s => s.id !== id));
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <Sidebar />
        <div className="content">
          <h2>Students</h2>

          {students.map(s => (
            <div key={s.id} className="card">
              <h3 style={{ textTransform: "uppercase" }}>{s.name}</h3>
              <div style={{ textAlign: "center", marginBottom: "10px" }}>
                <p>Email: {s.email}</p>
                <p>Course: {s.course}</p>
                <p>Phone: {s.phone}</p>
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <button className="delete" onClick={() => deleteStudent(s.id)}>Delete</button>
                <Link to={`/edit/${s.id}`}>
                  <button className="edit">Edit</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}