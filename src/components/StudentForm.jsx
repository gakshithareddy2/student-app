import { useState, useEffect } from "react";

function StudentForm({ saveStudent, editStudent }) {
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [course, setCourse] = useState("");
  const [gender, setGender] = useState("Male");

  // ✅ Courses array (CORRECT PLACE)
  const courses = [
    "MERN",
    "Frontend",
    "Backend",
    "Full Stack",
    "Python",
    "Java",
    "Data Science",
    "Machine Learning",
    "Artificial Intelligence",
    "Cyber Security",
    "Cloud Computing",``
  ];

  // Fill form when editing
  useEffect(() => {
    if (editStudent) {
      setName(editStudent.name);
      setRoll(editStudent.roll);
      setCourse(editStudent.course);
      setGender(editStudent.gender);
    }
  }, [editStudent]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !roll || !course || !gender) {
      alert("Please fill all fields");
      return;
    }

    saveStudent({
      id: editStudent ? editStudent.id : Date.now(),
      name,
      roll,
      course,
      gender,
    });

    setName("");
    setRoll("");
    setCourse("");
    setGender("Male");
  };

  return (
    <form onSubmit={handleSubmit} className="card">
      {/* Name */}
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Student Name"
      />

      {/* Roll */}
      <input
        value={roll}
        onChange={(e) => setRoll(e.target.value)}
        placeholder="Roll Number"
      />

      {/* ✅ Course Dropdown */}
      <select value={course} onChange={(e) => setCourse(e.target.value)}>
        <option value="">Select Course</option>

        {courses.map((c, index) => (
          <option key={index} value={c}>
            {c}
          </option>
        ))}
      </select>

      {/* Gender */}
      <div className="radio-group">
        <label>
          <input
            type="radio"
            value="Male"
            checked={gender === "Male"}
            onChange={(e) => setGender(e.target.value)}
          />
          Male
        </label>

        <label>
          <input
            type="radio"
            value="Female"
            checked={gender === "Female"}
            onChange={(e) => setGender(e.target.value)}
          />
          Female
        </label>

        <label>
          <input
            type="radio"
            value="Other"
            checked={gender === "Other"}
            onChange={(e) => setGender(e.target.value)}
          />
          Other
        </label>
      </div>

      {/* Button */}
      <button className="btn">
        {editStudent ? "Update Student" : "Add Student"}
      </button>
    </form>
  );
}

export default StudentForm;