import React, { useState } from "react";
import axios from "axios";

const UsernameForm = () => {
  const [username, setUsername] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/api/login", {
        username: username,
      });

      setResponseMessage(response.data.message);
    } catch (error) {
      console.error("There was an error!", error);
      setResponseMessage("There was an error submitting your username.");
    }
  };

  return (
    <div>
      <h1>Submit Your Username</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default UsernameForm;
