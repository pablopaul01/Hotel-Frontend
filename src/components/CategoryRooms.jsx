import React from 'react'
import "../css/categoryRooms.css"
import { rooms } from '../helpers/data.js'
import CategoryItem from './CategoryItem'

const CategoryRooms = () => {
    return (
        <>
            <div className='mb-5 titulos-recepcion'>
                <h4 className='text-secondary text-center categoria-recepcion'>EL HOTEL</h4>
                <h2 className='text-dark text-center titulo-recepcion'>Habitaciones</h2>
            </div>
            <div className='row m-3'>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-3 img-pasillo">
                    <img src="../../public/banner-rooms.jpg" alt="" className='img-fluid rounded' />
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="row">
                        {
                            rooms.map((room) => (
                                <CategoryItem room={room} key={room.id} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default CategoryRooms