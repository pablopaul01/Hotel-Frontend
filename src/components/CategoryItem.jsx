import React from 'react'


const CategoryItem = ({ room }) => {
    return (

        <div className="col-lg-3 col-md-6 col-xs-12 col-sm-12">
            <div className="card text-light card-img-room">
                <img src={room.imagen} className="card-img img-fluid " alt={room.tipo} />
                <div className="card-img-overlay">
                    <h5 className="card-title card-room">{room.tipo}</h5>
                </div>
            </div>
        </div>

    )
}

export default CategoryItem