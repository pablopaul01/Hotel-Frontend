import React from 'react'
import {users} from '../../../helpers/users'
import DataTable from 'react-data-table-component';

const UserTable = () => {
    const columns = [
        {
         name: "Id",
         selector: (row) => row._id,
         sortable: true,
        },
        {
            name: "Nombre",
            selector: row => row.nombre,
            sortable: true,
        },
        {
            name: "DNI",
            selector: row => row.dni,
            sortable: true,
        },
        {
            name: "Celular",
            selector: row => row.celular,
            sortable: true,
        },
        {
            name: "User",
            selector: row => row.username,
            sortable: true,
        },
        {
            name: "Rol",
            selector: row => row.rol,
            sortable: true,
        },
        {
            name: "Estado de Cuenta",
            selector: row => row.state,
            sortable: true,
        },
        {
            name:"Acciones",
            selector: row => {
                return (
                    <div style={{width:"200px", display:"flex", justifyContent:"space-between"}}>
                        <button className="btn btn-warning btn-sm mr-2">Editar</button>
                        <button className="btn btn-danger btn-sm">Borrar</button>
                    </div>
                )
            }
        }
    ]
  return (
    <DataTable 
    columns={columns }
    data={users}
    pagination
/>
  )
}

export default UserTable