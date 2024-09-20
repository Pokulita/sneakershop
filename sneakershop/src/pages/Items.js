import React from "react";

import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import AllItems from "../components/AllItems";

const Items = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <AllItems></AllItems>
      </div>
      <Footer />
    </div>
  );
};

export default Items;
