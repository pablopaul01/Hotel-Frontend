import "./navBarLogin.css"
import { BiSolidUserCircle } from "react-icons/bi"
import { Link, Navigate, useNavigate } from 'react-router-dom'
import ModalPerfil from './ModalPerfil'
import { useState } from "react"




const NavbarLogin = () => {

  let navigate = useNavigate();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const isLogged = () => {
    const token = localStorage.getItem("token");
    return token ? true : false
  }

  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <>
      <div className='container-fluid py-2 navLogin'>
        <div className="row">
          <div className="col-12 d-flex justify-content-end gap-3 pe-5">
            {
              isLogged() ?
                (
                  <>
                    <Link className='navLoginLink' onClick={handleShow}>Mi perfil</Link>
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
      <ModalPerfil show={show} handleClose={handleClose} setShow={setShow} />
    </>
  )
}

export default NavbarLogin