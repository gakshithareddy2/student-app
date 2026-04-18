function StudentTable({ students, deleteStudent, clearAll }) {
  return (
    <div className="card">
      <div className="table-head">
        <h2>📋 Student List</h2>
        <button className="btn danger" onClick={clearAll}>
          Clear All
        </button>
      </div>

      {students.length === 0 ? (
        <p className="empty">No students yet. Add one 👆</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Roll</th>
              <th>Course</th>
              <th>Gender</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {students.map((s, index) => (
              <tr key={s.id}>
                <td>{index + 1}</td>
                <td>{s.name}</td>
                <td>{s.roll}</td>
                <td>{s.course}</td>
                <td>{s.gender}</td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => deleteStudent(s.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default StudentTable;