import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../../assets/Fonts/Knockout.otf"
import "./NavBar.css"

const NavBar = () => {
  return (
    <div>
        <Navbar expand="lg" className="navbar-container">
      <Container fluid className='d-flex justify-content-between'>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className='d-flex justify-content-right'>
          <Nav
            className="ms-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className='link-nav'>Inicio</Nav.Link>
            <Nav.Link href="#action2" className='link-nav'>Galeria</Nav.Link>
            <Nav.Link href="#action2" className='link-nav'>Reserva</Nav.Link>
            <Nav.Link href="#action2" className='link-nav'>Quienes Somos</Nav.Link>
            <Nav.Link href="#action2" className='link-nav'>Contacto</Nav.Link>
            <Nav.Link href="#action2" className='link-nav'>Login</Nav.Link>
            <Nav.Link href="#action2" className='link-nav'>Registro</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  )
}

export default NavBar 
