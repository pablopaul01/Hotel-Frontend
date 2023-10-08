import React from 'react'
import "./navBarLogin.css"
import {BiSolidUserCircle} from "react-icons/bi"
import { Link } from 'react-router-dom'

const NavbarLogin = () => {
  return (
    <div className='container-fluid py-2 navLogin'>
        <div className="row">
            <div className="col-12 d-flex justify-content-end gap-3 pe-5">
                <Link to={"/login"} className='navLoginLink'>Login</Link>
                <Link to={"/registro"} className='navLoginLink'>Registro</Link>
                <BiSolidUserCircle className='iconLogin'/>
            </div>
        </div>
    </div>
  )
}

export default NavbarLogin