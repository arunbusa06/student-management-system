import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Courses() {
  const courses = [
    "BCA (Bachelor of Computer Applications)",
    "BBA (Bachelor of Business Administration)",
    "MCA (Master of Computer Applications)",
    "B.Tech (Computer Engineering)",
    "B.Tech (Information Technology)",
    "B.Tech (Mechanical Engineering)",
    "B.Tech (Civil Engineering)",
    "B.Tech (Electrical Engineering)",
    "B.Tech (Electronics & Communication)",
    "MBA (Master of Business Administration)",
    "Diploma in Engineering"
  ];

  return (
    <>
      <Navbar />

      <div className="container">
        <Sidebar />

        <div className="content">
          <h2>Courses Offered</h2>

          <div className="course-grid">
            {courses.map((course, index) => (
              <div key={index} className="card">
                <h3>{course}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}