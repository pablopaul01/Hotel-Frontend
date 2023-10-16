import React from 'react'
import "../css/thankyou.css"

const ThankYou = () => {
  return (
    <div className='text-center thankyou'>
      <h1 className='thankyou_title mb-3'>¡Muchas gracias!</h1>
      <p className='thankyou_text'>Su reserva se ha generado exitosamente, en breve recibirá un correo electrónico con los detalles de la misma.</p>
      <div className="container pb-5">
        <div className="row d-flex justify-content-center">
        <div className="col-12 ">
      <img className="img-fluid" src="https://res.cloudinary.com/dcv6aut2v/image/upload/v1697489175/thankyouthin_tc32hg.jpg" alt="thank you" />
      </div>
        </div>
      </div>
    </div>
  )
}

export default ThankYou