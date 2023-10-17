import React, { useEffect, useState } from 'react'
import "./categoryRooms.css"
import CategoryItem from './CategoryItem'
import { axiosInstance } from '../../config/axiosInstance'
import Swal from 'sweetalert2'
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CategoryRooms = () => {

    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true)

    const getCategories = async () => {

        try {
            setLoading(true)
            const response = await axiosInstance.get("/categorias")
            setCategories(response.data.categories)
            setLoading(false)
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
            <div className='mb-5 titulos-recepcion container-rooms'>
                <h4 className='text-secondary text-center categoria-recepcion'>EL HOTEL</h4>
                <h2 className='text-dark text-center titulo-recepcion'>Habitaciones</h2>
            </div>
            <div className='row m-3'>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-3 img-pasillo d-none d-md-inline">
                    <img src="https://res.cloudinary.com/dcv6aut2v/image/upload/v1697101850/banner-rooms_jziidf.jpg" alt="" className='img-fluid rounded' />
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    {
                        loading ? (
                            <Skeleton count={8} height={40}/>
                        ) 
                        : 
                        (
                            <div className="row">
                        {
                            categories.map((category) => (
                                <CategoryItem category={category} key={category._id}/>
                            ))
                        }
                    </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default CategoryRooms