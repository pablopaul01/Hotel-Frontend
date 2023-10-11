import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import './usuarios.css'
import './formcreate.css'
import { BiEdit } from 'react-icons/bi'
import { MdBlock } from 'react-icons/md'
import { axiosInstance } from '../../../config/axiosInstance'
import Swal from 'sweetalert2';
import { RiDeleteBin6Line } from 'react-icons/ri'
import ModalEditUser from './ModalEditUser';



const UserTable = ({ getAllUsers, users }) => {

    //state del modal
    const [show, setShow] = useState(false);
    //state que guarda el id de cada usuario 
    const [idUser, setIdUser] = useState("")

    //funciones para abrir y cerrar modal
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //funcion para guardar el id del usuario que se desea editar
    const handleClick = (row) => {
        handleShow();
        setIdUser(row);
    }

    //funcion para eliminar un usuario
    const deleteUser = async (row) => {
        const token = localStorage.getItem("token");

        try {
            Swal.fire({
                title: 'Esta seguro de eliminar el usuario?',
                text: "No podrás revertir los cambios!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, eliminar!'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await axiosInstance.delete(`/usuario/${row}`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                    Swal.fire(
                        'Eliminado!',
                        'El usuario fue eliminado',
                        'success'
                    )
                    getAllUsers();
                }
            })
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: `Ocurrió un problema! Error${error.response.data.status}`,
                text: `${error.response.data.mensaje}`
            })
        } finally {
            getAllUsers();
        }
    }
    //funcion para cambiarle el estado de usuario a un usuario
    const disabledUser = async (row) => {
        const token = localStorage.getItem("token");
        try {
            const { data } = await axiosInstance.put(`/desactivar/usuario/${row}`, null, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
           
            Swal.fire(
                'Bien hecho!',
                `El usuario fue ${data.user.state ? ("activado") : ("desactivado")}!`,
                'success'
            )
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: `Ocurrió un problema! Error${error.response.data.status}`,
                text: `${error.response.data.mensaje}`
            })
        } finally {
            getAllUsers();
        }
    }

    //empiezan datos de la tabla
    const columns = [
        {
            name: "Nombre",
            selector: row => {
                return <p className='mb-0 text-table'>{row.name}</p>
            },
            sortable: true,
            center: true,
            maxWidth: "200px"
        },
        {
            name: "DNI",
            selector: row => {
                return <p className='mb-0 text-table'>{row.dni}</p>
            },
            sortable: true,
            center: true,
            maxWidth: "180px"

        },
        {
            name: "Celular",
            selector: row => {
                return <p className='mb-0 text-table'>{row.phone}</p>
            },
            sortable: true,
            center: true,
            maxWidth: "180px"

        },
        {
            name: "User",
            selector: row => {
                return <p className='mb-0 text-table'>{row.username}</p>
            },
            sortable: true,
            center: true,
            maxWidth: "240px"

        },
        {
            name: "Rol",
            selector: row => {
                return <p className='mb-0 text-table'>{row.role}</p>
            },
            sortable: true,
            center: true,
            maxWidth: "120px"

        },
        {
            name: "Estado de Cuenta",
            selector: row => {
                return <p className='mb-0 text-table'>{row.state ? ("activa") : ("desactivada")}</p>
            },
            sortable: true,
            center: true,
            maxWidth: "150px"

        },
        {
            name: "Acciones",
            selector: row => {
                return (
                    <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
                        <button className="btn btn-warning btn-sm mr-2" title="Editar" id="t-1" onClick={() => { handleClick(row._id) }}><BiEdit className='icon-crud' /></button>
                        <button className="btn btn-dark btn-sm" title="Suspender/Activar" id="t-1" onClick={() => { disabledUser(row._id) }}><MdBlock className='icon-crud' /></button>
                        <button className="btn btn-danger btn-sm" title="Eliminar" id="t-1" onClick={() => { deleteUser(row._id) }}><RiDeleteBin6Line className='icon-crud' /></button>
                    </div>
                )
            },
            center: true,
            minWidth: "350px"
        }
    ]
    const paginationComponentOptions = {
        rowsPerPageText: 'Filas por página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos',
    };

   
    return (
        <div className='d-flex flex-column align-items-end'>
            <DataTable
                columns={columns}
                data={users}
                pagination
                paginationComponentOptions={paginationComponentOptions}
            />
            <ModalEditUser show={show} handleClose={handleClose} setShow={setShow} idUser={idUser} getAllUsers={getAllUsers} />
        </div>
    )
}

export default UserTable