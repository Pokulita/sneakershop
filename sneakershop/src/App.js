import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

import Home from "./pages/Home";
import Login from "./components/login";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Fetch data from the Spring Boot backend
    axios
      .get("http://localhost:8080/api/main")
      .then((response) => {
        setMessage(response.data);
        console.log("fuck");
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <div className="App">
      <Login></Login>
    </div>
  );
}

export default App;
