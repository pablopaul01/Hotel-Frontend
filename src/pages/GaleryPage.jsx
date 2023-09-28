import React from 'react'
import GaleryRecepcion from '../components/GaleryRecepcion'
import GaleryRestaurant from '../components/GaleryRestaurant'
GaleryRestaurant


const GaleryPage = () => {
  return (
    <div className='container'>
        <GaleryRecepcion />
        <GaleryRestaurant />
    </div>
  )
}

export default GaleryPage