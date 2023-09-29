import React from 'react'
import "../css/login.css"
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { LOGIN_SCHEMA } from '../helpers/validationsSchemas'

const Login = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(LOGIN_SCHEMA)
    })

    const onSubmit = (data) => {
        console.log(data);
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
                    <a href="#" className="btn link">Regístrate</a></span>
            </div>
            <div className="text-center">
                <a href="#" className="btn link mb-4">¿Olvidaste tu contraseña?</a>
            </div>
        </form>
    )
}

export default Login