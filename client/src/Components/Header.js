import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "../images/x.svg";
import { ReactComponent as MenuIcon } from "../images/menu.svg";
import { Link } from "react-router-dom";
import "../css/style.css";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="navbar">
      <div className="navbar-left">eLearning</div>
      <ul className={click ? "navbar-right active" : "navbar-right"}>
        <li onClick={closeMobileMenu}>
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li onClick={closeMobileMenu}>
          <Link className="link" to="/viewcourse">
            View-Course
          </Link>
        </li>
        <li onClick={closeMobileMenu}>
          <Link className="link" to="/create">
            Create-Course
          </Link>
        </li>
        <li className="" style={{ display: "none" }} onClick={closeMobileMenu}>
          <Link to="/login" className="login-btn link">
            Login
          </Link>
        </li>
        <li style={{ display: "none" }} onClick={closeMobileMenu}>
          <Link to="/register" className="signup-btn link">
            Register
          </Link>
        </li>
      </ul>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon-x" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
};

export default Header;
