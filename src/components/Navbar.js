import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/badge-header.svg";
import "./styles/Navbar.css";
class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="container-fluid">
          <Link to="/" className="navbar__brand">
            <img className="navbar__logo" alt="" src={logo}></img>
            <span className="font-weight-light">Platzi</span>
            <span className="font-weight-bold">Conf</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
