import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Reserve</div>
      <div className={nav-links ${isOpen ? 'open' : ''}}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        &#9776;
      </div>
    </nav>
  );
}

export default Navbar;