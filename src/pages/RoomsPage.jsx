import React from 'react'
import CategoryRooms from '../components/CategoryRooms'
import ServicesRooms from '../components/ServicesRooms'



const RoomsPage = () => {
    return (
        <>
            <div className='container'>
                <CategoryRooms />
            </div>
            <ServicesRooms />
        </>
    )
}

export default RoomsPage