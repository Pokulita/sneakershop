import React from "react";

import { Link } from "react-router-dom";

import FeaturedItems from "../components/FeaturedItems";

export default function home() {
  return (
    <>
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
