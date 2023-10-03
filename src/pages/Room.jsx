import React, { useEffect, useState } from 'react'
import { categories } from '../helpers/data'
// import RoomCarrousel from '../components/rooms/RoomCarrousel'
import RoomDetail from '../components/rooms/RoomDetail'
import { useParams } from 'react-router'


const Room = () => {

    // console.log(rooms)

    const [user, setUser] = useState([1]);

    const [category, setCategory] = useState({
        data: [],
        loading: true
    })

    const { id } = useParams();

    console.log(id);

    const getCategory = () => {
        const category = categories.filter(category => category.id === parseInt(id));
        // console.log("dentro de get", habitacion)
        setCategory({
            data: category[0],
            loading: false
        })
    }

    useEffect(() => {
        getCategory()
    }, [])


    return (
        <>
            {
                category.data ?
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
                                            <RoomDetail category={category} />
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