import React from 'react'
import "./galeryRecepcion.css"

const GaleryRestaurant = () => {
    return (
        <>
            <div className='my-5 titulos-galery'>
                <h4 className='text-secondary text-center categoria'>ÁREAS PÚBLICAS</h4>
                <h2 className='text-dark text-center titulo-galery'>Lounge & Restaurant</h2>
            </div>
            <div className="row">
                <div className="col-lg-6 mb-4">
                    <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" className="w-100 mb-4 rounded img-fluid img-galeria" />
                    <img src="https://images.unsplash.com/photo-1685922158565-34ce1db369b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt=""
                        className="w-100 rounded img-fluid img-galeria" />
                </div>
                <div className="col-lg-6 mb-4">
                    <img src="https://images.unsplash.com/photo-1685922158565-34ce1db369b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="" className="w-100 mb-4 rounded img-fluid img-galeria" />
                    <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" className="w-100 rounded img-fluid img-galeria" />
                </div>                
            </div>
        </>
    )
}

export default GaleryRestaurant