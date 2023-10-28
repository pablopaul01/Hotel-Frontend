import React, { useState, useEffect } from 'react'
import "../../register/register.css"
import { axiosInstance } from '../../../config/axiosInstance'
import Swal from 'sweetalert2'
import Spinner from 'react-bootstrap/Spinner';

const FormCreateCategory = ({ getCategories, showC, handleCloseC }) => {
  const [categories, setCategories] = useState([]);
  const [imgFile, setImgFile] = useState([])
  const [errors, setErrors] = useState({});
  const [formDatos, setFormDatos] = useState({
    title: "",
    capacidadMax: "",
    descripcion: "",
    precio: "",
    roomNumbers: []
  })
  const [loading, setLoading] = useState(false);

  const getCategoriesDb = async () => {
    const token = localStorage.getItem("token");
    const response = await axiosInstance.get("/categorias", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    setCategories(response.data.categories);
  }

  useEffect(() => {
    getCategoriesDb();

  }, [])

  const validateCategoryName = (name) => {
    const regex = /^[A-Za-z0-9\s]+$/;
    return regex.test(name);
  };


  const handleChangeDatos = (e) => {

    const { name, value } = e.target;
    if (name === "title") {
      const isValid = validateCategoryName(value);
      setErrors({ ...errors, [name]: !isValid });
    }

    if (e.target.name.startsWith("roomNumbers")) {
      const index = parseInt(e.target.name.match(/\[(\d+)\]/)[1]);
      const newRoomNumbers = [...formDatos.roomNumbers];
      newRoomNumbers[index] = { number: parseInt(e.target.value) };
      setFormDatos({
        ...formDatos,
        roomNumbers: newRoomNumbers,
      });
    } else {
      setFormDatos({
        ...formDatos,
        [e.target.name]: e.target.value,
      });
    }
  }

  const handleImges = (e) => {
    setImgFile([...e.target.files])
  }

  const handleSubmit = async (e) => {
    const token = localStorage.getItem("token");
    e.preventDefault();
    if (Object.values(errors).some(error => error)) {
    return; 
  }
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("title", formDatos.title)
      formData.append("capacidadMax", formDatos.capacidadMax)
      formData.append("precio", formDatos.precio)
      formData.append("descripcion", formDatos.descripcion)
      formData.append("roomNumbers", JSON.stringify(formDatos.roomNumbers))
      for (let index = 0; index < imgFile.length; index++) {
        formData.append("imagenes", imgFile[index])
      }

      const resp = await axiosInstance.post("/crear/categoria", formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      getCategories()
      handleCloseC()
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: `Ocurrió un problema! Error${error.response.data.status}`,
        text: `${error.response.data.mensaje}`
      })
    }
  }

  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="mb-2 pt-2">
          <label className="form-label">Nombre de Categoría</label>
          <input
            type="text"
            className={`form-control ${errors.title ? 'is-invalid' : ''}`}
            name="title"
            onChange={handleChangeDatos}
            maxLength={40}
            required
          />
           {errors.title && <div className="invalid-feedback">Ingresa un nombre válido.</div>}
        </div>

        <div className="mb-2 pt-2">
          <label className="form-label">Precio</label>
          <input
            type="number"
            className="form-control"
            name="precio"
            onChange={handleChangeDatos}
            min={0}
            required
          />
        </div>

        <div className="mb-2 pt-2">
          <label className="form-label">Capacidad máxima de personas</label>
          <input
            type="number"
            className="form-control"
            name="capacidadMax"
            onChange={handleChangeDatos}
            min={1}
            required
          />
        </div>

        <div className="mb-2 pt-2">
          <label className="form-label">Descripción</label>
          <textarea
            className="form-control textarea"
            name="descripcion"
            onChange={handleChangeDatos}
            style={{ height: "100px" }}
            maxLength={200}
          />
        </div>

        <div className="mb-2 pt-2">
          <label className="form-label">Imágenes</label>
          <input
            type="file"
            className="form-control"
            name="imagenes"
            onChange={handleImges}
            multiple
          />
        </div>
        <div className="mb-2 pt-2">
          <label className="form-label">Números de Habitación</label>
          <div>
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="mb-2">
                <input
                  type="number"
                  className="form-control"
                  name={`roomNumbers[${index}].number`}
                  onChange={handleChangeDatos}
                  min={1}
                  max={999}
                />

              </div>
            ))}
          </div>
        </div>
        {
          loading ?
            (
              <div className="d-grid mt-3 justify-content-center mt-4 mb-3">
                <Spinner />
              </div>
            )
            :
            (
              <div className="d-grid mt-5 mb-4">
                <button className="btn btn-outline-light boton-login" type="submit" >Crear categoría</button>
              </div>
            )
        }
      </form >
    </div >
  )
}

export default FormCreateCategory