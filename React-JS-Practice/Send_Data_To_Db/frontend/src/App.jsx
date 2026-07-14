import { useEffect, useState } from "react";

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    fetch("http://localhost:5100/students")
      .then((response) => response.json())
      .then((data) => {
        setStudents(data);
      });
  }, []);

 const handleClick = () => {
  fetch("http://localhost:5100/students", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({name}
    ),
  })
    .then((response) => response.json())
    .then((data) => {
      setStudents(data);  
      setName("");
    });
};

const handleDelete = (id) => {
  fetch(`http://localhost:5100/students/${id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => {
      setStudents(data);
    });
};

const handleUpdate = (id) => {
  const updatedName = prompt("Enter New Name");
    console.log("Updated Name:", updatedName);


  fetch(`http://localhost:5100/students/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: updatedName,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      setStudents(data);
    });
};

  return (
    <>
      <h1>Students</h1>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={handleClick}>
  Add Student
      </button>

      <h3>You Typed: {name}</h3>
    
    {students.map((student) => (
  <div key={student.id}>
    {student.id} - {student.name}

    <button onClick={() => handleDelete(student.id)}>
      Delete
    </button>

     <button onClick={() => handleUpdate(student.id)}>
      Update
    </button>
  </div>
))} 
    </>
  );
}

export default App;