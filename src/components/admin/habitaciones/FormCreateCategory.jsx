import React, {useState, useEffect} from 'react'
import "../../register/register.css"
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { CREATECATEGORY_SCHEMA } from '../../../helpers/validationsSchemas'
import { axiosInstance } from '../../../config/axiosInstance'

const FormCreateCategory = ({getCategories, showC, handleCloseC}) => {
    const [categories, setCategories] = useState([]);
    const [idCategorie, setIdCategorie] = useState("")
    const [imgFile, setImgFile] = useState([])
    const [formDatos, setFormDatos] = useState({
        title: "",
        capacidadMax: "",
        descripcion: "",
        precio: "",
        roomNumbers: []
    })


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


    const handleChangeDatos = (e) => {
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
    // const createCategorie = async (data) => {
    //     const token = localStorage.getItem("token");

    //     try {
    //         const response = await axiosInstance.put(`/categoria/rooms/${idCategorie}`,data, {
    //             headers: {
    //               Authorization: `Bearer ${token}`
    //             }
    //           });
    //           reset();
    //           getCategories()
    //           setShow(false);
    //     } catch (error) {
    //         console.log(error)
    //     } finally {
    //         getCategories()
    //     }
    //   }/categoria/:id

    const handleImges = (e) => {
      setImgFile([...e.target.files])
    }

    const handleSubmit =async (e) => {
      const token = localStorage.getItem("token");
      e.preventDefault();
     try {
      const formData = new FormData();
      formData.append("title",formDatos.title)
      formData.append("capacidadMax",formDatos.capacidadMax)
      formData.append("precio",formDatos.precio)
      formData.append("descripcion",formDatos.descripcion)
      formData.append("roomNumbers",JSON.stringify(formDatos.roomNumbers))
      // for (let index = 0; index < imgFile.length; index++) {
      //   formData.append("imagenes",imgFile[index])
      // }

      const resp = await axiosInstance.post("/crear/categoria",formData,{
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      // console.log(resp.data)
      handleCloseC()
     } catch (error) {
        console.log(error)
     }
  }

  return (
    <div>
 <form className="form-container" onSubmit={handleSubmit}  enctype="multipart/form-data">
 <div className="mb-2 pt-2">
                <label className="form-label">Nombre de Categoría</label>
                <input
                    type="text"
                    className="form-control"
                    name="title"
                    onChange={handleChangeDatos}
                />
            </div>
            {/* <p className="text-danger my-1">
                {errors.title?.message}
            </p> */}
            <div className="mb-2 pt-2">
                <label className="form-label">Precio</label>
                <input
                    type="number"
                    className="form-control"
                    name="precio"
                    onChange={handleChangeDatos}
                />
            </div>
            {/* <p className="text-danger my-1">
                {errors.precio?.message}
            </p> */}
            <div className="mb-2 pt-2">
                <label className="form-label">Capacidad máxima de personas</label>
                <input
                    type="number"
                    className="form-control"
                    name="capacidadMax"
                    onChange={handleChangeDatos}
                />
            </div>
            {/* <p className="text-danger my-1">
                {errors.capacidadMax?.message}
            </p> */}
            <div className="mb-2 pt-2">
                <label className="form-label">Descripción</label>
                <textarea
                    className="form-control"
                    name="descripcion"
                    onChange={handleChangeDatos}
                />
            </div>
            {/* <p className="text-danger my-1">
                {errors.descripcion?.message}
            </p> */}

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
                            />
                            <p className="text-danger my-1">
                                {/* {errors?.roomNumbers?.[index]?.number?.message} */}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="d-grid mt-5 mb-4">
                <button className="btn btn-outline-light boton-login" type="submit" >Crear habitación</button>
            </div>
        </form>
    </div>
  )
}

export default FormCreateCategory