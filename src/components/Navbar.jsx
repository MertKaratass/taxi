import React, { useState } from "react";
import "./Navbar.css";
import logo from "./image/png-trlogo-Photoroom.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="navbar">
      <a href="/" className="image">
        <img src={logo} alt="Logo" className="logo" />
      </a>
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="/" onClick={closeMenu}>
          Ana Sayfa
        </a>
        <a href="#services" onClick={closeMenu}>
          Hizmetler
        </a>
        <a href="#about" onClick={closeMenu}>
          Hakkımızda
        </a>
        <a href="#contact" onClick={closeMenu}>
          İletişim
        </a>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>
    </div>
  );
};

export default Navbar;
