import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import './usuarios.css'
import './formcreate.css'
import { BiEdit } from 'react-icons/bi'
import { TiDeleteOutline } from 'react-icons/ti'
import { MdBlock } from 'react-icons/md'
import { axiosInstance } from '../../../config/axiosInstance'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


const UserTable = () => {

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
    }, [users])
    
    const toolTipsButtons = ({ id, children, title }) => (
        <OverlayTrigger overlay={<Tooltip id={id}>{title}</Tooltip>}>
          <a href="#">{children}</a>
        </OverlayTrigger>
      );

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
                return <p className='mb-0 text-table'>{row.state}</p>
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
                        <button className="btn btn-warning btn-sm mr-2" title="Editar" id="t-1"><BiEdit className='icon-crud' /></button>
                        <button className="btn btn-danger btn-sm" title="Eliminar" id="t-1"><TiDeleteOutline className='icon-crud' /></button>
                        <button className="btn btn-danger btn-sm" title="Suspender" id="t-1"><MdBlock className='icon-crud' /></button>
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
        </div>
    )
}

export default UserTable