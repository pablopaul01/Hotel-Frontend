import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { UPDATE_SCHEMA } from '../../../helpers/validationsSchemas'
import { FiEdit } from 'react-icons/fi'
import { axiosInstance } from '../../../config/axiosInstance'
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';


const FormEditUser = ({ show, setShow, handleClose, idUser, getAllUsers }) => {

    //states para habilitar edicion de inputs
    const [editInputName, setEditInputName] = useState(true)
    const [editInputDni, setEditInputDni] = useState(true)
    const [editInputPhone, setEditInputPhone] = useState(true)
    //state con contenido del usuario a editar
    const [userData, SetUserData] = useState({})

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(UPDATE_SCHEMA)
    })
    //obtengo información del usuario
    const getUserById = async () => {
        const token = localStorage.getItem("token");
        try {
            const response = await axiosInstance.get(`/usuario/${idUser}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            SetUserData(response.data.user);
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: `Ocurrió un problema! Error${error.response.data.status}`,
                text: `${error.response.data.mensaje}`
            })
        }
    }
    //ejecuto la funcion cuando carga la página
    useEffect(() => {
        getUserById();
    }, [])

    //funcion que recibe la data del formulario
    const onSubmit = async (data) => {

        try {
            const response = await axiosInstance.put(`/usuario/${idUser}`, data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            Swal.fire({
                icon: "success",
                title: "Datos del usuario actualizados con éxito"
            })
            getAllUsers();
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: `Ocurrió un problema! Error${error.response.data.status}`,
                text: `${error.response.data.mensaje}`
            })
        }
    }


    return (
        < form className="text-white" onSubmit={handleSubmit(onSubmit)} >
            <div className="mb-2 pt-2">
                <label className="form-label">Correo electrónico</label>
                <div className="input-group mb-3">
                    <input
                        value={userData.username}
                        disabled
                        type="email"
                        className="form-control"
                        name="username"
                    />
                </div>
            </div>
            <div className="mb-2 pt-2">
                <label className="form-label">Nombre Completo</label>
                <div className="input-group mb-3">
                    <input
                        disabled={editInputName}

                        placeholder={userData.name}
                        type="text"
                        className="form-control"
                        name="name"
                        {...register("name")}
                    />
                    <button
                        className={editInputName ? ("btn btn-outline-light") : ("btn btn-danger")}
                        type="button"
                        onClick={() => setEditInputName(!editInputName)}>
                        <FiEdit />
                    </button>
                </div>
            </div>
            <p className="text-danger my-1">
                {errors.name?.message}
            </p>
            <div className="mb-2 pt-2">
                <label className="form-label">DNI</label>
                <div className="input-group mb-3">
                    <input
                        disabled={editInputDni}

                        placeholder={userData.dni}
                        type="number"
                        className="form-control"
                        name="dni"
                        {...register("dni")}
                    />
                    <button
                        className={editInputDni ? ("btn btn-outline-light") : ("btn btn-danger")}
                        type="button"
                        onClick={() => setEditInputDni(!editInputDni)}>
                        <FiEdit />
                    </button>
                </div>
            </div>
            <p className="text-danger my-1">
                {errors.dni?.message}
            </p>
            <div className="mb-2 pt-2">
                <label className="form-label">Número de celular</label>
                <div className="input-group">
                    <span className="input-group-text">+54</span>
                    <input
                        disabled={editInputPhone}
                        placeholder={userData.phone}
                        type="number"
                        className="form-control"
                        name="phone"
                        {...register("phone")}
                    />
                    <button
                        className={editInputPhone ? ("btn btn-outline-light") : ("btn btn-danger")}
                        type="button"
                        onClick={() => setEditInputPhone(!editInputPhone)}>
                        <FiEdit />
                    </button>
                </div>
            </div>
            <p className="text-danger my-1">
                {errors.cellPhone?.message}
            </p>
            <div className="mb-2 pt-2">
                <label className="form-label">Rol de Usuario</label>
                <select name="role" className="form-select" {...register("role")}>
                    {
                        userData.role === "admin" ?
                            (
                                <>
                                    <option selected value="admin">admin</option>
                                    <option value="user">user</option>
                                </>
                            )
                            :
                            (
                                <>
                                    <option selected value="user">user</option>
                                    <option value="admin">admin</option>
                                </>
                            )
                    }
                </select>
            </div >
            <button className="btn btn-outline-light boton-login mt-3" type="submit" onClick={() => setShow(!show)}>Guardar Cambios</button>
            <Button variant="light" className='mt-3 mx-2' onClick={handleClose}>
                Cancelar
            </Button>
        </form >
    )
}

export default FormEditUser