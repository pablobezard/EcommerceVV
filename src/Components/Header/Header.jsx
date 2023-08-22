import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado de inicio de sesión
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Función para cerrar sesión
  const handleLogout = () => {
    // Lógica para cerrar sesión (por ejemplo, eliminar tokens o limpiar el estado de autenticación)
    setIsLoggedIn(false);
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <header className="header">
      <Navbar expand="lg" bg="light">
        <Link to="/" className="navbar-brand">
          EcommerceVV
        </Link>
        
        <Button
          className="navbar-toggler"
          type="button"
          onClick={toggleMobileMenu}
        >
          <FontAwesomeIcon icon={faBars} />
        </Button>

        <Navbar.Collapse id="navbarNav" className={`collapse-navbar ${showMobileMenu ? 'show' : ''}`}>
          <Nav className="ml-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/products" className="nav-link">
              Products
            </Link>
            <Link to="/cart" className="nav-link">
              Cart
            </Link>
            {isLoggedIn ? (
              <Button className="nav-link" onClick={handleLogout}>
                Cerrar sesión
              </Button>
            ) : (
              <>
                <Link to="/login" className="nav-link">
                  Login
                </Link>
                <Link to="/register" className="nav-link">
                  Register
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;
