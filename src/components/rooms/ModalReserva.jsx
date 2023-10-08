import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import {BsCalendar3} from "react-icons/bs"
import  "./modalReserva.css"

const ModalReserva = ({show, handleClose, selectedRooms, category, date,guests, allDates,categories}) => {
const cantidad = selectedRooms.length * category.precio
const {startDate, endDate} = date[0]

const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1; // ¡Atención! Los meses en JavaScript son 0-indexados
    const year = date.getFullYear();
  
    return `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
  }

  const handleClick = ()=>{

  // category.roomNumbers= [...unavailableDates,allDates]
  // const index = categories.findIndex(category => category.roomNumbers.some(room => room.id ===  ));
  selectedRooms.forEach(room => {
    const roomNumber = room.selectedRoomsNumber;
    const roomID = room.selectedRoomsId;
    const unavailableDates = category.roomNumbers.find(room => room.id === roomID).unavailableDates;
    const updatedUnavailableDates = [...unavailableDates, ...allDates];
    updateUnavailableDates(roomNumber, updatedUnavailableDates);
  });
   console.log(selectedRooms)
  }

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
            <div className='d-flex gap-1 align-items-0 flex-column'>
              <div className='reserveDatail p-2'>
                  <div className='d-flex gap-2'>
                    <span>
                        <BsCalendar3/>
                    </span> 
                    <span>
                    {formatDate(startDate)} - {formatDate(endDate)} - {allDates.length} Noches
                    </span>
                  </div>
                  <div className='d-flex gap-2'>
                    <span>Adultos {guests.adults}</span>
                    <span>Niños: {guests.kids}</span>
                  </div>
              </div>
            </div>

            <div className='d-flex flex-column reserveDatail mt-2 p-2'>
                <p className='titleDetail'>Categoria de habitación: {category.title}
                  <span className='ofertDetail'>(¡Hot Days! Oferta especial por tiempo limitado)</span>
                </p>
                <p className='m-0'>cantidad de habitaciones: {selectedRooms.length}</p>
                <div className='d-flex'>
                    <p className='m-0'>Habitaciones asignadas:</p>

                    {   
                        selectedRooms.map((room)=>(
                            <span key={room.selectedRoomsId}>
                                <p className='mx-3'>{room.selectedRoomsNumber}</p>
                            </span>
                        ))

                    }
                </div>
                <p>Precio de la habitación: ${category.precio}</p>
            </div>
            <p className='totalDetail mt-4 pe-3'>Total: ${cantidad}</p>
            <div className='d-flex justify-content-center'>          
            <button className='btn btn-brown' onClick={handleClick}>confirmar reserva</button></div>
        </Modal.Body>
      </Modal>    
    </>



  )
}

export default ModalReserva