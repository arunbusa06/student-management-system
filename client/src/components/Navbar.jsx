import { Link } from "react-router-dom";

export default function Navbar() {

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="navbar">
      <h2>🎓 Student Management System</h2>

      <div>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/students">Students</Link>
        <Link to="/add-student">Add Student</Link>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}