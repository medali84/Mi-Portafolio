/* import React from 'react';

const MyNavbar = () => {
  return (
    <nav>
      <ul>
        <li><a href="#aboutme">About Me</a></li>
        <li><a href="#habilidades">Habilidades</a></li>
        <li><a href="#showproject">Show Project</a></li>
        <li><a href="#formulariocontacto">Formulario de Contacto</a></li>
      </ul>
    </nav>
  );
};

export default MyNavbar;
 */

import React from 'react';
import "./MyNavbar.css"

const MyNavbar = () => {
  return (
    <nav className="my-navbar">
      <ul className="my-navbar-list">
        <li className="my-navbar-1"><a href="#home">Home</a></li>
        <li className="my-navbar-2"><a href="#aboutme">Conoceme</a></li>
        <li className="my-navbar-3"><a href="#habilidades">Habilidades</a></li>
        <li className="my-navbar-4"><a href="#showproject">Proyectos</a></li>
        <li className="my-navbar-5"><a href="#formulariocontacto">Contactame</a></li>
      </ul>
    </nav>
  );
};

export default MyNavbar;

