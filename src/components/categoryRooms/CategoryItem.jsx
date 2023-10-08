
import React from 'react'
import { Link } from 'react-router-dom'



const CategoryItem = ({ category }) => {


    return (

        <div className="col-lg-3 col-md-6 col-xs-12 col-sm-12">
            <Link to={`/reserva-habitaciones/${category.id}`}>
                <div className="card text-light card-img-room">
                    <img src={category.imagen[0].img} className="card-img img-fluid " alt={category.title} />
                    <div className="card-img-overlay">
                        <h5 className="card-title card-room">{category.title}</h5>
                    </div>
                </div>
            </Link>
        </div >

    )
}

export default CategoryItem