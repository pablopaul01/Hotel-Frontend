import React from 'react'
import "../css/categoryRooms.css"

const CategoryRooms = () => {
    return (
        <>
            <div className='mb-5 titulos-galery'>
                <h4 className='text-secondary text-center categoria'>EL HOTEL</h4>
                <h2 className='text-dark text-center titulo-galery'>Habitaciones</h2>
            </div>
            <div className='row m-3'>
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 mb-3">
                    <img src="https://images.unsplash.com/photo-1495365200479-c4ed1d35e1aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" className='img-fluid rounded' />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12 mb-3">
                            
                            <div className="card text-light card-img-room">
                                <img src="https://images.unsplash.com/photo-1605346576608-92f1346b67d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" className="card-img img-fluid " alt="..." />
                                <div className="card-img-overlay">
                                    <h5 className="card-title">DOBLE TWIN STANDARD</h5>
                                </div>
                            </div>
                            
                            
                            <div className="card text-light-emphasis mt-3 card-img-room">
                                <img src="https://images.unsplash.com/photo-1631049421450-348ccd7f8949?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" className="card-img img-fluid" alt="..." />
                                <div className="card-img-overlay">
                                    <h5 className="card-title">DOBLE MATRIMONIAL STANDARD</h5>
                                </div>
                            </div>
                            
                        </div>
                        <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
                            
                            <div className="card text-light-emphasis card-img-room">
                                <img src="https://images.unsplash.com/photo-1619128395560-8a749ac9926d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" className="card-img img-fluid" alt="..." />
                                <div className="card-img-overlay">
                                    <h5 className="card-title">TRIPLE STANDARD</h5>
                                </div>
                            </div>
                            
                            
                            <div className="card text-light mt-3 card-img-room">
                                <img src="https://images.unsplash.com/photo-1613553474179-e1eda3ea5734?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" className="card-img img-fluid" alt="..." />
                                <div className="card-img-overlay">
                                    <h5 className="card-title">SUITE</h5>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CategoryRooms