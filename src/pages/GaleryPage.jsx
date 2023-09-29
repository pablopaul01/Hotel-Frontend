import React from 'react'
import GaleryRecepcion from '../components/galeryPage/GaleryRecepcion'
import GaleryRestaurant from '../components/galeryPage/GaleryRestaurant'
import GalerySolarium from '../components/galeryPage/GalerySolarium'
import GaleryEspaciosTrabajo from '../components/galeryPage/GaleryEspaciosTrabajo'
import GaleryHabitaciones from '../components/galeryPage/GaleryHabitaciones'

const GaleryPage = () => {
  return (
    <div className='container container-galery'>
        <GaleryRecepcion />        
        <GaleryRestaurant />        
        <GalerySolarium /> 
        <GaleryEspaciosTrabajo />  
        <GaleryHabitaciones />     
    </div>
  )
}

export default GaleryPage