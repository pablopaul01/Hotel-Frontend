import React,{useState} from 'react'
import DataTable from 'react-data-table-component';
import '../usuario/usuarios.css'
import './formcreate.css'
import {BiEdit} from 'react-icons/bi'
import { TiDeleteOutline } from 'react-icons/ti'
import {MdBlock} from 'react-icons/md'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { axiosInstance } from '../../../config/axiosInstance';
import ModalUpdateCategory from './ModalUpdateCategory';


const CategorieTable = ({categories,setCategories,getCategories}) => {
    const [showUpdate, setShowUpdate] = useState(false);

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
                return <p className='mb-0 text-table'>{row.title}</p>},
            sortable: true,
            center:true,
            maxWidth: "180px"

        },
        {
            name: 'Cantidad de Habitaciones',
            selector: row => {
                return <p className='mb-0 text-table'>{row.roomNumbers.length}</p>},
            center:true
          },
        {
            name: "Precio",
            selector: row => {
                return <p className='mb-0 text-table'>$ {row.precio}</p>},
            center:true,
            maxWidth: "180px"

        },
        {
            name: "Capacidad",
            selector: row => {
                return <p className='mb-0 text-table'>{row.capacidadMax} personas</p>},
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
                        <button className="btn btn-warning btn-sm mr-2" onClick={()=>{handleShowUpdate}}><BiEdit className='icon-crud'/></button>
                        <button className="btn btn-danger btn-sm" title="Eliminar" id="t-1" onClick={() => { deleteCategorie(row._id) }}><RiDeleteBin6Line className='icon-crud' /></button>
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
    const handleCloseUpdate = () => setShowUpdate(false);
    const handleShowUpdate= () => setShowUpdate(true);
    console.log(showUpdate)
  return (
<div className='d-flex flex-column align-items-end'>
<DataTable 
    columns={columns }
    data={categories}
    pagination
    paginationComponentOptions={paginationComponentOptions}
/>
<ModalUpdateCategory showUpdate={showUpdate} handleCloseUpdate={handleCloseUpdate} getCategories={getCategories} setShowUpdate={setShowUpdate}/>
</div>
  )
}

export default CategorieTable