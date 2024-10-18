import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Reserve</div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Features</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;