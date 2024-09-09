import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Error from "./pages/Error";
import Item from "./pages/Item";
import Items from "./pages/Items";
import Profile from "./pages/Profile";

import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/items/" element={<Items />} />
        <Route exact path="/items/:slug" element={<Item />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
