import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import AddStudent from "./pages/AddStudent";
import EditStudent from "./pages/EditStudent";
import ProtectedRoute from "./components/ProtectedRoute";
import Courses from "./pages/Courses";
import Users from "./pages/Users";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ✅ FIX: default route */}
        <Route path="/" element={<Navigate to="/login" />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={
          <ProtectedRoute><Dashboard /></ProtectedRoute>
        }/>

        <Route path="/students" element={
          <ProtectedRoute><Students /></ProtectedRoute>
        }/>

        <Route path="/add-student" element={
          <ProtectedRoute><AddStudent /></ProtectedRoute>
        }/>

        <Route path="/edit/:id" element={
          <ProtectedRoute><EditStudent /></ProtectedRoute>
        }/>

        <Route path="/courses" element={<Courses />} />
        <Route path="/users" element={<Users />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;