import React from 'react'

const GaleryEspaciosTrabajo = () => {
    return (
        <>
            <div className='mb-5 titulos-galery'>
                <h4 className='text-secondary text-center categoria'>ÁREAS PÚBLICAS</h4>
                <h2 className='text-dark text-center titulo-galery'>Espacio de trabajo</h2>
            </div>
            <div className="row">
                <div className="col-lg-3 mb-4">
                    <img src="https://images.unsplash.com/photo-1658849110893-841726ccd937?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="" className="w-100 rounded img-fluid img-galeria" />                    
                </div>
                <div className="col-lg-6 mb-4">
                    <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80" alt="" className="w-100 rounded img-fluid img-galeria" />                    
                </div>
                <div className="col-lg-3 mb-4">
                    <img src="https://images.unsplash.com/photo-1522683280249-025c6e03d311?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="" className="w-100 rounded img-fluid img-galeria" />                   
                </div>
            </div>
        </>
    )
}

export default GaleryEspaciosTrabajo