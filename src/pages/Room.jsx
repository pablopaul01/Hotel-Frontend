import React, { useEffect, useState } from 'react'
import RoomDetail from '../components/rooms/RoomDetail'
import { axiosInstance } from '../config/axiosInstance'
import Swal from 'sweetalert2'


const Room = () => {





    const [categories, setCategories] = useState([])

    const getCategories = async () => {

        try {
            const response = await axiosInstance.get("/categorias")
            setCategories(response.data.categories)

        } catch (error) {
            Swal.fire({
                icon: "error",
                title: `Ocurrió un problema! Error${error.response.data.status}`,
                text: `${error.response.data.mensaje}`
            })
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