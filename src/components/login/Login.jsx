import React from 'react'
import "./login.css"
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { LOGIN_SCHEMA } from '../../helpers/validationsSchemas'
import { Link, useNavigate } from 'react-router-dom'
import { axiosInstance } from '../../config/axiosInstance'
import Swal from 'sweetalert2'


const Login = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(LOGIN_SCHEMA)
    })

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        console.log(data);
        const response = await axiosInstance.post("/login", data);
        try {
            console.log("respuesta de back en login",response);
            localStorage.setItem("token", response.data.token);
            navigate("/");
            Swal.fire({
                icon: "success",
                title: "Bienvenido"
            })
        } catch (error) {
            console.log(error)
        }

        reset();
    }



    return (
        <form className="text-white" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-2 pt-4">
                <label className="form-label">Correo electrónico</label>
                <input
                    type="email"
                    className="form-control"
                    name="username"
                    {...register("username")}
                />
            </div>
            <p className="text-danger my-1 text-center">
                {errors.username?.message}
            </p>
            <div className="mb-2">
                <label className="form-label">Contraseña</label>
                <input
                    type="password"
                    className="form-control"
                    name="password"
                    {...register("password")}
                />
            </div>
            <p className="text-danger my-1 text-center">
                {errors.password?.message}
            </p>

            <div className="d-grid mt-3">
                <button className="btn btn-outline-light boton-login mt-2">Iniciar Sesión</button>
            </div>
            <div className="mt-3 text-center" id="btn-registro">
                <span>¿No tienes una cuenta registrada?
                    <Link to="/registro" className="btn link">Regístrate</Link></span>
            </div>
            <div className="text-center">
                <Link to="/error" className="btn link mb-4">¿Olvidaste tu contraseña?</Link>
            </div>
        </form>
    )
}

export default Login