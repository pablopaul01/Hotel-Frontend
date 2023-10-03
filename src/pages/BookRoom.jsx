import React, { useState } from 'react'
import RoomList from '../components/rooms/RoomList'
import SearchDate from '../components/date/SearchDate'


const BookRoom = () => {

    const [user, setuser] = useState([1])
    const [room, setroom] = useState({
        data: [],
        loading: true
    })

    return (
        <>
            <div className='my-5 mt-5 titulos-galery'>
                <h4 className='text-secondary text-center categoria'>RESERVA</h4>
                <h2 className='text-dark text-center titulo-galery'>Categoría de habitaciones</h2>
            </div>
            <div className="container-fluid">
                {
                    user.length > 0 ?
                        <>
                            <SearchDate />
                            <RoomList></RoomList>


                        </>
                        :
                        <>
                            <div className="alert alert-danger text-center w-100" role="alert">
                                Para reservar una habitación debe iniciar sesión
                            </div>
                        </>
                }
            </div>
        </>
    )
}

export default BookRoom