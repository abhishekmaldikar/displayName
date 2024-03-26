import React, { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
  });

  const [fullName , setFullName] = useState("")

  function handleChange(e) {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setFullName(`${data.firstName} ${data.lastName}`)
  }
  return (
    <div className="App">
      <h1>Full Name Display</h1>

      <form onSubmit={(e) => handleSubmit(e)}>
        <p style={{ display: "inline" }}>First Name:</p>
        <input
          value={data.firstName}
          name="firstName"
          type="text"
          onChange={(e) => handleChange(e)}
          required
        />
        <br />
        <p style={{ display: "inline" }}>Last Name:</p>
        <input
          value={data.lastName}
          name="lastName"
          type="text"
          onChange={(e) => handleChange(e)}
          required
        />
        <br />
        <button type="submit">Submit</button>
        <br />

        <p>
          Full Name: {fullName}
        </p>
      </form>
    </div>
  );
}

export default App;
