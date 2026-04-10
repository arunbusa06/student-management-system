import { useEffect, useState } from "react";
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
    <div>
      <h2>Students</h2>
      <a href="/add">Add Student</a>

      {students.map(s => (
        <div key={s.id}>
          {s.name} - {s.email}
          <a href={`/edit/${s.id}`}>Edit</a>
          <button onClick={()=>deleteStudent(s.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}