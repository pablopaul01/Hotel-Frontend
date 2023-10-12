import React from 'react'
import Modal from 'react-bootstrap/Modal';
import FormPerfil from './FormPerfil';
import Button from 'react-bootstrap/Button';



const ModalPerfil = ({ show, handleClose, setShow }) => {

    return (
        <Modal show={show} onHide={handleClose} className='modal-container'>
            <div className='header-container'>
                <div className="modal-header mx-5 border border-top-0 border-end-0 border-start-0 py-0">
                    <div className='my-5 '>
                        <h4 className="text-white titulo-registro ms-4">Mi Perfil</h4>
                    </div>
                    <div className='d-none d-md-block d-lg-block'>
                        <img src="https://res.cloudinary.com/dcv6aut2v/image/upload/v1697100801/RollingHotel-transparente_qah5k2.png" className="img-fluid" alt="logo-Rolling-Hotel" style={{ width: "150px" }} />
                    </div>
                </div>
            </div>
            <Modal.Body className='p-5'>
                <FormPerfil show={show} setShow={setShow} handleClose={handleClose} />                         
            </Modal.Body>
        </Modal>
    )
}

export default ModalPerfil