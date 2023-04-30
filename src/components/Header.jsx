import React from "react";
import Search from "./Search";
import Hamburger from "./Hamburger"
import { Link } from "react-router-dom";


function Header() {
  return (
    <div className="header">
      <Link to="/" className="logo">
        <img src={require("../assets/images/logo-color.png")} alt="Yum Yum Yum logo" className="logo__img" />
      </Link>
      <Search />
      <Hamburger />
    </div>
  );
}

export default Header;
