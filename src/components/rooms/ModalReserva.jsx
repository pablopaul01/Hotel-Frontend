import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { BsCalendar3 } from "react-icons/bs";
import "./modalReserva.css";
import Swal from "sweetalert2";
import { axiosInstance } from "../../config/axiosInstance";
import Spinner from 'react-bootstrap/Spinner';
import { Navigate, useNavigate } from "react-router-dom";


const ModalReserva = ({
  show,
  handleClose,
  selectedRooms,
  category,
  date,
  guests,
  allDates,
  categories,
}) => {
  const [loading, setLoading] = useState(false)
  const cantidad = selectedRooms.length * category.precio;
  const { startDate, endDate } = date[0];

  const navigate = useNavigate()
  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1; // ¡Atención! Los meses en JavaScript son 0-indexados
    const year = date.getFullYear();

    return `${day.toString().padStart(2, "0")}/${month
      .toString()
      .padStart(2, "0")}/${year}`;
  };

  const fechasReserva = allDates.map((timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString();
  });

  const fechasEnFormatoISO = fechasReserva.map((fecha) => {
    const [day, month, year] = fecha.split("/");
    return `${year}-${month}-${day}T03:00:00.000Z`;
  });

  const reserveRoom = async (fecha, roomID) => {
    const date = fecha; // fecha en formato ISO

    const data = {
      date,
      roomID,
    };
    const token = localStorage.getItem("token");
    try {
      setLoading(true)
      const resp = await axiosInstance.put(
        `/categoria/${category._id}/room/${roomID}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      handleClose();
      setLoading(false)
      navigate("/thankyou")
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: `Ocurrió un problema! Error${error.response.data.status}`,
        text: `${error.response.data.mensaje}`,
      });
    }
  };

  const updateUnavailableDates = async (roomID) => {
    reserveRoom(fechasEnFormatoISO[0], roomID);
  };

  const handleClick = () => {
    selectedRooms.forEach((room) => {
      const roomNumber = room.selectedRoomsNumber;
      const roomID = room.selectedRoomsId;
      fechasEnFormatoISO.forEach((fecha) => {
        reserveRoom(fecha, roomID);
      });
    });
  };
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-container"
      >
        <div className="header-container">
          <div className="modal-header mx-5 border border-top-0 border-end-0 border-start-0 py-0">
            <div className="my-5 ">
              <h4 className="text-white titulo-registro ms-4">
                Datos de su reserva
              </h4>
            </div>
            <div className="d-none d-md-block d-lg-block">
              <img
                src="https://res.cloudinary.com/dcv6aut2v/image/upload/v1697100801/RollingHotel-transparente_qah5k2.png"
                className="img-fluid mx-4"
                alt="logo-Rolling-Hotel"
                style={{ width: "150px" }}
              />
            </div>
          </div>
        </div>
        <Modal.Body className="modal-body">
          <div className="d-flex gap-1 align-items-0 flex-column">
            <div className="reserveDatail p-2">
              <div className="d-flex gap-2">
                <span>
                  <BsCalendar3 />
                </span>
                <span>
                  {formatDate(startDate)} - {formatDate(endDate)} -{" "}
                  {allDates.length} Noches
                </span>
              </div>
              <div className="d-flex gap-2">
                <span>Adultos {guests.adults}</span>
                <span>Niños: {guests.kids}</span>
              </div>
            </div>
          </div>

          <div className="d-flex flex-column reserveDatail mt-2 p-2">
            <p className="titleDetail">
              Categoria de habitación: {category.title}
              <span className="ofertDetail">
                (¡Hot Days! Oferta especial por tiempo limitado)
              </span>
            </p>
            <p className="m-0">
              Cantidad de habitaciones: {selectedRooms.length}
            </p>
            <div className="d-flex">
              <p className="m-0">Habitaciones asignadas:</p>

              {selectedRooms.map((room) => (
                <span key={room.selectedRoomsId}>
                  <p className="mx-3">{room.selectedRoomsNumber}</p>
                </span>
              ))}
            </div>
            <p>
              Precio de la habitación: ${category.precio}
              <small className="fs-7 text-secondary">/noche</small>
            </p>
          </div>
          <p className="totalDetail mt-4 pe-3">Total: ${cantidad}</p>
          <div className="d-flex justify-content-center">
            {loading ? (
              <Spinner />
            ): 
            (
              <button className="btn btn-brown" onClick={handleClick}>
              confirmar reserva
            </button>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalReserva;
