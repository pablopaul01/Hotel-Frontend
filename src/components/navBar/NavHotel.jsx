import React, { useState, useRef, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import "./NavBar.css"
import { FaBars } from 'react-icons/fa'
import NavbarLogin from '../NavbarLogin/NavbarLogin'
import { Link } from 'react-router-dom'
import jwt_decode from 'jwt-decode'


const NavHotel = ({isLogged, setIsLogged}) => {

  const [navbarFixed, setNavbarFixed] = useState(false);
  const [shouldAppear, setShouldAppear] = useState(false);


  const navbarRef = useRef();

  const handleScroll = () => {
    if (window.scrollY > navbarRef.current.offsetHeight) {
      setNavbarFixed(true);
      setShouldAppear(true);
    } else {
      setNavbarFixed(false);
      setShouldAppear(false);
    }
  };
  const handleLinkClick = () => {
    const navbarToggle = document.querySelector('.navbar-toggler');
    if (navbarToggle && window.getComputedStyle(navbarToggle).display !== 'none') {
      navbarToggle.click();
    }
  };

  const token = localStorage.getItem("token");

  window.onscroll = handleScroll;
  return (
    <div ref={navbarRef}>
      <NavbarLogin isLogged={isLogged} setIsLogged={setIsLogged}/>
      <Navbar expand="lg" className={shouldAppear ? 'appear navbar-container p-2' : 'navbar-container p-2'} fixed={navbarFixed ? 'top' : ''}>
        <Container fluid className='d-flex justify-content-center align-items-center '>
          <Navbar.Brand href="#" className='p-0'><img src="https://res.cloudinary.com/dcv6aut2v/image/upload/v1697100789/logo-navbar_oay6an.png" alt="logo Rolling" style={{ width: "200px" }} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span>

              <FaBars
                color="#fff"
              />
            </span>
          </Navbar.Toggle>
          <Navbar.Collapse className='hamburger'>
            <Nav
              className="ms-auto my-2 my-lg-0 d-flex gap-4 me-3"
            >
              <Link to="/" className='linknav justify-content-md-center align-items-center d-flex' onClick={handleLinkClick}>Inicio</Link>
              <li className="nav-item dropdown justify-content-md-center align-items-center d-flex" >
                <a className="dropdown-toggle linknav" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Hotel
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/galeria-imagenes" className="dropdown-item linknav" onClick={handleLinkClick}>Galeria de imagenes
                    </Link>
                  </li>
                  <li>
                    <Link to="/categoria-habitaciones" className="dropdown-item linknav" onClick={handleLinkClick}>Nuestras Habitaciones</Link>
                  </li>
                </ul>
              </li>
              <Link to="/Nosotros" className='linknav justify-content-md-center align-items-center d-flex' onClick={handleLinkClick}>Quienes Somos</Link>
              <Link to="/Contacto" className='linknav justify-content-md-center align-items-center d-flex' onClick={handleLinkClick}>Contacto</Link>
              {
                !isLogged ?
                  (
                    <Link to="/reserva-habitaciones" onClick={handleLinkClick}> 
                      <button className="button-footer mt-2">RESERVAR AHORA</button>
                    </Link>
                  )
                  :
                  (
                    jwt_decode(token).role === "admin" ?
                      (
                        <li className="nav-item dropdown justify-content-md-center align-items-center d-flex" >
                          <a className="dropdown-toggle linknav button-footer mt-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            ADMINISTRAR
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <Link to="/admin/users" className="dropdown-item linknav" onClick={handleLinkClick}>Usuarios
                              </Link>
                            </li>
                            <li>
                              <Link to="/admin/rooms" className="dropdown-item linknav" onClick={handleLinkClick}>Habitaciones</Link>
                            </li>
                          </ul>
                        </li>
                      )
                      :
                      (
                        <Link to="/reserva-habitaciones">
                          <button className="button-footer mt-2" onClick={handleLinkClick}>RESERVAR AHORA</button>
                        </Link>
                      )
                  )
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavHotel