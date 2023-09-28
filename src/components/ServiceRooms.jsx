import React from 'react'

const ServiceRooms = () => {
    return (
        <div className='container'>
            <div className='mb-5 titulos-recepcion'>
                <h4 className='text-secondary text-center categoria-recepcion'>HABITACIONES</h4>
                <h2 className='text-dark text-center titulo-recepcion'>Incluidos</h2>
            </div>
            <div className="row text-center">
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                    <img src="https://granhotelbuenosaires.com/wp-content/uploads/2017/07/icon-10.png" alt="" />
                    <p className="parrafo-service">Baño privado</p>
                    <img src="https://granhotelbuenosaires.com/wp-content/uploads/2017/07/icon-17.png" alt="" />
                    <p className="parrafo-service">Desayuno Buffet</p>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                    <img src="https://granhotelbuenosaires.com/wp-content/uploads/2017/07/icon-18.png" alt="" />
                    <p className="parrafo-service">Cable TV</p>
                    <img src="https://granhotelbuenosaires.com/wp-content/uploads/2021/08/icon-frigobar.png" alt="" />
                    <p className="parrafo-service">Frigobar</p>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                    <img src="https://granhotelbuenosaires.com/wp-content/uploads/2021/08/icon-ac.png" alt="" />
                    <p className="parrafo-service">Aireacondicionado</p>
                    <img src="https://granhotelbuenosaires.com/wp-content/uploads/2017/07/icon-12-1.png" alt="" />
                    <p className="parrafo-service">WIFI</p>
                </div>
            </div>

            <div className='my-5 titulos-recepcion'>
                <h4 className='text-secondary text-center categoria-recepcion'>EL HOTEL</h4>
                <h2 className='text-dark text-center titulo-recepcion'>Opcionales</h2>
            </div>
            <div className="row text-center">
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                    <img src="https://granhotelbuenosaires.com/wp-content/uploads/2021/08/icon-urgencias.png" alt="" />
                    <p className="parrafo-service">Atención urgencias médicas las 24 horas</p>
                    <img src="https://granhotelbuenosaires.com/wp-content/uploads/2021/08/icon-EVENTOS.png" alt="" />
                    <p className="parrafo-service">Confitería</p>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                    <img src="https://granhotelbuenosaires.com/wp-content/uploads/2017/07/icon-15.png" alt="" />
                    <p className="parrafo-service">Lavandería y Tintorería</p>
                    <img src="https://granhotelbuenosaires.com/wp-content/uploads/2021/08/icon-business.png" alt="" />
                    <p className="parrafo-service">Centro de negocios</p>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                    <img src="https://granhotelbuenosaires.com/wp-content/uploads/2021/08/icon-conferences.png" alt="" />
                    <p className="parrafo-service">Sala de reuniones</p>
                    <img src="https://granhotelbuenosaires.com/wp-content/uploads/2021/08/icon-17-b.png" alt="" />
                    <p className="parrafo-service">Room service las 24 horas</p>
                </div>
            </div>
        </div>
    )
}

export default ServiceRooms