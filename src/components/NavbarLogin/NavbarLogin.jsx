import React from 'react'
import "./navBarLogin.css"
import { BiSolidUserCircle } from "react-icons/bi"
import { Link, Navigate, useNavigate } from 'react-router-dom'
import jwt_decode from 'jwt-decode'




const NavbarLogin = () => {

  let navigate = useNavigate();

  const nameLogged = () => {
    const token = localStorage.getItem("token");
    const decode = jwt_decode(token);
    return decode.name
  }

  const isLogged = () => {
    const token = localStorage.getItem("token");
    

    return token ? true : false
  }

    const logOut = () => {
      localStorage.removeItem("token");
      navigate("/login");
    }

    return (
      <div className='container-fluid py-2 navLogin'>
        <div className="row">
          <div className="col-12 d-flex justify-content-end gap-3 pe-5">
            {
              isLogged() ?
                (
                  <>
                    {/* <Navigate to="/" /> */}
                    <Link to="/perfil" className='navLoginLink'>{nameLogged()}</Link>
                    <Link to={"/login"} className='navLoginLink' onClick={logOut}>Cerrar Sesión</Link>
                    <BiSolidUserCircle className='iconLogin' />
                    {/* {navigate("/")} */}
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