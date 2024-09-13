import React from "react";

import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

import AllItems from "../components/AllItems";

const Items = () => {
  return (
    <>
      <Navbar></Navbar>
      <AllItems></AllItems>
    </>
  );
};

export default Items;
