import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { UPDATE_SCHEMA } from '../../../helpers/validationsSchemas'
import jwtDecode from 'jwt-decode';
import { FiEdit } from 'react-icons/fi'
import { axiosInstance } from '../../../config/axiosInstance'
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';


const FormEditUser = ({ show, setShow, handleClose, idUser, getAllUsers }) => {

    let token = localStorage.getItem("token");
    let decode = jwtDecode(token);

    console.log("id en modal form", idUser)

    const [editInputName, setEditInputName] = useState(true)
    const [editInputDni, setEditInputDni] = useState(true)
    const [editInputPhone, setEditInputPhone] = useState(true)

    const [userData, SetUserData] = useState({})


    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(UPDATE_SCHEMA)
    })

    const getUserById = async () => {
        const token = localStorage.getItem("token");
        const response = await axiosInstance.get(`/usuario/${idUser}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        SetUserData(response.data.user);
    }

    useEffect(() => {
        getUserById();
    }, [])


    const onSubmit = async (data) => {
        console.log("respuesta de data en front", data);
        const response = await axiosInstance.put(`/usuario/${idUser}`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        try {
            console.log("respuesta de back en front", response.data.token);
            Swal.fire({
                icon: "success",
                title: "Datos del usuario actualizados con éxito"
            })
            getAllUsers();
        } catch (error) {
            console.log(error)
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
                    <button className="btn btn-outline-light" type="button" onClick={() => setEditInputName(!editInputName)}><FiEdit /></button>
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
                    <button className="btn btn-outline-light" type="button" onClick={() => setEditInputDni(!editInputDni)}><FiEdit /></button>
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
                    <button className="btn btn-outline-light" type="button" onClick={() => setEditInputPhone(!editInputPhone)}><FiEdit /></button>
                </div>
            </div>
            <p className="text-danger my-1">
                {errors.cellPhone?.message}
            </p>
            <div className="mb-2 pt-2">
                <label className="form-label">Rol de Usuario</label>
                <select name="role" className="form-select" {...register("role")}>
                    <option selected value="user">user</option>
                    <option value="admin">admin</option>
                </select>
            </div>


            <button className="btn btn-outline-light boton-login mt-3" type="submit" onClick={() => setShow(!show)}>Guardar Cambios</button>
            <Button variant="light" className='mt-3 mx-2' onClick={handleClose}>
                Cancelar
            </Button>
        </form >
    )
}

export default FormEditUser