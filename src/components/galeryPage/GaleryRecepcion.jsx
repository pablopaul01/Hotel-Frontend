import React from 'react'
import "./galeryRecepcion.css"

const GaleryRecepcion = () => {
    return (
        <>
            <div className='my-5 mt-5 titulos-galery'>
                <h4 className='text-secondary text-center categoria'>ÁREAS PÚBLICAS</h4>
                <h2 className='text-dark text-center titulo-galery'>Recepción</h2>
            </div>
            <div className="row">
                <div className="col-lg-4 mb-4">
                    <img src="https://images.unsplash.com/photo-1621293954908-907159247fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" className="w-100 mb-4 rounded img-fluid img-galeria" />
                    <img src="https://images.unsplash.com/photo-1546967900-1bea5f16b69d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt=""
                        className="w-100 rounded img-fluid img-galeria" />
                </div>
                <div className="col-lg-4 mb-4">
                    <img src="https://images.unsplash.com/photo-1565031491910-e57fac031c41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" className="w-100 mb-4 rounded img-fluid img-galeria" />
                    <img src="https://images.unsplash.com/photo-1572786258684-9b3d5671e7d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" className="w-100 rounded img-fluid img-galeria" />
                </div>
                <div className="col-lg-4 mb-4">
                    <img src="https://images.unsplash.com/photo-1621293954908-907159247fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" className="w-100 mb-4 rounded img-fluid img-galeria" />
                    <img src="https://images.unsplash.com/photo-1546967900-1bea5f16b69d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" className="w-100 rounded img-fluid img-galeria" />
                </div>
            </div>

        </>
    )
}

export default GaleryRecepcion