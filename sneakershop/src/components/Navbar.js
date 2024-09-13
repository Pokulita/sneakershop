import React, { Component } from "react";

import { Link } from "react-router-dom";

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
          <Link className="navbar-link" to="/">
            <a>Home</a>
          </Link>
          <Link className="navbar-link" to="/items">
            <a>Items</a>
          </Link>
          <Link className="navbar-link" to="/profile">
            <a>Profile</a>
          </Link>
        </div>
        <div className="navbar-divider"></div>
      </>
    );
  }
}
