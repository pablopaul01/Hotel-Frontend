import React from 'react'
import { GrUser } from 'react-icons/gr'




const Room = ({ category }) => {

    const { capacidad } = category;
    console.log("category en category", category)


    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={category.imagen} className="img-fluid rounded-start" alt={category.title} />
                </div>
                <div className="col-md-8">
                    <div className="card-body h-100 justify-content-between d-flex flex-column">
                        <h5 className="card-title">{category.title}</h5>
                        <p className="card-text">{category.descripcion}</p>
                        <div className='justify-content-end d-flex align-items-center'>
                            {
                                capacidad === 4 &&
                                (<><GrUser /><GrUser /><GrUser /><GrUser /></>)
                            }
                            {
                                capacidad === 2 &&
                                (<><GrUser /><GrUser /></>)
                            }
                            {
                                capacidad === 3 &&
                                (<><GrUser /><GrUser /><GrUser /></>)
                            }
                            <p className='fs-5 text-secondary mx-3 mb-0'>{category.capacidad} personas </p>
                            <a href="" className='btn btn-outline-light text-light'>Ver más..</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Room 