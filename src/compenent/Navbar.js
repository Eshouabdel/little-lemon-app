import React from 'react';
import Logo from  '../Assets/Logo.jpg';

  function Header() {
    return (
    <header>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={Logo} alt="Little Lemon Logo" />
        </div>
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#about">About us</a></li>
          <li><a href="#contact">Contact us</a></li>
        </ul>
      </nav>
    </header>
    );
  }
  export default Header;