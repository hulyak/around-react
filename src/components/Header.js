import React from "react";
import logo from "../images/Logo.svg";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo of Around the U.S" className="header__logo" />
    </header>
  );
};

export default Header;
