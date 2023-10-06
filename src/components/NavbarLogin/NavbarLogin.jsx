import React from 'react'
import "./navBarLogin.css"
import { BiSolidUserCircle } from "react-icons/bi"
import { Link, Navigate } from 'react-router-dom'


const NavbarLogin = () => {

  const isLogged = localStorage.getItem("token");

  const logOut = () => {
    localStorage.removeItem("token");
    <Navigate to="/login" />
  }

  return (
    <div className='container-fluid py-2 navLogin'>
      <div className="row">
        <div className="col-12 d-flex justify-content-end gap-3 pe-5">
          {
            isLogged ?
              (
                <>
                  <span className='navLoginLink'>Franco</span>
                  <Link to={"/login"} className='navLoginLink' onClick={logOut}>Cerrar Sesión</Link>
                  <BiSolidUserCircle className='iconLogin' />
                </>
              )
              :
              (
                <>
                  <Link to={"/login"} className='navLoginLink'>Login</Link>
                  <Link to={"/registro"} className='navLoginLink'>Registro</Link>
                  <BiSolidUserCircle className='iconLogin' />
                </>
              )
          }
        </div>
      </div>
    </div>
  )
}

export default NavbarLogin