import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/students">Students</Link>
      <Link to="/add-student">Add Student</Link>
    </div>
  );
}