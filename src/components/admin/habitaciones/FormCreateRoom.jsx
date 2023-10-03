import React from 'react'
import "../../register/register.css"
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { REGISTRO_SCHEMA } from '../../../helpers/validationsSchemas'
import {categories} from '../../../helpers/data'

const FormCreate = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(REGISTRO_SCHEMA)
    })

    const onSubmit = (data) => {
        console.log(data);
        reset();
    }

    console.log(errors);
  return (
    <div>
 <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-2 pt-2">
                <label className="form-label">Nro de Habitación</label>
                <input
                    type="text"
                    className="form-control"
                    name="name"
                    {...register("name")}
                />
            </div>
            <p className="text-danger my-1">
                {errors.name?.message}
            </p>
            <div className="mb-2 pt-2">
                <label className="form-label">Tipo de habitación</label>
                <select name="tipo" className="form-control">
                    <option >----- Seleccione el tipo de habitación ----- </option>
                    {
                        categories.map((category,index) => (
                            <option value={category.id} key={category.id}>{category.title}</option>
                        ))
                    }
                </select>
            </div>
            <p className="text-danger my-1">
                {errors.username?.message}
            </p>
            <div className="mb-2 pt-2">
                <label className="form-label">Precio</label>
                <input
                    type="number"
                    className="form-control"
                    name="precio"
                    {...register("password")}
                />
            </div>
            <div className="mb-2 pt-2">
                <label className="form-label">Imagenes de la habitación</label>
                <input
                    type="file"
                    className="form-control"
                    name="imagen"
                    multiple
                />
            </div>
            <p className="text-danger my-1">
                {errors.password?.message}
            </p>
            <div className="mb-2 pt-2">
                <label className="form-label">Descripción</label>
                <textarea
                    className="form-control"
                    name="descripcion"
                    rows="4"
                    {...register("repassword")}
                />
            </div>
            <p className="text-danger my-1">
                {errors.repassword?.message}
            </p>
            <div className="d-grid mt-5 mb-4">
                <button className="btn btn-outline-light boton-login" type="submit">Crear usuario</button>
            </div>
        </form>
    </div>
  )
}

export default FormCreate