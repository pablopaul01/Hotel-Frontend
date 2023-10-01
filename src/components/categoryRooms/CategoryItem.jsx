import React from 'react'


const CategoryItem = ({ category }) => {
    return (

        <div className="col-lg-3 col-md-6 col-xs-12 col-sm-12">
            <div className="card text-light card-img-room">
                <img src={category.imagen} className="card-img img-fluid " alt={category.title} />
                <div className="card-img-overlay">
                    <h5 className="card-title card-room">{category.title}</h5>
                </div>
            </div>
        </div>

    )
}

export default CategoryItem