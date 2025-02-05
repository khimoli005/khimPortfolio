// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import CSS for styling

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      { /* Logo section */}
        <div className="logo">
          <Link to="/">KHIM OLI</Link>
        </div>

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          </li>
          <li>
            <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          </li>
          <li>
            <Link to="/TextForm" onClick={() => setMenuOpen(false)}>TextForm</Link>
          </li>
        </ul>

        <div className="hamburger" onClick={toggleMenu}>
          <span className={menuOpen ? "bar open" : "bar"}></span>
          <span className={menuOpen ? "bar open" : "bar"}></span>
          <span className={menuOpen ? "bar open" : "bar"}></span>
        </div>
    </nav>
  );
};

export default Navbar;
