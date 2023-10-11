import React, {useState, useEffect} from 'react'
// import {categories} from '../../../helpers/data'
import DataTable from 'react-data-table-component';
import '../usuario/usuarios.css'
import './formcreate.css'
import {BiEdit} from 'react-icons/bi'
import { TiDeleteOutline } from 'react-icons/ti'
import {MdBlock} from 'react-icons/md'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { axiosInstance } from '../../../config/axiosInstance'


const RoomsTable = ({categories, setCategories}) => {
    
    const [categorieSelected, setCategorieSelected] = useState("")
    const [categorieById, setCategorieById] = useState({})

      const getCategoriesById = async (idx) => {
        let token = localStorage.getItem("token");
        const response = await axiosInstance.get(`/categoria/${idx}`,null, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setCategorieById(response.data.categorie);
      }
      console.log("category by id", categorieById)
    const columns = [
        {
            name: "Nro Habitación",
            selector: row => {
                return <p className='mb-0 text-table'>{row.number}</p>},
            sortable: true,
            center:true,
            maxWidth: "180px"

        },
        {
            name: "Tipo",
            selector: row => {
                return <p className='mb-0 text-table'>{categorieById.title}</p>},
            sortable: true,
            center:true,
            maxWidth: "180px"

        },
        {
            name:"Acciones",
            selector: row => {
                return (
                    <div style={{display:"flex", gap:"20px", justifyContent:"center"}}>
                        <button className="btn btn-warning btn-sm mr-2"><BiEdit className='icon-crud'/></button>
                        <button className="btn btn-danger btn-sm" title="Eliminar" id="t-1" onClick={() => { deleteUser(row._id) }}><RiDeleteBin6Line className='icon-crud' /></button>
                    </div>
                )
            },
            center:true,
            minWidth:"350px"
        }
      ];
    const paginationComponentOptions = {
        rowsPerPageText: 'Filas por página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos',
    };

  return (
<div className='d-flex flex-column align-items-center'>
<h3 className='mt-5 text-center'>Listado de habitaciones</h3>
        <select className="mt-2" name="setCategoria" id="categoriaSelected" onChange={(e)=>{
              setCategorieSelected(e.target.value)
              getCategoriesById(e.target.value)
          }}>
                <option>---Seleccione una categoría---</option>
              {categories.map((categorie)=>(
                  <option value={categorie._id} key={categorie._id}>{categorie.title}</option>
              ))}
        </select>
{categorieById ? (
    <DataTable 
    columns={columns }
    data={categorieById.roomNumbers}
    pagination
    paginationComponentOptions={paginationComponentOptions}
/>
)
:
(
<DataTable 
    columns={columns }
    data={categories[0].roomNumbers}
    pagination
    paginationComponentOptions={paginationComponentOptions}
/>
)}
</div>
  )
}

export default RoomsTable