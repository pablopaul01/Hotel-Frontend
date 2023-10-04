import React, {useState,useRef} from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import "./NavBar.css"
import {FaBars} from 'react-icons/fa'
import NavbarLogin from '../NavbarLogin/NavbarLogin'



const NavHotel = () => {
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

  window.onscroll = handleScroll;
  return (
    <div  ref={navbarRef}>
      <NavbarLogin />
      <Navbar expand="lg" className={shouldAppear ? 'appear navbar-container p-0' : 'navbar-container p-0'} fixed={navbarFixed ? 'top' : ''}>
        <Container fluid className='d-flex justify-content-between '>
          <Navbar.Brand href="#" className='p-0'><img src="https://res.cloudinary.com/dcv6aut2v/image/upload/v1695793253/RollingHotel-transparente_vk9yak.png" alt="logo Rolling" style={{width:"140px"}}/></Navbar.Brand>
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
              <span className='linknav'>Inicio</span>
                  <li className="nav-item dropdown">
                    <a className="dropdown-toggle linknav" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Hotel
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item linknav" href="#">Galeria de imagenes</a></li>
                      <li><a className="dropdown-item linknav" href="#">Nuestras Habitaciones</a></li>
                    </ul>
                  </li>
              <span className='linknav'>Quienes Somos</span>
              <span className='linknav'>Contacto</span>
              <span className='linknav'>Reserva</span>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavHotel