import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "../styles/Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 950) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          CARLOS
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/portafolio"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Portafolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/aboutme"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                about me
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn-outline">ABOUT ME</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
