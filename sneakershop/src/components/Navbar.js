import React, { Component } from "react";

import { Link } from "react-router-dom";

import { RiAccountCircleLine } from "react-icons/ri";
import logo from "../images/logo.png";

export default class Navbar extends Component {
  state = {
    isOpen: false,
  };
  handleTogle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <>
        <div className="navbar">
          <Link to="/">
            <img src={logo} className="logo" alt="Beach Resort" />
          </Link>
          <Link className="navbar-link" to="/profile">
            <a className="icon-holder">
              <RiAccountCircleLine className="profile-icon" />
            </a>
          </Link>
        </div>
        <div className="navbar-divider"></div>
      </>
    );
  }
}
