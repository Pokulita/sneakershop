import React from "react";
import "../App.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="app">
      <Navbar />

      <div className="content">
        <div className="error-message">
          <h1>ERROR 404</h1>
          <Link to="/">
            <h2 className="error-btn">back to main page</h2>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
