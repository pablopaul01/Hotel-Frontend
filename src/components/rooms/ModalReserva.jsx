import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';

const ModalReserva = ({show, handleClose, selectedRooms, category}) => {
const cantidad = selectedRooms.length * category.precio
  return (
    <>
      <Modal show={show} onHide={handleClose} className='modal-container'>
        <div className='header-container'>
          <div className="modal-header mx-5 border border-top-0 border-end-0 border-start-0 py-0">
              <div className='my-5 '>
                <h2 className="text-white titulo-registro ms-4">Rersevar</h2>
              </div>
              <div className='d-none d-md-block d-lg-block'>
                <img src="../../public/RollingHotel-transparente.png" className="img-fluid mx-4" alt="logo-Rolling-Hotel" style={{width:"150px"}}/>
              </div>
          </div>
        </div>
        <Modal.Body className='modal-body'>
            <h3>Categoria de habitación: {category.title}</h3>
            <div>
                <h3>Habitaciones asignadas:</h3>
            </div>
            {   
                selectedRooms.map((room)=>(
                    <ul key={room.selectedRoomsId}>
                    <li>{room.selectedRoomsNumber}</li>
                    
                    </ul>
                ))

            }
            <h2>Precio: ${cantidad}</h2>
          <button> confirmar reserva</button>
        </Modal.Body>

      </Modal>    
    </>



  )
}

export default ModalReserva