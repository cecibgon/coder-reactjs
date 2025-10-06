import React from 'react';
import CartWidget from './CartWidget';
import './NavBar.css'; // Opcional: para estilos de la barra de navegación

const NavBar = () => {
  return (
    <nav className="navbar">
      <a href="#" className="brand">
        Tu Tienda Online
      </a>
      <ul className="nav-links">
        <li>
          <a href="#">Inicio</a>
        </li>
        <li>
          <a href="#">Productos</a>
        </li>
        <li>
          <a href="#">Contacto</a>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;