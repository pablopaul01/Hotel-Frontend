import React from 'react'
import "../infoHome1/infohome1.css"

const InfoHome1 = () => {
  return (
    <div className='container-fluid py-5'>
        <div className="row pt-5 d-flex flex-row justify-content-center pb-5">
            <div className="col-lg-5 col-12 text-center mt-5">
                <p className='infoSubtitle1'>DESCANSO</p>
                <h2 className='infoTitle1'>Relajate en nuestro Hotel</h2>
                <p className='infoText1 pt-4'>Rolling Gran Hotel tiene como objetivo conseguir que tu visita sea lo más relajante y agradable posible, razón por la que tantos huéspedes siguen volviendo año tras año.</p>
            </div>
            <div className="col-lg-5 col-12 d-flex justify-content-center">
                <img src="https://granhotelbuenosaires.com/wp-content/uploads/2021/08/relax-ghba.jpg" alt="theHotel" className='theHotel'/>
            </div>
        </div>
 
    </div>
  )
}

export default InfoHome1