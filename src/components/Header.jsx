import React from "react";
import Search from "./Search";
import Category from "./Category";
import Hamburger from "./Hamburger"
import { Link } from "react-router-dom";
// import Break from "react-break";

// const UIBreakpoints = {
//   mobile: 0,
//   phablet: 550,
//   tablet: 768,
//   desktop: 992,
// };

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
