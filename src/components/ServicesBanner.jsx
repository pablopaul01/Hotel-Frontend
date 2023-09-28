import React from 'react'
import "../css/services.css"

const ServicesBanner = () => {
    return (
        <>
            {/* <div className='mb-5 titulos-galery'>
                <h4 className='text-secondary text-center categoria'>ÁREAS PÚBLICAS</h4>
                <h2 className='text-dark text-center titulo-galery'>Espacio de trabajo</h2>
            </div> */}
            <div className='container-fluid bg-img-services mt-5'>
                <div className="row m-5">
                    <div className="col-lg-6 col-md-12 service-description mt-5">
                        <div className='title-service'>
                            <h2 className='fs-1 text-light'>Servicios</h2>
                            <p className='text-light parrafo-service'>RollingGranHotel cuenta una gran variedad de servicios y comodidades para que puedas disfrutar de una excelente estadía.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 mt-5">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-6 col-xs-6 card-icon-services">
                                <div className="card-icon-service mb-5 text-center">
                                    <h3>Hidromasaje</h3>
                                    <img src="https://granhotelbuenosaires.com/wp-content/uploads/2017/07/icon-15-1.png" alt="hidromasaje" className='img-fluid' />
                                    <p className='mt-2 text-secondary sub-icon'>RELAX</p>
                                </div>
                                <div className="card-icon-service mb-5 text-center">
                                    <h3>WIFI</h3>
                                    <img src="https://granhotelbuenosaires.com/wp-content/uploads/2021/08/icon-hammock.png" alt="WIFI" className='img-fluid' />
                                    <p className='mt-2 text-secondary sub-icon'>INCLUIDO</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-6 col-xs-6 card-icon-services">
                                <div className="card-icon-service mb-5 text-center">
                                    <h3>Solarium</h3>
                                    <img src="https://granhotelbuenosaires.com/wp-content/uploads/2017/07/icon-12-1.png" alt="Solarium" className='img-fluid' />
                                    <p className='mt-2 text-secondary sub-icon'>RELAX</p>
                                </div>
                                <div className="card-icon-service mb-5 text-center">
                                    <h3>Cochera</h3>
                                    <img src="https://granhotelbuenosaires.com/wp-content/uploads/2021/08/icon-parking.png" alt="estacionamiento" className='img-fluid' />
                                    <p className='mt-2 text-secondary sub-icon'>OPCIONAL</p>
                                </div>
                            </div>
                        </div>



                    </div>

                </div>


            </div>
        </>
    )
}

export default ServicesBanner