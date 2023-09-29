import React from 'react'
import CategoryRooms from '../components/CategoryRooms'
import ServicesBanner from '../components/ServicesBanner'
import ServiceRooms from '../components/ServiceRooms'

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