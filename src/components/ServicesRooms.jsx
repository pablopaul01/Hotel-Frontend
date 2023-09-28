import React from 'react'
import "../css/services.css"

const ServicesRooms = () => {
    return (
        <>
            {/* <div className='mb-5 titulos-galery'>
                <h4 className='text-secondary text-center categoria'>ÁREAS PÚBLICAS</h4>
                <h2 className='text-dark text-center titulo-galery'>Espacio de trabajo</h2>
            </div> */}
            <div className='container-fluid bg-img-services mt-5'>
                <div className="row">
                    <div className="col-6 service-description">
                        <div className='title-service'>
                            <h2 className='fs-1 text-light '>Servicios</h2>

                        </div>
                        <p className='text-light'>RollingGranHotel cuenta una gran variedad de servicios y comodidades para que puedas disfrutar de una excelente estadía.</p>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-6">

                            </div>
                            <div className="col-6">

                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </>
    )
}

export default ServicesRooms