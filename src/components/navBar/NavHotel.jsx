import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import "./NavBar.css"
import {FaBars} from 'react-icons/fa'

const NavHotel = () => {
  return (
    <div>
      <Navbar expand="lg" className="navbar-container p-0" fixed="top">
        <Container fluid className='d-flex justify-content-between'>
          <Navbar.Brand href="#" className='p-0'><img src="../../public/logo-navbar.png" alt="logo Rolling" style={{width:"180px"}}/></Navbar.Brand>
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
              <span className='linknav'>Galeria</span>
              <span className='linknav'>Reserva</span>
              <span className='linknav'>Quienes Somos</span>
              <span className='linknav'>Contacto</span>
              <span className='linknav'>Login</span>
              <span className='linknav'>Registro</span>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavHotel