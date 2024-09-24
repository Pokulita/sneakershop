import React, { Component } from "react";

import { Link } from "react-router-dom";

import { RiAccountCircleLine } from "react-icons/ri";
import { IoSearchSharp } from "react-icons/io5";
import logo from "../images/logo.png";

export default class Navbar extends Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    let { isOpen } = this.state;
    return (
      <>
        <div className="navbar">
          <Link to="/">
            <img src={logo} className="logo" alt="Beach Resort" />
          </Link>
          <a className="navbar-link centered">
            <IoSearchSharp
              style={{
                width: "20px",
                position: "absolute",
                left: "10px",
                top: "58%",
                transform: "translateY(-50%)",
                color: "#888", // Customize the color of the icon
              }}
            />
            <input
              className={`search ${isOpen ? "search-expanded" : ""}`}
              name="search"
              placeholder=" search..."
              onFocus={this.handleToggle}
              onBlur={this.handleToggle}
              style={{
                paddingLeft: "30px",
              }}
            />
          </a>
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
