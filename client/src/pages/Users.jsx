import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Users() {
  return (
    <>
      <Navbar />

      <div className="container">
        <Sidebar />

        <div className="content">
          <h2>Active Users</h2>

          <div className="card">
            <p>Admin User</p>
          </div>

        </div>
      </div>
    </>
  );
}