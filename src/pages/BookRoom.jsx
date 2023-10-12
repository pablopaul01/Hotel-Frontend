import React, { useState } from 'react'
import RoomList from '../components/rooms/RoomList'
import SearchDate from '../components/date/SearchDate'



const BookRoom = () => {


    const [isFilter, setIsFilter] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [guests, setGuests] = useState({
        adults: "1",
        kids: "0"
    })


    return (
        <>
            <div className='titulos-rooms mb-4'>
                <h4 className='text-secondary text-center categoria'>RESERVA</h4>
                <h2 className='text-dark text-center titulo-galery'>Categoría de habitaciones</h2>
            </div>
            <div className="container-fluid mb-5">

                <SearchDate date={date} setDate={setDate} setIsFilter={setIsFilter} isFilter={isFilter} guests={guests} setGuest={setGuests} />
                {
                    !isFilter ?
                        (
                            <div>
                                <div className="alert alert-danger text-center w-100 my-5" role="alert">
                                    Seleccione una fecha
                                </div>
                                <RoomList date={date} guests={guests} isFilter={isFilter}></RoomList>
                            </div>

                        )
                        :
                        (
                            <>
                                <RoomList date={date} guests={guests} isFilter={isFilter}></RoomList>
                            </>
                        )
                }

            </div>
        </>
    )
}

export default BookRoom