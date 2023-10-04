import React from 'react'
import {categories} from '../../../helpers/data'
import DataTable from 'react-data-table-component';
import '../usuario/usuarios.css'
import './formcreate.css'
import {BiEdit} from 'react-icons/bi'
import { TiDeleteOutline } from 'react-icons/ti'
import {MdBlock} from 'react-icons/md'

const RoomsTable = () => {
    const columns = [
        {
            name: 'Números de Habitación',
            cell: row => (
              <ul>
                {row.roomNumbers.map(room => (
                  <li key={room.id} className='text-center'>{room.number}</li>
                ))}
              </ul>
            ),
            center:true
          },
        {
            name: "Tipo",
            selector: row => {
                return <p className='mb-0 text-table'>{row.title}</p>},
            sortable: true,
            center:true,
            maxWidth: "180px"

        },
        {
            name: "Precio",
            selector: row => {
                return <p className='mb-0 text-table'>{row.precio}</p>},
            center:true,
            maxWidth: "180px"

        },
        {
            name: "Descripción",
            selector: row => {
                return <p className='mb-0 text-table'>{row.descripcion}</p>},
            sortable: true,
            center:true,
            maxWidth: "400px"

        },
        {
            name:"Acciones",
            selector: row => {
                return (
                    <div style={{display:"flex", gap:"20px", justifyContent:"center"}}>
                        <button className="btn btn-warning btn-sm mr-2"><BiEdit className='icon-crud'/></button>
                        <button className="btn btn-danger btn-sm"><TiDeleteOutline className='icon-crud'/></button>
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
    data={categories}
    pagination
    paginationComponentOptions={paginationComponentOptions}
/>
</div>
  )
}

export default RoomsTable