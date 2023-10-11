import React, { useState, useEffect } from 'react'
import '../components/admin/usuario/usuarios.css'
import CategorieTable from '../components/admin/habitaciones/CategorieTable'
import RoomsTable from '../components/admin/habitaciones/RoomsTable'
import ModalCreateRoom from '../components/admin/habitaciones/ModalCreateRoom'
import ModalCreateCategory from "../components/admin/habitaciones/ModalCreateCategory"
import { axiosInstance } from '../config/axiosInstance'
import ModalUpdateCategory from '../components/admin/habitaciones/ModalUpdateCategory'



const RoomsAdmin = () => {
  const [show, setShow] = useState(false);
  const [showC, setShowC] = useState(false);
  const [categorieById, setCategorieById] = useState({})
  const [categories, setCategories] = useState([]);


  const getCategories = async () => {
    const token = localStorage.getItem("token");
    const response = await axiosInstance.get("/categorias", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    setCategories(response.data.categories);
  }

  useEffect(() => {
    getCategories();
  }, [])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseC = () => setShowC(false);
  const handleShowC = () => setShowC(true);

  return (
    <div className='container container-crud mb-5'>
      <div className="row">
        <div className="col-12 d-flex justify-content-between">
          <h2 className='display-5'>Administración de habitaciones</h2>
          <div className='d-flex gap-3'>
            <button className='btn btn-outline-light' onClick={handleShowC}>Crear Categoría</button>
            <button className='btn btn-outline-light' onClick={handleShow}>Crear habitación</button>
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <h3 className='mt-5 text-center mb-4'>Categorías de habitaciones</h3>
        <div className="col "><CategorieTable categories={categories} setCategories={setCategories} getCategories={getCategories} /></div>
      </div>
      <div className="row d-flex justify-content-center mb-5">
        <div className="col-6"><RoomsTable categories={categories} setCategories={setCategories} /></div>
      </div>
      <ModalCreateRoom show={show} handleClose={handleClose} getCategories={getCategories} setShow={setShow} />
      <ModalCreateCategory showC={showC} handleCloseC={handleCloseC} getCategories={getCategories} setShowC={setShowC} />
    </div>
  )
}

export default RoomsAdmin