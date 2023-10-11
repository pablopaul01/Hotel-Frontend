import React, {useState, useEffect} from 'react'
import "../../register/register.css"
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { CREATEROOM_SCHEMA } from '../../../helpers/validationsSchemas'
import { axiosInstance } from '../../../config/axiosInstance'

const FormCreate = ({getCategories, show, setShow}) => {
    const [categories, setCategories] = useState([]);
    const [idCategorie, setIdCategorie] = useState("")
 
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
    
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(CREATEROOM_SCHEMA)
    })

    const addRooms = async (data) => {
        const token = localStorage.getItem("token");

        try {
            const response = await axiosInstance.put(`/categoria/rooms/${idCategorie}`,data, {
                headers: {
                  Authorization: `Bearer ${token}`
                }
              });
              reset();
              getCategories()
              setShow(false);
        } catch (error) {
            console.log(error)
        } finally {
            getCategories()
        }
      }


    const onSubmit = (data) => {
        addRooms(data)
        console.log(data);
        reset();
    }

    console.log(errors);
    console.log("id seleccionado", idCategorie)

  return (
    <div>
 <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-2 pt-2">
                <label className="form-label">Nro de Habitación</label>
                <input
                    type="text"
                    className="form-control"
                    name="number"
                    {...register("number")}
                />
            </div>
            <p className="text-danger my-1">
                {errors.number?.message}
            </p>
            <div className="mb-2 pt-2">
                <label className="form-label">Tipo de habitación</label>
                <select name="tipo" className="form-control" onChange={(e)=>{
                    setIdCategorie(e.target.value)
                }}>
                    <option >----- Seleccione el tipo de habitación ----- </option>
                    {
                        categories.map((category,index) => (
                            <option value={category._id} key={category._id}>{category.title}</option>
                        ))
                    }
                </select>
            </div>
            <div className="d-grid mt-5 mb-4">
                <button className="btn btn-outline-light boton-login" type="submit">Crear habitación</button>
            </div>
        </form>
    </div>
  )
}

export default FormCreate