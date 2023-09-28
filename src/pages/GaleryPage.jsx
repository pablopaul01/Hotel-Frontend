import React from 'react'
import GaleryRecepcion from '../components/GaleryRecepcion'
import GaleryRestaurant from '../components/GaleryRestaurant'
import GalerySolarium from '../components/GalerySolarium'
import GaleryEspaciosTrabajo from '../components/GaleryEspaciosTrabajo'
import GaleryHabitaciones from '../components/GaleryHabitaciones'

const GaleryPage = () => {
  return (
    <div className='container'>
        <GaleryRecepcion />        
        <GaleryRestaurant />        
        <GalerySolarium /> 
        <GaleryEspaciosTrabajo />  
        <GaleryHabitaciones />     
    </div>
  )
}

export default GaleryPage