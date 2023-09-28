import React from 'react'
import "../css/galeryRecepcion.css"

const GaleryRecepcion = () => {
    return (
        <div className='container'>
            <h4 className='text-secondary text-center mt-5 categoria'>ÁREAS PÚBLICAS</h4>
            <h2 className='text-dark text-center titulo-galery'>Recepción</h2>
            <div className="row m-5">
                <div className="col-lg-4 mb-4">
                    <a href="#" data-bs-toggle="modal" data-bs-target="#modalImage1">
                        <img src="https://images.unsplash.com/photo-1621293954908-907159247fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" className="w-100 mb-4 rounded img-fluid" />
                    </a>
                    <img src="https://images.unsplash.com/photo-1546967900-1bea5f16b69d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt=""
                        className="w-100 mb-4 rounded img-fluid" />
                </div>
                <div className="col-lg-4 mb-4">
                    <img src="https://images.unsplash.com/photo-1565031491910-e57fac031c41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" className="w-100 mb-4 rounded img-fluid" />
                    <img src="https://images.unsplash.com/photo-1572786258684-9b3d5671e7d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" className="w-100 mb-4 rounded img-fluid" />
                </div>
                <div className="col-lg-4 mb-4">
                    <img src="https://images.unsplash.com/photo-1621293954908-907159247fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" className="w-100 mb-4 rounded img-fluid" />
                    <img src="https://images.unsplash.com/photo-1546967900-1bea5f16b69d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" className="w-100 mb-4 rounded img-fluid img-recepcion" />
                </div>
            </div>
        </div>
    )
}

export default GaleryRecepcion