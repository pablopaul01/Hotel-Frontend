import React, { useState } from 'react'
import '../components/admin/usuario/usuarios.css'
import UserTable from '../components/admin/usuario/UserTable'
import ModalCreate from '../components/admin/usuario/ModalCreate'


const Usuarios = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='container-fluid container-crud'>
      <div className="row">
        <div className="col-12">
          <p className='title-admin'>Administración de usuarios</p>
          <hr />
          <button className='btn btn-brown' onClick={handleShow}>Crear usuario</button>
        </div>
      </div>
      <div className="row">
        <div className="col mt-5"><UserTable /></div>
      </div>
      <ModalCreate show={show} handleClose={handleClose} setShow={setShow} />
    </div>
  )
}

export default Usuarios