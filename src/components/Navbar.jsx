import React from 'react';
import logo from '../assets/SistemaARK.png'; // Importa a logo

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src={logo} alt="ARK Sistemas Logo" className="navbar-logo" />
        <a href="#contato" className="navbar-button">
          Fale Conosco
        </a>
      </div>
    </nav>
  );
};

export default Navbar;