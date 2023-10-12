    import React, {useState} from 'react'
import { GrUser } from 'react-icons/gr'
import { Link } from 'react-router-dom';
import { categories } from '../../helpers/data';
import ModalReserva from './ModalReserva';
import "./room.css"


const Room = ({date, category, guests, allDates}) => {
    const [selectedRoomQty, setSelectedRoomQty] = useState("")
    const [selectedRooms, setSelectedRooms] = useState([{
        selectedRoomsNumber: "",
        selectedRoomsId: ""
    }])
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { capacidadMax, roomNumbers } = category;

    const { id } = category;

    const handleSelect = (e) => {
        setSelectedRoomQty([e.target.value])
    }

    const handleClick = () => {
        let updatedSelectedRooms = []; // Inicializamos un nuevo arreglo
        handleShow()

    for (let index = 0; index < selectedRoomQty * 1; index++) {
        const roomNumber = category.roomNumbers[index].number;
        const roomId = category.roomNumbers[index]._id;

        updatedSelectedRooms.push({
            selectedRoomsNumber: roomNumber,
            selectedRoomsId: roomId
        });
    }
    
    setSelectedRooms(updatedSelectedRooms);
    }
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-12 col-lg-5 col-xl-5">
                    <img src={category.imagenes[1].url} className="img-fluid rounded-start" alt={category.title} />
                </div>
                <div className="col-md-12 col-lg-7 col-xl-7">
                    <div className="card-body h-100 d-flex flex-column gap-0 justify-content-center py-1">
                        <h5 className="card-title reserva">{category.title}</h5>
                        <p className="card-text card-desc">{category.descripcion}</p>
                        <div className="row">
                            <div className="col-lg-5 col-md-6 text-center text-md-start ">
                                <span className='fs-2 mb-0 text-danger'>
                                    ${category.precio}<small className='fs-5 text-secondary'>/noche</small>
                                </span>
                            </div>
                            <div className='col-lg-7 col-md-6   '>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 text-center">
                                        <p className='fs-7 text-secondary mx-0 mb-0'>{category.capacidadMax} personas </p>
                                        {Array.from({ length: capacidadMax }, (_, index) => (
                                            <GrUser key={index} />
                                        ))}
                                    </div>
                                    <div className="col-lg-6 col-md-6 text-center">
                                        <label className="input fs-7 text-secondary d-block">Habitaciones</label>
                                        <select className="mx-2 mb-2" onChange={handleSelect}>
                                            <option value="0" >0</option>
                                            {
                                                category.roomNumbers.map((numRoom, index) => (
                                                    <option value={index+1} id={numRoom.id} key={numRoom._id} >{index+1}</option>
                                                ))
                                                
                                            }
                                        </select>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="d-flex justify-content-center justify-content-md-start">
                            <Link to="" className="btn btn-outline-light me-2" onClick={handleClick}>Reservar</Link>
                            <Link to={`/reserva-habitaciones/${id}`} id={id} className="btn btn-secondary">Ver más...</Link>
                        </div>
                        <ModalReserva show={show} handleClose={handleClose} selectedRooms={selectedRooms} category={category} date={date} guests={guests} allDates={allDates} categories={categories}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Room 