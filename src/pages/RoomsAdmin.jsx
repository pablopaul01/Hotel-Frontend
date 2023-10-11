import React, {useState, useEffect} from 'react'
import '../components/admin/usuario/usuarios.css'
import CategorieTable from '../components/admin/habitaciones/CategorieTable'
import RoomsTable from '../components/admin/habitaciones/RoomsTable'
import ModalCreateRoom from '../components/admin/habitaciones/ModalCreateRoom'
import { axiosInstance } from '../config/axiosInstance'



const RoomsAdmin = () => {
  const [show, setShow] = useState(false);
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
  return (
    <div className='container-fluid container-crud'>
      <div className="row">
        <div className="col-12">
          <p className='title-admin'>Administración de habitaciones</p>
          <hr />
          <button className='btn btn-brown'  onClick={handleShow}>Crear habitación</button>
        </div>
      </div>
      <div className="row">
        <h3 className='mt-5 text-center'>Categorías de habitaciones</h3>
        <div className="col "><CategorieTable categories={categories} setCategories={setCategories}/></div>
      </div>
      <div className="row d-flex justify-content-center mb-5">
        <div className="col-6"><RoomsTable categories={categories} setCategories={setCategories}/></div>
      </div>
      <ModalCreateRoom show={show} handleClose={handleClose}/>
    </div>
  )
}

export default RoomsAdmin