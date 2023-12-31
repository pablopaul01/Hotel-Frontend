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
import jwtDecode from 'jwt-decode';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'




const UserTable = ({ getAllUsers, users, pending }) => {


    const [show, setShow] = useState(false);
    const [idUser, setIdUser] = useState("")

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClick = (row) => {
        handleShow();
        setIdUser(row);
    }

    const deleteUser = async (row) => {
        const token = localStorage.getItem("token");
        const decoded = jwtDecode(token);
        if (row === decoded.sub){
            Swal.fire({
                icon: "error",
                title: `Ocurrió un problema!`,
                text: `No se puede eliminar un usuario logueado`
            })
        }
        else
        {
            
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
    }

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

    const columns = [
        {
            name: "Nombre",
            selector: row => row.name,
            sortable: true,
            center: true,
            maxWidth: "200px"
        },
        {
            name: "DNI",
            selector: row => row.dni,
            sortable: true,
            center: true,
            maxWidth: "180px"

        },
        {
            name: "Celular",
            selector: row => row.phone,
            sortable: true,
            center: true,
            maxWidth: "180px"

        },
        {
            name: "User",
            selector: row => row.username,
            sortable: true,
            center: true,
            maxWidth: "240px"

        },
        {
            name: "Rol",
            selector: row => row.role,
            sortable: true,
            center: true,
            maxWidth: "120px"

        },
        {
            name: "Estado de Cuenta",
            selector: row => {
                return <p className='mb-0'>{row.state ? ("activa") : ("desactivada")}</p>
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
<>
{
            pending ? 
            (
                <div>
                    <Skeleton count={10} height={40} />
                 </div>
            )
            :
            (
                <div className='d-flex flex-column align-items-end'>
                <DataTable
                    columns={columns}
                    data={users}
                    pagination
                    paginationComponentOptions={paginationComponentOptions}
                    progressPending={pending}
                />
                <ModalEditUser show={show} handleClose={handleClose} setShow={setShow} idUser={idUser} getAllUsers={getAllUsers} />
            </div>
            )
        }
</>

    )
}

export default UserTable