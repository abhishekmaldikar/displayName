import React, { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
  });

  const [dis , setDis] = useState({
    firstName: "",
    lastName: "",
  })

  function handleChange(e) {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    setDis({
      firstName: data.firstName,
      lastName: data.lastName,
    })
  }
  return (
    <div className="App">
      <h1>Full Name Display</h1>

      <form onSubmit={(e) => handleSubmit(e)}>
        <p style={{ display: "inline" }}>First Name:</p>
        <input
          value={data.firstName}
          name="firstName"
          onChange={(e) => handleChange(e)}
          required
        />
        <br />
        <p style={{ display: "inline" }}>Last Name:</p>
        <input
          value={data.lastName}
          name="lastName"
          onChange={(e) => handleChange(e)}
          required
        />
        <br />
        <button type="submit">Submit</button>
        <br />

        <p>
          Full Name: {dis.firstName} {dis.lastName}
        </p>
      </form>
    </div>
  );
}

export default App;
