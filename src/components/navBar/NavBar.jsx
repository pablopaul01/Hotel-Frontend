import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../../assets/Fonts/Knockout.otf"
import "./NavBar.css"
import {FaBars} from 'react-icons/fa'
​
const NavBar = () => {
  return (
    <div>
      <Navbar expand="lg" className="navbar-container p-0" sticky="top">
        <Container fluid className='d-flex justify-content-between'>
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
              className="ms-auto my-2 my-lg-0 d-flex gap-3"
            >
              <span href="#action1" className='link-nav'>Inicio</span>
              <span href="#action2" className='link-nav'>Galeria</span>
              <span href="#action2" className='link-nav'>Reserva</span>
              <span href="#action2" className='link-nav'>Quienes Somos</span>
              <span href="#action2" className='link-nav'>Contacto</span>
              <span href="#action2" className='link-nav'>Login</span>
              <span href="#action2" className='link-nav'>Registro</span>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
​
    </div>
  )
}
​
export default NavBar 
