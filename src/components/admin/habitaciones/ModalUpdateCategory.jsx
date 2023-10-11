import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import FormUpdateCategory from './FormUpdateCategory';

const ModalUpdateCategory = ({show, handleClose, categorie, setCategorie, getCategories}) => {
  console.log("categorie en modal", categorie)
  return (
    <>
      <Modal show={show} onHide={handleClose} className='modal-container'>
        <div className='header-container'>
          <div className="modal-header mx-5 border border-top-0 border-end-0 border-start-0 py-0">
              <div className='my-5 '>
                <h2 className="text-white titulo-registro ms-4">Crear categoría</h2>
              </div>
              <div className='d-none d-md-block d-lg-block'>
                <img src="../../public/RollingHotel-transparente.png" className="img-fluid mx-4" alt="logo-Rolling-Hotel" style={{width:"150px"}}/>
              </div>
          </div>
        </div>
        <Modal.Body className='modal-body'>
          <FormUpdateCategory categorie={categorie} setCategorie={setCategorie} show={show} handleClose={handleClose} getCategories={getCategories}/>
        </Modal.Body>

      </Modal>    
    </>



  )
}

export default ModalUpdateCategory