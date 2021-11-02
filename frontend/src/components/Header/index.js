import React from "react";
import "./styles.css";
import logo from "../../assets/logoIcon.png";
import {FaSistrix} from 'react-icons/fa'
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="logo">
        <img className="logoIcon" src={logo} alt="Logo Figure-ne" />{" "}
        <h1 className="logoText">Figure-ne</h1>
      </div>
      <div className="searchBar">
          <input className="searchInput" type="text" />
          <FaSistrix className="searchIcon" size="20"/>
      </div>
      <nav className="nav">
          <NavLink className="navLink linkDivision" to="/cadastro">Cadastrar</NavLink>
          <NavLink className="navLink" to="/login">Login</NavLink>
      </nav>
    </div>
  );
};

export default Header;
