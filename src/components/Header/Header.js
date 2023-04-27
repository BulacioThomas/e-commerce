import React from "react";
import logo from "./logo.webp";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
    </div>
  );
};

export default Header;
