import React from "react";
import "./styles.css";
import { logOut } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import logo from "../../assets/logoIcon.png";
import {FaSistrix} from 'react-icons/fa'
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router";

const Header = (props) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  const history = useHistory();

  const logoutHandler = () => {
    if(isLoggedIn){
      dispatch(logOut())
      history.push('/login')
    }
  }

  const myAccountHandler = () => {
    if(isLoggedIn){
      history.push('/mystore')
    } else {
      history.push('/register')
    } 
  }

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
          <button className="navLink linkDivision" onClick={myAccountHandler}>{isLoggedIn ? 'Sua Conta' : 'Cadastrar'}</button>
          <NavLink className="navLink" to="/login" onClick={logoutHandler}>{isLoggedIn ? 'Logout' : 'Login'}</NavLink>
      </nav>
    </div>
  );
};

export default Header;
