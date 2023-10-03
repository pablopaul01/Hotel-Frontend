import React from 'react'
import Room from './Room'
import { categories } from '../../helpers/data'

const RoomList = () => {
    return (
        <div className='container'>
            {
                categories.map((category) => (
                    <Room category={category} key={category.id} />
                ))
            }
        </div>
    )
}

export default RoomList