import "../App.css";
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

  const [users, setUsers] = useState([]);

  const refetch_users = () => {
    // Fetch data from the Spring Boot backend
    axios
      .get("http://localhost:8080/api/users")
      .then((response) => {
        setUsers(response.data);
        console.log("fuck");
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  };

  return (
    <>
      <h1 className="login-greet">Enter Your Username</h1>
      <section className="login-form">
        <form className="login" onSubmit={handleSubmit}>
          <a className="login-field" htmlFor="username"></a>
          <input
            className="login-input"
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleChange}
            required
          />
          <button className="submit-button" type="submit">
            Submit
          </button>
        </form>
      </section>
      {responseMessage && <p className="response-login">{responseMessage}</p>}

      <ul>
        {users.map((user) => (
          <li className="users-out" key={user.id}>
            {user.id}: {user.name} {/* Render the user's id and name */}
          </li>
        ))}
      </ul>
      <button className="refetch-button" onClick={refetch_users}>
        Refetch(test)
      </button>
    </>
  );
};

export default UsernameForm;
