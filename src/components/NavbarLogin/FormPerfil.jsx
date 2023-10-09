import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { UPDATE_SCHEMA } from '../../helpers/validationsSchemas'
import jwtDecode from 'jwt-decode';
import { FiEdit } from 'react-icons/fi'
import { axiosInstance } from '../../config/axiosInstance'
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';


const FormPerfil = () => {

    let token = localStorage.getItem("token");
    let decode = jwtDecode(token);

    console.log(decode)

    const [editInputName, setEditInputName] = useState(true)
    const [editInputDni, setEditInputDni] = useState(true)
    const [editInputPhone, setEditInputPhone] = useState(true)

    const [showInputPassword, setShowInputPassword] = useState(false)

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(UPDATE_SCHEMA)
    })

    const onSubmit = async (data) => {
        console.log(data);
        const response = await axiosInstance.put(`/usuario/${decode.sub}`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        try {
            console.log("respuesta de back en registro", response);
            Swal.fire({
                icon: "success",
                title: "Datos de tu perfil actualizados con éxito"
            })
            token = localStorage.getItem("token")
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <form className="text-white" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-2 pt-2">
                <label className="form-label">Correo electrónico</label>
                <div class="input-group mb-3">
                    <input
                        value={decode.username}
                        disabled
                        type="email"
                        className="form-control"
                        name="username"
                    />
                </div>
            </div>
            <div className="mb-2 pt-2">
                <label className="form-label">Nombre Completo</label>
                <div class="input-group mb-3">
                    <input
                        disabled={editInputName}

                        placeholder={decode.name}
                        type="text"
                        className="form-control"
                        name="name"
                        {...register("name")}
                    />
                    <button className="btn btn-outline-light" type="button" onClick={() => setEditInputName(!editInputName)}><FiEdit /></button>
                </div>
            </div>
            <p className="text-danger my-1">
                {errors.name?.message}
            </p>
            <div className="mb-2 pt-2">
                <label className="form-label">DNI</label>
                <div class="input-group mb-3">
                    <input
                        disabled={editInputDni}

                        placeholder={decode.dni}
                        type="number"
                        className="form-control"
                        name="dni"
                        {...register("dni")}
                    />
                    <button className="btn btn-outline-light" type="button" onClick={() => setEditInputDni(!editInputDni)}><FiEdit /></button>
                </div>
            </div>
            <p className="text-danger my-1">
                {errors.dni?.message}
            </p>
            <div className="mb-2 pt-2">
                <label className="form-label">Número de celular</label>
                <div className="input-group">
                    <span class="input-group-text">+54</span>
                    <input
                        disabled={editInputPhone}
                        placeholder={decode.phone}
                        type="number"
                        className="form-control"
                        name="phone"
                        {...register("phone")}
                    />
                    <button className="btn btn-outline-light" type="button" onClick={() => setEditInputPhone(!editInputPhone)}><FiEdit /></button>
                </div>
            </div>
            <p className="text-danger my-1">
                {errors.cellPhone?.message}
            </p>

            {
                showInputPassword ?
                    (
                        <>
                            <div className="mb-2 pt-2">
                                <label className="form-label">Contraseña nueva</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    {...register("password")}
                                />
                            </div>
                            <p className="text-danger my-1">
                                {errors.password?.message}
                            </p>
                            <div className="mb-2 pt-2">
                                <label className="form-label">Repetir Contraseña Nueva</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="repassword"
                                    {...register("repassword")}
                                />
                            </div>
                            <p className="text-danger my-1">
                                {errors.repassword?.message}
                            </p>
                            <small className="text-secondary">La contraseña debe tener al entre 8 y 16 caracteres, al menos
                                un dígito, al menos una minúscula y al menos una
                                mayúscula.</small>
                            <a className='btn btn-sm btn-outline-warning mt-3 d-flex justify-content-center' onClick={() => setShowInputPassword(!showInputPassword)}>Conservar clave</a>
                        </>
                    )
                    :
                    (
                        <a className='btn btn-sm btn-outline-danger mt-3 d-flex justify-content-center' onClick={() => setShowInputPassword(!showInputPassword)}>Cambiar clave</a>
                    )
            }

            <button className="btn btn-outline-light boton-login mt-3" type="submit">Guardar Cambios</button>
        </form>
    )
}

export default FormPerfil