import React from 'react'
import "./infoHome3.css"

const InfoHome3 = () => {
  return (
    <div className='container mb-5'>
      <div className="row">
        <div className="col">
            <h1 className='serviceTitle'>Rolling Gran Hotel cuenta una gran variedad de servicios y comodidades para que puedas disfrutar de una excelente estadía.</h1>
            <div className='d-flex flex-lg-row flex-column justify-content-lg-around'>
              <div className='text-center'>
                <img className="iconService" src="https://granhotelbuenosaires.com/wp-content/uploads/2017/07/icon-15-1.png" alt="hidromasaje" />
                <p className='serviceText'>Hidromasaje</p>
              </div>
              <div className='text-center'>
                <img className="iconService" src="https://granhotelbuenosaires.com/wp-content/uploads/2021/08/icon-hammock.png" alt="hidromasaje" />
                <p className='serviceText'>Solarium</p>
              </div>
              <div className='text-center'>
                <img className="iconService" src="https://granhotelbuenosaires.com/wp-content/uploads/2017/07/icon-12-1.png" alt="hidromasaje" />
                <p className='serviceText'>Wifi Áreas</p>
              </div>
              <div className='text-center'>
                <img className="iconService" src="https://granhotelbuenosaires.com/wp-content/uploads/2021/08/icon-business.png" alt="hidromasaje" />
                <p className='serviceText'>Centro de negocios</p>
              </div>
            </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12 col-lg-6 text-center justify-content-center d-flex flex-column px-5">
            <p className='infoSubtitle1'>LOUNGE</p>
            <h2 className='infoTitle1'>Confitería</h2>
            <p className='mt-4 infoText1'>Servicio de habitaciones, con un bar de aperitivos y cócteles preparados por nuestros expertos.</p>
        </div>
        <div className="col-12 col-lg-6 container-img p-0">
            <img className="commonarea" src="https://images.unsplash.com/photo-1552566626-dead1fd56ae7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="lounge" />
        </div>
        <div className="col-12 col-lg-6 container-img p-0">
            <img className="commonarea" src="https://images.unsplash.com/photo-1590447158019-883d8d5f8bc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80" alt="reception" />
        </div>
        <div className="col-12 col-lg-6 text-center justify-content-center d-flex flex-column px-5 pt-5 pt-lg-0">
            <p className='infoSubtitle1'>24 HORAS</p>
            <h2 className='infoTitle1'>Recepción</h2>
            <p className='mt-4 infoText1'>Desde la recepción del Hotel Gran Hotel Buenos Aires es posible solicitar una caja fuerte e información turística, conserje y espacio para guardar el equipaje.</p>
        </div>
      </div>
    </div>
  )
}

export default InfoHome3