import React, { useState } from 'react'
import DataTable from 'react-data-table-component';
import '../usuario/usuarios.css'
import './formcreate.css'
import { BiEdit } from 'react-icons/bi'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { axiosInstance } from '../../../config/axiosInstance';
import ModalUpdateCategory from './ModalUpdateCategory';
import Swal from 'sweetalert2';


const CategorieTable = ({ categories, setCategories, getCategories }) => {

    const [show, setShow] = useState(false);
    const [categorie, setCategorie] = useState({});


    const getCategorieById = async (row) => {
        const token = localStorage.getItem("token");
        const response = await axiosInstance.get(`/categoria/${row}`, null, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    
        setCategorie(response.data.categorie);
    }

    const handleClick = (row) => {

        getCategorieById(row);
        handleShow()
    }
 
    const deleteCategorie = async (row) => {
        const token = localStorage.getItem("token");

        try {
            Swal.fire({
                title: 'Esta seguro de eliminar la categoría?',
                text: "No podrás revertir los cambios!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, eliminar!'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await axiosInstance.delete(`/categoria/${row}`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }); Swal.fire(
                        'Eliminado!',
                        'La categoría fue eliminada',
                        'success'
                    )
                    getCategories()
                }
            })
        }
        catch (error) {
            Swal.fire({
                icon: "error",
                title: `Ocurrió un problema! Error${error.response.data.status}`,
                text: `${error.response.data.mensaje}`
            })
        } finally {
            getCategories()
        }
    }

    const columns = [
        {
            name: "Tipo",
            selector: row => row.title,
            sortable: true,
            center: true,
            maxWidth: "380px"

        },
        {
            name: 'Cantidad de Habitaciones',
            selector: row => row.roomNumbers.length,
            center: true,
            sortable: true,
        },
        {
            name: "Precio",
            selector: row => row.capacidadMax,
            center: true,
            maxWidth: "140px",
            sortable: true,

        },
        {
            name: "Capacidad",
            selector: row => row.capacidadMax,
            center: true,
            maxWidth: "180px",
            sortable: true,

        },
        {
            name: "Descripción",
            selector: row => row.descripcion,
            sortable: true,
            center: true,
            maxWidth: "400px"

        },
        {
            name: "Acciones",
            selector: row => {
                return (
                    <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
                        <button className="btn btn-warning btn-sm mr-2" onClick={() => handleClick(row._id)}><BiEdit className='icon-crud' /></button>
                        <button className="btn btn-danger btn-sm" title="Eliminar" id="t-1" onClick={() => { deleteCategorie(row._id) }}><RiDeleteBin6Line className='icon-crud' /></button>
                    </div>
                )
            },
            center: true,
        }
    ]
    const paginationComponentOptions = {
        rowsPerPageText: 'Filas por página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos',
    };

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='d-flex flex-column align-items-end'>
            <DataTable
                columns={columns}
                data={categories}
                pagination
                paginationComponentOptions={paginationComponentOptions}
            />
            <ModalUpdateCategory show={show} handleClose={handleClose} categorie={categorie} setCategorie={setCategorie} getCategories={getCategories} />
        </div>
    )
}

export default CategorieTable