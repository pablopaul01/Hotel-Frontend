import React from 'react'

const ServiceRooms = () => {
    return (
        <div className='container'>
            <div className='mb-5 titulos-galery'>
                <h4 className='text-secondary text-center categoria'>HABITACIONES</h4>
                <h2 className='text-dark text-center titulo-galery'>Incluidos</h2>
            </div>
            <div className="row">
                <div className="col-4">
                    <img src="" alt="" />
                    <p>Baño privado</p>
                    <img src="" alt="" />
                    <p>Desayuno Buffet</p>
                </div>
                <div className="col-4">
                    <img src="" alt="" />
                    <p>Cable TV</p>
                    <img src="" alt="" />
                    <p>Frigobar</p>
                </div>
                <div className="col-4">
                    <img src="" alt="" />
                    <p>Aireacondicionado</p>
                    <img src="" alt="" />
                    <p>WIFI</p>
                </div>
            </div>

            <div className='my-5 titulos-galery'>
                <h4 className='text-secondary text-center categoria'>EL HOTEL</h4>
                <h2 className='text-dark text-center titulo-galery'>Opcionales</h2>
            </div>
            <div className="row">
                <div className="col-4">
                    <img src="" alt="" />
                    <p>Atención urgencias médicas las 24 horas</p>
                    <img src="" alt="" />
                    <p>Confitería</p>
                </div>
                <div className="col-4">
                    <img src="" alt="" />
                    <p>Lavandería y Tintorería</p>
                    <img src="" alt="" />
                    <p>Centro de negocios</p>
                </div>
                <div className="col-4">
                    <img src="" alt="" />
                    <p>Sala de reuniones</p>
                    <img src="" alt="" />
                    <p>Room service las 24 horas</p>
                </div>
            </div>

        </div>
    )
}

export default ServiceRooms