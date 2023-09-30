import React from 'react'
import "./Footer.css"

const FooterHotel = () => {
  return (
    <div className='footer-container container-fluid'>
        <div className='row py-4'>
            <div className="col-4">
                <img src="https://res.cloudinary.com/dcv6aut2v/image/upload/v1695793253/RollingHotel-transparente_vk9yak.png" alt="logo Rolling" style={{width:"140px"}}/>
        </div>
            <div className="ubicacion-col col-4">
                <h3 className='title-footer'>Ubicación</h3>
                <p className='subtitle-footer mb-0'>Marcos paz 759</p>
                <p className='subtitle-footer mb-0'>San Miguel de Tucuman, Tucumán, Argentina</p>
                <p className='subtitle-footer mb-0'>Tel.:(54-381)4324813</p>
                <p className='subtitle-footer mb-0'>reservas@rollingranhotel.com</p>
                
            </div>
            <div className="reserva-col col-4">
                <h3 className='title-footer'>Reservas</h3>
                <p className='subtitle-footer mb-0'>Celular:(54-381) 15546932</p>
                <p className='subtitle-footer mb-0'>WhatsApp:(54-381) 156974321</p>
                <button className='button-footer mt-2'>RESERVAR AHORA</button>
            </div>

        </div>

    </div>
  )
}

export default FooterHotel