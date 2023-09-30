import React from 'react'
import Room from './Room'
import { rooms } from '../../helpers/data'

const RoomList = () => {
    return (
        <div className='container'>
            {
                rooms.map((room) => (
                    <Room room={room} key={room.id} />
                ))
            }
        </div>
    )
}

export default RoomList