import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

import Home from "./pages/Home";
import Login from "./components/login";

function App() {
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

  useEffect(() => {
    refetch_users();
  }, []);

  return (
    <div className="App">
      <Login></Login>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.id}: {user.name} {/* Render the user's id and name */}
          </li>
        ))}
      </ul>
      <button onClick={refetch_users}>Refetch</button>
    </div>
  );
}

export default App;
