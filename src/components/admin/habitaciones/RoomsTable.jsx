import React from 'react'
import {users} from '../../../helpers/users'
import DataTable from 'react-data-table-component';
import './usuarios.css'
import './formcreate.css'
import {BiEdit} from 'react-icons/bi'
import { TiDeleteOutline } from 'react-icons/ti'
import {MdBlock} from 'react-icons/md'

const RoomsTable = () => {
    const columns = [
        {
            name: "Nombre",
            selector: row => {
                return <p className='mb-0 text-table'>{row.nombre}</p>},
            sortable: true,
            center:true,
            maxWidth: "200px"
        },
        {
            name: "DNI",
            selector: row => {
                return <p className='mb-0 text-table'>{row.dni}</p>},
            sortable: true,
            center:true,
            maxWidth: "180px"

        },
        {
            name: "Celular",
            selector: row => {
                return <p className='mb-0 text-table'>{row.celular}</p>},
            center:true,
            maxWidth: "180px"

        },
        {
            name: "User",
            selector: row => {
                return <p className='mb-0 text-table'>{row.username}</p>},
            sortable: true,
            center:true,
            maxWidth: "240px"

        },
        {
            name: "Rol",
            selector: row => {
                return <p className='mb-0 text-table'>{row.rol}</p>},
            sortable: true,
            center:true,
            maxWidth: "120px"

        },
        {
            name: "Estado de Cuenta",
            selector: row => {
                return <p className='mb-0 text-table'>{row.state}</p>},
            sortable: true,
            center:true,
            maxWidth: "150px"

        },
        {
            name:"Acciones",
            selector: row => {
                return (
                    <div style={{display:"flex", gap:"10px", justifyContent:"center"}}>
                        <button className="btn btn-warning btn-sm mr-2"><BiEdit className='icon-crud'/></button>
                        <button className="btn btn-danger btn-sm"><TiDeleteOutline className='icon-crud'/></button>
                        <button className="btn btn-danger btn-sm"><MdBlock className='icon-crud'/></button>
                    </div>
                )
            },
            center:true,
            minWidth:"350px"
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
    columns={columns }
    data={users}
    pagination
    paginationComponentOptions={paginationComponentOptions}
/>
</div>
  )
}

export default RoomsTable