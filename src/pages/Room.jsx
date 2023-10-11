import React, { useEffect, useState } from 'react'
import { categories } from '../helpers/data'
import RoomDetail from '../components/rooms/RoomDetail'
import { useParams } from 'react-router'


const Room = () => {

   

    const [user, setUser] = useState([1]);

    const [category, setCategory] = useState({
        data: [],
        loading: true
    })

    const { id } = useParams();

    

    const getCategory = () => {
        const category = categories.filter(category => category.id === parseInt(id));
       
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
                            <div className='titulos-detail'>
                                <h4 className='text-secondary text-center categoria'>EL HOTEL</h4>
                                <h2 className='text-dark text-center titulo-galery'>Detalle</h2>
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