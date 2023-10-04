    import React, {useState} from 'react'
import { GrUser } from 'react-icons/gr'
import { Link } from 'react-router-dom';





const Room = ({date, category }) => {
    const [selectedRoom, setSelectedRoom] = useState([])
    const { capacidadMax } = category;
    console.log("category en category", category)

    const { roomNumbers } = category;
    console.log("array de habitaciones", roomNumbers)

    const { id } = category;

    const getDateInRange = (startDate, endDate) => {
        const start = new Date (startDate)
        const end = new Date (endDate)
        const fecha = new Date (start.getTime());
        let list = [];
        while (fecha <= end){
            list.push(new Date(fecha).getTime())
            fecha.setDate(fecha.getDate()+1) 
        }
        return list
    }
    const allDates = getDateInRange(date[0].startDate, date[0].endDate)

    const isAvaible = (roomNumber) => {
        const isFound = roomNumber.unavailableDates.some (date => {
            // const fecha = new Date(date).getTime()
            // console.log("que hay en date", allDates)
            // console.log("que hay en fecha", fecha)
            allDates.includes(new Date(date).getTime())
        })
        console.log(`Habitacion ${roomNumber.number}`, isFound )
        return !isFound
    }

    const room = {
        id: 11,
        number: 101,
        unavailableDates: ["10-4-2023"]
    }
    isAvaible(room)
    const handleSelect = (e) => {
        setSelectedRoom([e.target.value])
    }

    const handleClick = () => {

    }
    console.log("selectedRoom", selectedRoom)
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
                            <div className="col-lg-5 col-md-6 text-center text-md-start ">
                                <span className='fs-2 mb-0 text-danger'>
                                    ${category.precio}<small className='fs-5 text-secondary'>/noche</small>
                                </span>
                            </div>
                            <div className='col-lg-7 col-md-6   '>
                                <div className="row">
                                    <div className="col-lg-8 col-md-6 text-center">
                                        <p className='fs-7 text-secondary mx-0 mb-0'>{category.capacidadMax} personas </p>
                                        {Array.from({ length: capacidadMax }, (_, index) => (
                                            <GrUser key={index} />
                                        ))}
                                    </div>
                                    <div className="col-lg-4 col-md-6 text-center">
                                        <label className="input fs-7 text-secondary d-block">Habitaciones Disponibles</label>
                                        <select className="mx-2 mb-2" onChange={handleSelect}>
                                            <option selected value="0" ></option>
                                            {
                                                roomNumbers.map((roomNumber, index) => (
                                                    <option value={roomNumber.id} roomNumber={roomNumber} key={roomNumber.id}>{roomNumber.number}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                </div>

                            </div>


                            {/* <a href="" className='btn btn-outline-light text-light mt-2'>Reservar ahora</a> */}


                        </div>
                        <div className="d-flex justify-content-center justify-content-md-start">
                            <Link to="" class="btn btn-outline-light me-2" onClick={handleClick}>Reservar</Link>
                            <Link to={`/reserva-habitaciones/${id}`} id={id} class="btn btn-secondary">Ver más...</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Room 