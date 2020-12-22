import React from "react";
import logo from "../images/badge-header.svg";
import "./styles/Navbar.css";
class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="container-fluid">
          <a className="navbar__brand" href="/">
            <img className="navbar__logo" alt="" src={logo}></img>
            <span className="font-weight-light">Platzi</span>
            <span className="font-weight-bold">Conf</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Navbar;