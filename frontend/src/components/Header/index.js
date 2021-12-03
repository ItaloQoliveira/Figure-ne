import React, { useRef } from "react";
import "./styles.css";
import { logOut, setSearchedData } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import logo from "../../assets/logoIcon.png";
import { FaSistrix } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router";
import fetchProducts from "../../utils/fetchProducts";
import { toast } from "react-toastify";

const Header = (props) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const history = useHistory();
  const searchBarRef = useRef();

  const logoutHandler = () => {
    if (isLoggedIn) {
      dispatch(logOut());
      history.push("/login");
    }
  };

  const myAccountHandler = () => {
    if (isLoggedIn) {
      history.push("/mystore");
    } else {
      history.push("/register");
    }
  };

  const searchHandler = async () => {
    try {
      const data = await fetchProducts(searchBarRef.current.value);

      console.log(data);
      if (data) {
        if (data.figureList.length === 0) {
          toast.error("o(TヘTo)  Loja Não Encontrada");
          return;
        }
        dispatch(setSearchedData(data.figureList));
        history.push("/search");
      } else {
        toast.error("o(TヘTo)  Loja Não Encontrada");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="headerContainer">
      <div className="logo">
        <img className="logoIcon" src={logo} alt="Logo Figure-ne" />{" "}
        <h1 className="logoText">Figure-ne</h1>
      </div>
      <div className="searchBar">
        <input className="searchInput" type="text" ref={searchBarRef} />
        <FaSistrix className="searchIcon" size="20" onClick={searchHandler} />
      </div>
      <nav className="nav">
        <button className="navLink linkDivision" onClick={myAccountHandler}>
          {isLoggedIn ? "Sua Loja" : "Cadastrar"}
        </button>
        <NavLink className="navLink" to="/login" onClick={logoutHandler}>
          {isLoggedIn ? "Logout" : "Login"}
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;