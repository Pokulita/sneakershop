import React from "react";

import { Link } from "react-router-dom";

export default function home() {
  return (
    <div>
      <p className="welcome">Welcome</p>
      <Link className="main-menu" to="/items">
        Items
      </Link>
      <Link className="main-menu" to="/profile">
        Profile
      </Link>
    </div>
  );
}
