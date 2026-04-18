import { useState } from "react";

function StudentForm({ addStudent }) {
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [course, setCourse] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !roll || !course || !gender) {
      alert("Please fill all fields");
      return;
    }

    addStudent({
      id: Date.now(),
      name,
      roll,
      course,
      gender,
    });

    setName("");
    setRoll("");
    setCourse("");
    setGender("");
  };

  return (
    <form onSubmit={handleSubmit} className="card">
      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Roll Number"
        value={roll}
        onChange={(e) => setRoll(e.target.value)}
      />

      <select value={course} onChange={(e) => setCourse(e.target.value)}>
        <option value="">Select Course</option>
        <option value="MERN Stack">MERN Stack</option>
        <option value="Frontend">Frontend</option>
        <option value="Python">Python</option>
      </select>

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

      <button className="btn">Add Student</button>
    </form>
  );
}

export default StudentForm;