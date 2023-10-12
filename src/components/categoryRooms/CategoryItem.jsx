
import React from 'react'
import { Link } from 'react-router-dom'



const CategoryItem = ({ category }) => {


    return (

        <div className="col-lg-4 col-md-6 col-xs-12 col-sm-12">
            <Link to={`/reserva-habitaciones/${category._id}`}>
                <div className="card text-light card-img-room mb-3">
                    <img src={category.imagenes[0]?.url} className="card-img img-fluid " alt={category.title} />
                    <div className="card-img-overlay">
                        <h5 className="card-title card-room fs-5">{category.title}</h5>
                    </div>
                </div>
            </Link>
        </div >

    )
}

export default CategoryItem