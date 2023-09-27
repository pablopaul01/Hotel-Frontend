import React from 'react'
import "../infoHome1/infohome2.css"


const InfoHome2 = () => {
  return (
    <div className='container-fluid container-commonspace'>
        <div className="row">
            <div className="col-6 gridImg px-0">
                <div className='d-flex'>
                    <div className='container-img'>
                        <img className="commonarea" src="https://images.unsplash.com/photo-1525905708812-b271b5e3b2f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1529&q=80" alt="area1" />
                    </div>
                    <div className='container-img'>
                        <img className="commonarea" src="https://images.unsplash.com/photo-1525905708812-b271b5e3b2f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1529&q=80" alt="area1" />
                    </div>
                </div>
                <div className='d-flex'>
                    <div className='container-img'>
                        <img className="commonarea" src="https://images.unsplash.com/photo-1525905708812-b271b5e3b2f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1529&q=80" alt="area1" />
                    </div>
                    <div className='container-img'>
                        <img className="commonarea" src="https://images.unsplash.com/photo-1525905708812-b271b5e3b2f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1529&q=80" alt="area1" />
                    </div>
                </div>
            </div>
            <div className="col-5 px-5 pb-4 d-flex flex-column justify-content-center align-items-center me-auto ms-auto">
                <div className='text-left pt-4 mb-5 description'>
                    <p className='infoSubtitle mb-0'>ÁREAS COMUNES</p>
                    <h2 className='infoTitle'>Descubre nuestros <span className='secondText'>Espacios</span></h2>
                </div>
                
                <div className="d-flex gap-5 mb-5">                
                    <p className='infoText'>En nuestro Hotel te sentirás como en tu propia casa además de las 87 habitaciones con decoraciones diferentes contamos con áreas comunes de descanso y áreas de trabajo.
                    </p>
                    <p className='infoText'>Sala de reuniones y un centro de negocios para desarrollar tu actividad laboral desde donde disfrutarás de su magnífica ubicación en pleno centro de Aruba..
                    </p>
                </div> 

                <span className='btn-commonspace d-block'>Ver más</span>               
            </div>
        </div>
    </div>
  )
}

export default InfoHome2