import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function ModalReserva() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" size="lg" className='btn-outline-light text-light' active onClick={handleShow}>
                Reservar ahora
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Detalle de reserva</Modal.Title>
                </Modal.Header>
                <Modal.Body className='mt-3'>
                    <form class="row g-3">
                        <div className="col-md-6">
                            <label for="inputEmail4" className="form-label">Nombre</label>
                            <input type="email" className="form-control" id="inputEmail4" />
                        </div>
                        <div className="col-md-6">
                            <label for="inputPassword4" className="form-label">Apellido</label>
                            <input type="password" className="form-control" id="inputPassword4" />
                        </div>
                        <div className="col-12">
                            <label for="inputNumber" className="form-label">Cel</label>
                            <input type="text" className="form-control" id="inputNumber" placeholder="" />
                        </div>
                        <div className="col-12">
                            <label for="inputAddress" className="form-label">Dirección</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                        </div>
                        <div className="col-md-8">
                            <label for="inputCity" className="form-label">Ciudad</label>
                            <input type="text" className="form-control" id="inputCity" />
                        </div>
                        <div className="col-md-4">
                            <label for="inputZip" className="form-label">Cod. postal</label>
                            <input type="text" className="form-control" id="inputZip" />
                        </div>
                        <div className="col-6 mb-3">
                            <label for="inputAddress" className="form-label">Fecha de ingreso</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                        </div>
                        <div className="col-6 mb-3">
                            <label for="inputAddress2" className="form-label">Fecha de salida</label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                        </div>
                    </form>
                    <div className="row m-2">
                        <div className="col-12">
                            <div className="row">
                                <hr />
                                <div className="col-6">
                                    <p className='mb-0 text-start fs-6'>
                                        Cantidad de noches seleccionadas:
                                    </p>
                                </div>
                                <div className="col-6 text-end">
                                    <p className='fs-6 text-align-end'>5 noches</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="row">
                                <hr className='mt-3' />
                                <div className="col-6">
                                    <p className='mb-0 text-start fs-3'>
                                        Total:
                                    </p>
                                </div>
                                <div className="col-6 text-end">
                                    <p className='fs-3 text-align-end'>$123984,33</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalReserva;