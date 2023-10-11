import React, { useState, useEffect } from 'react'
import '../components/admin/usuario/usuarios.css'
import UserTable from '../components/admin/usuario/UserTable'
import ModalCreate from '../components/admin/usuario/ModalCreate'
import { axiosInstance } from '../config/axiosInstance'


const Usuarios = () => {
  //state del modal
  const [show, setShow] = useState(false);
  //state con arrays de los usuarios
  const [users, setUsers] = useState([]);

  //funciones para abrir y cerrar modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //funcion asincrona que busca los usuarios en la base de datos mediante axios
  const getAllUsers = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axiosInstance.get("/usuarios", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setUsers(response.data.users);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: `Ocurrió un problema! Error${error.response.data.status}`,
        text: `${error.response.data.mensaje}`
      })
    }
  }

  useEffect(() => {
    getAllUsers();
  }, [])

  return (
    <div className='container container-crud mb-5'>
      
        <div className="d-flex justify-content-between ">
          <h2 className='display-5'>Administración de usuarios</h2>
          <button className='btn btn-outline-light' onClick={handleShow}>Crear usuario</button>
        </div>
      
      <hr />
      <div className="row">
        <div className="col mt-5"><UserTable getAllUsers={getAllUsers} users={users} /></div>
      </div>
      <ModalCreate show={show} handleClose={handleClose} setShow={setShow} getAllUsers={getAllUsers} users={users} />
    </div>
  )
}

export default Usuarios