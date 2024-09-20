import React from "react";

import { Link } from "react-router-dom";

import FeaturedItems from "../components/FeaturedItems";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function home() {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <p className="welcome">Welcome</p>
        <div className="welcome-divider"></div>
        <Link className="main-menu" to="/items">
          Katalog
        </Link>
        <FeaturedItems></FeaturedItems>
      </div>
      <Footer /> {/* Footer is outside content */}
    </div>
  );
}
