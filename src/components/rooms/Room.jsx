import React from 'react'
import { GrUser } from 'react-icons/gr'




const Room = ({ category }) => {

    const { capacidadMax } = category;
    console.log("category en category", category)

    const { roomNumbers } = category;
    console.log("array de habitaciones", roomNumbers)


    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-12 col-lg-4 col-xl-4">
                    <img src={category.imagen[1].img} className="img-fluid rounded-start" alt={category.title} />
                </div>
                <div className="col-md-12 col-lg-8 col-xl-8">
                    <div className="card-body h-100 justify-content-between d-flex flex-column">
                        <h5 className="card-title">{category.title}</h5>
                        <p className="card-text">{category.descripcion}</p>
                        <div className="row">
                            <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                                <p className='fs-2 mb-0 text-danger'>
                                    ${category.precio}<small className='fs-5 text-secondary'>/noche</small>
                                </p>
                            </div>
                            <div className='col-lg-7 col-md-7 col-sm-12 col-xs-12'>
                                <div className="row">
                                    <div className="col-lg-8 col-md-6 text-center">
                                        {
                                            capacidadMax === 4 &&
                                            (<><GrUser /><GrUser /><GrUser /><GrUser /></>)
                                        }
                                        {
                                            capacidadMax === 2 &&
                                            (<><GrUser /><GrUser /></>)
                                        }
                                        {
                                            capacidadMax === 3 &&
                                            (<><GrUser /><GrUser /><GrUser /></>)
                                        }
                                        {
                                            capacidadMax === 5 &&
                                            (<><GrUser /><GrUser /><GrUser /><GrUser /><GrUser /></>)
                                        }
                                        <p className='fs-7 text-secondary mx-0 mb-0'>{category.capacidadMax} personas </p>
                                    </div>
                                    <div className="col-lg-4 col-md-6 align-items-center d-flex justify-content-center">
                                        <label className="input fs-7 text-secondary">Habitaciones</label>
                                        <select className="mx-2">
                                            <option selected value="0">0</option>
                                            {
                                                roomNumbers.length === 1 &&
                                                (<option value="1">{roomNumbers[0].number}</option>)
                                            }
                                            {
                                                roomNumbers.length === 2 &&
                                                (<>
                                                    <option value="2">{roomNumbers[0].number}</option>
                                                    <option value="2">{roomNumbers[1].number}</option>
                                                </>)
                                            }
                                            {
                                                roomNumbers.length === 3 &&
                                                (<>
                                                    <option value="2">{roomNumbers[0].number}</option>
                                                    <option value="2">{roomNumbers[1].number}</option>
                                                    <option value="2">{roomNumbers[2].number}</option>
                                                </>)
                                            }
                                            {
                                                roomNumbers.length === 4 &&
                                                (<>
                                                    <option value="2">{roomNumbers[0].number}</option>
                                                    <option value="2">{roomNumbers[1].number}</option>
                                                    <option value="2">{roomNumbers[2].number}</option>
                                                    <option value="2">{roomNumbers[3].number}</option>
                                                </>)
                                            }                                           
                                        </select>
                                    </div>
                                </div>

                            </div>


                            <a href="" className='btn btn-outline-light text-light mt-2'>Reservar ahora</a>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Room 