import { useState, useEffect } from "react";
import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [editStudent, setEditStudent] = useState(null);

  // Load data
  useEffect(() => {
    const data = localStorage.getItem("students");
    setStudents(data ? JSON.parse(data) : []);
  }, []);

  // Save data
  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  // Add or Update student
  const saveStudent = (student) => {
    const exists = students.some(
      (s) => s.roll === student.roll && s.id !== student.id
    );

    if (exists) {
      alert("Roll number already exists");
      return;
    }

    if (editStudent) {
      // update
      setStudents(
        students.map((s) => (s.id === student.id ? student : s))
      );
      setEditStudent(null);
    } else {
      // add
      setStudents([...students, student]);
    }
  };

  // Delete
  const deleteStudent = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  // Clear all
  const clearAll = () => {
    if (window.confirm("Clear all students?")) {
      setStudents([]);
    }
  };

  // Search filter
  const filteredStudents = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>🎓 Student Registration</h1>

      <h3>Total Students: {students.length}</h3>

      {/* Search */}
      <input
        type="text"
        placeholder="🔍 Search student..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <StudentForm
        saveStudent={saveStudent}
        editStudent={editStudent}
      />

      <StudentTable
        students={filteredStudents}
        deleteStudent={deleteStudent}
        editStudent={setEditStudent}
        clearAll={clearAll}
      />
    </div>
  );
}

export default App;