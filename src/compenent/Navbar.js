import React from 'react';
import Logo from  '../Assets/Logo.jpg';
import { Link } from 'react-router-dom';
import '../style/header.css'


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
          <li><Link to="/ContactPage">Contact us</Link></li>
        </ul>
      </nav>
    </header>
    );
  }
  export default Header;