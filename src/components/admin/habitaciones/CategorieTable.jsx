import React, { useState } from 'react'
import DataTable from 'react-data-table-component';
import '../usuario/usuarios.css'
import './formcreate.css'
import { BiEdit } from 'react-icons/bi'
import { TiDeleteOutline } from 'react-icons/ti'
import { MdBlock } from 'react-icons/md'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { axiosInstance } from '../../../config/axiosInstance';
import ModalUpdateCategory from './ModalUpdateCategory';


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
        // console.log(response.data.categorie)
        setCategorie(response.data.categorie);
    }

    const handleClick = (row) => {

        getCategorieById(row);
        handleShow()
    }
    //   console.log("categorie en table", categorie)
    const deleteCategorie = async (row) => {
        const token = localStorage.getItem("token");

        try {
            const response = await axiosInstance.delete(`/categoria/${row}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            getCategories()
        } catch (error) {
            console.log(error)
        } finally {
            getCategories()
        }
    }

    const columns = [
        {
            name: "Tipo",
            selector: row => {
                return <p className='mb-0 text-table'>{row.title}</p>
            },
            sortable: true,
            center: true,
            maxWidth: "180px"

        },
        {
            name: 'Cantidad de Habitaciones',
            selector: row => {
                return <p className='mb-0 text-table'>{row.roomNumbers.length}</p>
            },
            center: true
        },
        {
            name: "Precio",
            selector: row => {
                return <p className='mb-0 text-table'>$ {row.precio}</p>
            },
            center: true,
            maxWidth: "180px"

        },
        {
            name: "Capacidad",
            selector: row => {
                return <p className='mb-0 text-table'>{row.capacidadMax} personas</p>
            },
            center: true,
            maxWidth: "180px"

        },
        {
            name: "Descripción",
            selector: row => {
                return <p className='mb-0 text-table'>{row.descripcion}</p>
            },
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
            minWidth: "350px"
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