import React, { useState, useEffect } from 'react'
import '../components/admin/usuario/usuarios.css'
import UserTable from '../components/admin/usuario/UserTable'
import ModalCreate from '../components/admin/usuario/ModalCreate'
import { axiosInstance } from '../config/axiosInstance'


const Usuarios = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    const token = localStorage.getItem("token");
    const response = await axiosInstance.get("/usuarios", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log(response);
    console.log(response.data);
    console.log(response.data.users);
    setUsers(response.data.users);
  }

  useEffect(() => {
    getAllUsers();
  }, [])

  return (
    <div className='container-fluid container-crud'>
      <div className="row">
        <div className="col-12">
          <p className='title-admin'>Administración de usuarios</p>
          <hr />
          <button className='btn btn-brown' onClick={handleShow}>Crear usuario</button>
        </div>
      </div>
      <div className="row">
        <div className="col mt-5"><UserTable getAllUsers={getAllUsers} users={users} /></div>
      </div>
      <ModalCreate show={show} handleClose={handleClose} setShow={setShow} getAllUsers={getAllUsers} users={users} />
    </div>
  )
}

export default Usuarios