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
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);

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
                            <SearchDate date={date} setDate={setDate} setIsFilter={setIsFilter} isFilter={isFilter} />
                            {
                                !isFilter ?
                                    (
                                        <div>
                                            <div className="alert alert-danger text-center w-100 my-5" role="alert">
                                            Seleccione una fecha
                                            </div>
                                            <RoomList date={date}></RoomList>
                                        </div>
                                        
                                    )
                                    :
                                    (
                                        <>
                                            <RoomList date={date}></RoomList>
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