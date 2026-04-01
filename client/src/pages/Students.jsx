import { useEffect, useState } from "react";
import api from "../utils/api";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";

export default function Students() {
  const [data, setData] = useState([]);

  const fetchStudents = async () => {
    try {
      const res = await api.get("/students", {
        headers: { Authorization: localStorage.getItem("token") }
      });
      setData(res.data);
    } catch (err) {
      alert("Failed to load students");
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const deleteStudent = async (id) => {
    try {
      await api.delete(`/students/${id}`, {
        headers: { Authorization: localStorage.getItem("token") }
      });

      alert("Deleted");
      fetchStudents(); 
    } catch (err) {
      alert("Delete failed");
    }
  };

  return (
    <>
      <Navbar />

      <div className="container">
        <Sidebar />

        <div className="content">
          <h2>Students</h2>

          {data.length === 0 ? (
            <p>No students found</p>
          ) : (
            data.map((s) => (
              <div key={s.id} className="card">
                <h3>{s.name}</h3>
                <p>Email: {s.email}</p>
                <p>Course: {s.course}</p>
                <p>Phone: {s.phone}</p>

                <button className="delete" onClick={() => deleteStudent(s.id)}>
                  Delete
                </button>
                <Link to={`/edit/${s.id}`}>
                  <button className="edit">Edit</button>
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}