import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';

const ModalReserva = ({show, handleClose, selectedRooms, category}) => {
const cantidad = selectedRooms.length * category.precio
  return (
    <>
      <Modal show={show} onHide={handleClose} size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered className='modal-container'>
        <div className='header-container'>
          <div className="modal-header mx-5 border border-top-0 border-end-0 border-start-0 py-0">
              <div className='my-5 '>
                <h4 className="text-white titulo-registro ms-4">Datos de su reserva</h4>
              </div>
              <div className='d-none d-md-block d-lg-block'>
                <img src="../../public/RollingHotel-transparente.png" className="img-fluid mx-4" alt="logo-Rolling-Hotel" style={{width:"150px"}}/>
              </div>
          </div>
        </div>
        <Modal.Body className='modal-body'>
            <p>Categoria de habitación: {category.title}</p>
            <div className='d-flex flex-column'>
                <p>cantidad de habitaciones: {selectedRooms.length}</p>
                <div className='d-flex'>
                    <p>Habitaciones asignadas:</p>

                    {   
                        selectedRooms.map((room)=>(
                            <span key={room.selectedRoomsId}>
                                <p className='mx-3'>{room.selectedRoomsNumber}</p>
                            </span>
                        ))

                    }
                </div>
            </div>
            <p>Precio de la habitación: ${category.precio}</p>
            <p>Total: ${cantidad}</p>
            <div className='d-flex justify-content-center'>          <button>confirmar reserva</button></div>
        </Modal.Body>
      </Modal>    
    </>



  )
}

export default ModalReserva