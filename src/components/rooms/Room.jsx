import React from 'react'

const Room = ({ room }) => {

    console.log("room en reserva",room)
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={room.imagen[0].img} className="img-fluid rounded-start" alt={room.title} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{room.title}</h5>
                        <p className="card-text">{room.descripcion}</p>
                        <p className='fs-4'>${room.precio}</p>
                        <a href="" className='btn btn-dark'>Ver más..</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Room 