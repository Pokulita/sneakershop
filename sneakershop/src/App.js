import "./App.css";
import React, { useEffect, useState } from "react";

import Home from "./pages/Home";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Fetch data from the Spring Boot backend
    axios
      .get("http://localhost:8080/api/hello
        ")
      .then((response) => {
        setMessage(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <>
      <Home></Home>
    </>
  );
}

export default App;
