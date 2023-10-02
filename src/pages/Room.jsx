import React, { useEffect, useState } from 'react'
import { rooms } from '../helpers/data'
// import RoomCarrousel from '../components/rooms/RoomCarrousel'
import RoomDetail from '../components/rooms/RoomDetail'
import { useParams } from 'react-router'


const Room = () => {

    console.log(rooms)

    const [user, setUser] = useState([1]);

    const [room, setRoom] = useState({
        data: [],
        loading: true
    })

    const { id } = useParams();

    console.log(id);

    const getRoom = () => {
        const habitacion = rooms.filter(room => room.id === parseInt(id));
        console.log("dentro de get", habitacion)
        setRoom({
            data: habitacion[0],
            loading: false
        })
    }

    useEffect(() => {
        getRoom()
    }, [])


    return (
        <>
            {
                room.data ?
                    (
                        <>
                            <div className='my-5 mt-5 titulos-galery'>
                                <h4 className='text-secondary text-center categoria'>HOTEL</h4>
                                <h2 className='text-dark text-center titulo-galery'>Reserva</h2>
                            </div>
                            <div className="container">
                                {
                                    user.length > 0 ?
                                        <>
                                            <RoomDetail room={room} />
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
                    :
                    (
                        <h1>ERROR</h1>
                    )
            }
        </>
    )
}

export default Room