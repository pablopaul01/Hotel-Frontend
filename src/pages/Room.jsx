import React, { useEffect, useState } from 'react'
import { categories } from '../helpers/data'
import RoomDetail from '../components/rooms/RoomDetail'
import { useParams } from 'react-router'
import { axiosInstance } from '../config/axiosInstance'

const Room = () => {





    const [categories, setCategories] = useState([])

    const getCategories = async () => {

        try {
            const response = await axiosInstance.get("/categorias")
            setCategories(response.data.categories)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getCategories()
    }, [])



    return (
        <>
            <div className='titulos-detail'>
                <h4 className='text-secondary text-center categoria'>EL HOTEL</h4>
                <h2 className='text-dark text-center titulo-galery'>Detalle</h2>
            </div>
            <div className="container">

                <RoomDetail categories={categories} />



            </div>


        </>
    )
}

export default Room