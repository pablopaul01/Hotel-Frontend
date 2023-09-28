import React from 'react'
import "./infoHome3.css"

const InfoHome3 = () => {
  return (
    <div className='container'>
      <h1 className='serviceTitle'>Rolling Gran Hotel cuenta una gran variedad de servicios y comodidades para que puedas disfrutar de una excelente estadía.</h1>
      <div className='d-flex justify-content-around'>
        <div className='text-center'>
          <img src="https://granhotelbuenosaires.com/wp-content/uploads/2017/07/icon-15-1.png" alt="hidromasaje" />
          <p className='serviceText'>Hidromasaje</p>
        </div>
        <div className='text-center'>
          <img src="https://granhotelbuenosaires.com/wp-content/uploads/2021/08/icon-hammock.png" alt="hidromasaje" />
          <p className='serviceText'>Solarium</p>
        </div>
        <div className='text-center'>
          <img src="https://granhotelbuenosaires.com/wp-content/uploads/2017/07/icon-12-1.png" alt="hidromasaje" />
          <p className='serviceText'>Wifi Áreas</p>
        </div>
        <div className='text-center'>
          <img src="https://granhotelbuenosaires.com/wp-content/uploads/2021/08/icon-business.png" alt="hidromasaje" />
          <p className='serviceText'>Centro de negocios</p>
        </div>
      </div>
    </div>
  )
}

export default InfoHome3