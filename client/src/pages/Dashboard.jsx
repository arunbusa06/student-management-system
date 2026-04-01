import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import api from "../utils/api";

export default function Dashboard() {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  // ✅ SAME courses list
  const courses = [
    "BCA",
    "BBA",
    "MCA",
    "B.Tech (Computer)",
    "B.Tech (IT)",
    "B.Tech (Mechanical)",
    "B.Tech (Civil)",
    "B.Tech (Electrical)",
    "B.Tech (EC)",
    "MBA",
    "Diploma"
  ];

  useEffect(() => {
    api.get("/students", {
      headers: { Authorization: localStorage.getItem("token") }
    }).then(res => setStudents(res.data));
  }, []);

  return (
    <>
      <Navbar />

      <div className="container">
        <Sidebar />

        <div className="content">
          <h1>Dashboard</h1>

          <div className="stats">

            <div className="stat-card" onClick={() => navigate("/students")}>
              <h3>Total Students</h3>
              <p>{students.length}</p>
            </div>

            <div className="stat-card" onClick={() => navigate("/courses")}>
              <h3>Courses</h3>
              <p>{courses.length}</p> {/* ✅ dynamic */}
            </div>

            <div className="stat-card" onClick={() => navigate("/users")}>
              <h3>Active Users</h3>
              <p>1</p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}