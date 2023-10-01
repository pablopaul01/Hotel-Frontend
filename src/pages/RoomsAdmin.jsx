import React, {useState} from 'react'
import '../components/admin/usuario/usuarios.css'
import RoomsTable from '../components/admin/habitaciones/RoomsTable'
import ModalCreateRoom from '../components/admin/habitaciones/ModalCreateRoom'


const RoomsAdmin = () => {
  const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div className='container-fluid container-crud'>
      <div className="row">
        <div className="col-12">
          <p className='title-admin'>Administración de habitaciones</p>
          <hr />
          <button className='btn btn-brown'  onClick={handleShow}>Crear habitación</button>
        </div>
      </div>
      <div className="row">
        <div className="col mt-5"><RoomsTable /></div>
      </div>
      <ModalCreateRoom show={show} handleClose={handleClose}/>
    </div>
  )
}

export default RoomsAdmin