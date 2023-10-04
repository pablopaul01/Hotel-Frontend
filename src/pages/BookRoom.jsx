import React, { useState } from 'react'
import RoomList from '../components/rooms/RoomList'
import SearchDate from '../components/date/SearchDate'



const BookRoom = () => {

    const [user, setuser] = useState([1])
    const [room, setroom] = useState({
        data: [],
        loading: true
    })
    const [isFilter, setIsFilter] = useState(false)

    return (
        <>
            <div className='titulos-rooms mb-4'>
                <h4 className='text-secondary text-center categoria'>RESERVA</h4>
                <h2 className='text-dark text-center titulo-galery'>Categoría de habitaciones</h2>
            </div>
            <div className="container-fluid mb-5">
                {
                    user.length > 0 ?
                        <>
                            <SearchDate setIsFilter={setIsFilter} isFilter={isFilter} />
                            {
                                !isFilter ?
                                    (
                                        <div className="alert alert-danger text-center w-100 my-5" role="alert">
                                            Seleccione una fecha
                                        </div>
                                    )
                                    :
                                    (
                                        <>
                                            <RoomList></RoomList>
                                        </>
                                    )
                            }
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