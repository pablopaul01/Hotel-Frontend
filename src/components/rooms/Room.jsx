    import React, {useState} from 'react'
import { GrUser } from 'react-icons/gr'
import { Link } from 'react-router-dom';
import { categories } from '../../helpers/data';





const Room = ({date, category }) => {
    const [selectedRoomQty, setSelectedRoomQty] = useState("")
    const [selectedRooms, setSelectedRooms] = useState([{
        selectedRoomsNumber: "",
        selectedRoomsId: ""
    }])
    const { capacidadMax, roomNumbers } = category;
    console.log("category en category", category)

    // console.log("array de habitaciones", roomNumbers)

    const { id } = category;

    // const getDateInRange = (startDate, endDate) => {
    //     const start = new Date (startDate)
    //     const end = new Date (endDate)
    //     const fecha = new Date (start.getTime());
    //     let list = [];
    //     while (fecha <= end){
    //         list.push(new Date(fecha).getTime())
    //         fecha.setDate(fecha.getDate()+1) 
    //     }
    //     return list
    // }
    // const allDates = getDateInRange(date[0].startDate, date[0].endDate)
    // console.log("all dates", allDates)

    // const isAvailable = (roomNumber) => {
    //     const isFound = roomNumber.unavailableDates.some (date => {
    //         const fecha = new Date(date).getTime()
    //         console.log("que hay en date", allDates)
    //         console.log("que hay en fecha", fecha)
    
    //         const result = allDates.includes(fecha)
    //         console.log("result", result)
    //         return result
    //     })
    //     console.log(`Habitacion ${roomNumber.number}`, isFound )
    //     return !isFound
    // }

    // const getAvailableRooms = (categories) => {
    //     const availableRooms = categories.reduce((acc, category) => {
    //         const availableNumbers = category.roomNumbers.filter(room => isAvailable(room));
    //         if (availableNumbers.length > 0) {
    //             acc.push({
    //                 ...category,
    //                 roomNumbers: availableNumbers
    //             });
    //         }
    //         return acc;
    //     }, []);
    //     return availableRooms;
    // }

    // const availableRooms = getAvailableRooms(categories);

    // console.log("avaibleRooms", availableRooms)
    const handleSelect = (e) => {
        setSelectedRoomQty([e.target.value])
    }

    const handleClick = () => {
        let updatedSelectedRooms = []; // Inicializamos un nuevo arreglo

    for (let index = 0; index < selectedRoomQty * 1; index++) {
        const roomNumber = category.roomNumbers[index].number;
        const roomId = category.roomNumbers[index].id;

        updatedSelectedRooms.push({
            selectedRoomsNumber: roomNumber,
            selectedRoomsId: roomId
        });
    }
    
    setSelectedRooms(updatedSelectedRooms);
    }
    console.log("selectedRoomQty",selectedRoomQty);
    console.log("selectedRoom", selectedRooms)

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
                                            <option selected value="0" >0</option>
                                            {
                                                category.roomNumbers.map((numRoom, index) => (
                                                    <option value={index+1} id={numRoom.id} key={numRoom.id} >{index+1}</option>
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