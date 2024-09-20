import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Login from "../components/login";

const Profile = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <Login></Login>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
