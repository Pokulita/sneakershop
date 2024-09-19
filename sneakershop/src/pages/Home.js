import React from "react";

import { Link } from "react-router-dom";

import FeaturedItems from "../components/FeaturedItems";
import Navbar from "../components/Navbar";

export default function home() {
  return (
    <>
      <Navbar />
      <p className="welcome">Welcome</p>
      <div className="welcome-divider"></div>
      <Link className="main-menu" to="/items">
        Items
      </Link>
      <Link className="main-menu" to="/profile">
        Profile
      </Link>
      <FeaturedItems></FeaturedItems>
    </>
  );
}
