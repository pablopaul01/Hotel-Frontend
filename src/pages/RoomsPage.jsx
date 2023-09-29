import React from 'react'
import CategoryRooms from '../components/categoryRooms/CategoryRooms'
import ServicesBanner from '../components/categoryRooms/ServicesBanner'
import ServiceRooms from '../components/categoryRooms/ServiceRooms'

const RoomsPage = () => {
    return (
        <>
            <div className='container container-rooms'>
                <CategoryRooms />
            </div>
            <ServicesBanner />
            <ServiceRooms />
        </>
    )
}

export default RoomsPage