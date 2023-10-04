import React from 'react'
import Room from './Room'
import { categories } from '../../helpers/data'

const RoomList = ({date}) => {
    return (
        <div className='container'>
            {
                categories.map((category) => (
                    <Room date={date} category={category} key={category.id} />
                ))
            }
        </div>
    )
}

export default RoomList