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

  // Fetch student data
  useEffect(() => {
    api.get("/students", {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      // FIX: convert id to number
      const student = res.data.find(s => s.id === Number(id));

      if (student) {
        setData(student);
      }
    })
    .catch(err => {
      console.error("Error fetching student:", err);
    });
  }, [id]);

  // Update student
  const update = async (e) => {
    e.preventDefault();

    try {
      await api.put(`/students/${id}`, data, {
        headers: { Authorization: localStorage.getItem("token") }
      });

      alert("Updated Successfully");
      navigate("/students");
    } catch (err) {
      console.error("Update failed:", err);
      alert("Update failed");
    }
  };

  return (
    <form onSubmit={update}>
      <input
        placeholder="Name"
        value={data.name}
        onChange={e => setData({ ...data, name: e.target.value })}
      />

      <input
        placeholder="Email"
        value={data.email}
        onChange={e => setData({ ...data, email: e.target.value })}
      />

      <input
        placeholder="Course"
        value={data.course}
        onChange={e => setData({ ...data, course: e.target.value })}
      />

      <input
        placeholder="Phone"
        value={data.phone}
        onChange={e => setData({ ...data, phone: e.target.value })}
      />

      <button type="submit">Update</button>
    </form>
  );
}