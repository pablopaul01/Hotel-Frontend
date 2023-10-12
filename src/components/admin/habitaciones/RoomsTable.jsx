import React, { useState, useEffect } from 'react'
import DataTable from 'react-data-table-component';
import '../usuario/usuarios.css'
import './formcreate.css'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { axiosInstance } from '../../../config/axiosInstance'
import Swal from 'sweetalert2';



const RoomsTable = ({ categories, setCategories }) => {

  const [categorieSelected, setCategorieSelected] = useState("")
  const [categorieById, setCategorieById] = useState({})

  const getCategoriesById = async (idx) => {
    let token = localStorage.getItem("token");
    const response = await axiosInstance.get(`/categoria/${idx}`, null, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    setCategorieById(response.data.categorie);
  }

  const deleteRoom = async (row) => {
    const token = localStorage.getItem("token");
    try {
      Swal.fire({
        title: 'Esta seguro de eliminar la habitación?',
        text: "No podrás revertir los cambios!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar!'
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axiosInstance.delete(`/categoria/${categorieSelected}/room/${row}`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }); Swal.fire(
            'Eliminado!',
            'La habitación fue eliminada',
            'success'
          )
          getCategoriesById(categorieSelected)
        }
      })
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: `Ocurrió un problema! Error${error.response.data.status}`,
        text: `${error.response.data.mensaje}`
      })
    }
  }


  const columns = [
    {
      name: "Nro Habitación",
      selector: row => row.number,
      sortable: true,
      center: true,
      maxWidth: "180px"

    },
    {
      name: "Tipo",
      selector: row => {
        return <p className='mb-0'>{categorieById.title}</p>
      },
      sortable: true,
      center: true,
      maxWidth: "180px"

    },
    {
      name: "Acciones",
      selector: row => {
        return (
          <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
            <button className="btn btn-danger btn-sm" title="Eliminar" id="t-1" onClick={() => { deleteRoom(row._id) }}><RiDeleteBin6Line className='icon-crud' /></button>
          </div>
        )
      },
      center: true,
      minWidth: "350px"
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
      <select className="mt-2 mb-3" name="setCategoria" id="categoriaSelected" onChange={(e) => {
        setCategorieSelected(e.target.value)
        getCategoriesById(e.target.value)
      }}>
        <option>---Seleccione una categoría---</option>
        {categories.map((categorie) => (
          <option value={categorie._id} key={categorie._id}>{categorie.title}</option>
        ))}
      </select>
      {categorieById ? (
        <DataTable
          columns={columns}
          data={categorieById.roomNumbers}
          pagination
          paginationComponentOptions={paginationComponentOptions}
        />
      )
        :
        (
          <DataTable
            columns={columns}
            data={categories[0].roomNumbers}
            pagination
            paginationComponentOptions={paginationComponentOptions}
          />
        )}
    </div>
  )
}

export default RoomsTable