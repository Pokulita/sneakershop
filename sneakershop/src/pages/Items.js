import React from "react";

import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Items = () => {
  return (
    <>
      <Navbar></Navbar>
      <p>hello items</p>
      <Link className="item" to="/">
        <a>Home</a>
      </Link>
      <Link className="item" to="/items">
        <a>Items</a>
      </Link>
      <Link className="item" to="/profile">
        <a>Profile</a>
      </Link>
    </>
  );
};

export default Items;
