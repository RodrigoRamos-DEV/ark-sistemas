import React from 'react';
import logo from '../assets/SistemaARK.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src={logo} alt="ARK Sistemas Logo" className="navbar-logo" />
        <div className="navbar-links">
          <a href="#contato" className="navbar-button">
            Fale Conosco
          </a>
          <a href="https://sistema.arksistemas.com.br" className="navbar-button">
            Acesso ao Sistema
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
