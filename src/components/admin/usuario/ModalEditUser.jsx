import React from 'react'
import Modal from 'react-bootstrap/Modal';
import FormEditUser from './FormEditUser';
import Button from 'react-bootstrap/Button';



const ModalEditUser = ({ show, handleClose, setShow, idUser, getAllUsers}) => {

    return (
        <Modal show={show} onHide={handleClose} className='modal-container'>
            <div className='header-container'>
                <div className="modal-header mx-5 border border-top-0 border-end-0 border-start-0 py-0">
                    <div className='my-5 '>
                        <h4 className="text-white titulo-registro ms-4">Editar Usuario</h4>
                    </div>
                    <div className='d-none d-md-block d-lg-block'>
                        <img src="../../public/RollingHotel-transparente.png" className="img-fluid" alt="logo-Rolling-Hotel" style={{ width: "150px" }} />
                    </div>
                </div>
            </div>
            <Modal.Body className='p-5'>
                <FormEditUser show={show} setShow={setShow} handleClose={handleClose} idUser={idUser} getAllUsers={getAllUsers} />                         
            </Modal.Body>
        </Modal>
    )
}

export default ModalEditUser