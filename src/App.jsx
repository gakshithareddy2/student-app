import { useState, useEffect } from "react";
import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("students");
    setStudents(data ? JSON.parse(data) : []);
  }, []);

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const addStudent = (student) => {
    const exists = students.some((s) => s.roll === student.roll);
    if (exists) {
      alert("Roll number already exists");
      return;
    }
    setStudents([...students, student]);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  const clearAll = () => {
    if (window.confirm("Clear all students?")) {
      setStudents([]);
    }
  };

  return (
    <div className="container">
      <h1>🎓 Student Registration</h1>

      <StudentForm addStudent={addStudent} />

      <StudentTable
        students={students}
        deleteStudent={deleteStudent}
        clearAll={clearAll}
      />
    </div>
  );
}

export default App;