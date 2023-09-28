import React from 'react'
import "../css/register.css"
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { REGISTRO_SCHEMA } from '../helpers/validationsSchemas'


const Register = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(REGISTRO_SCHEMA)
    })

    const onSubmit = (data) => {
        console.log(data);
        reset();
    }

    console.log(errors);

    return (
        <form className="text-white" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-2 pt-2">
                <label className="form-label">Nombre Completo</label>
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
                <label className="form-label">Correo electrónico</label>
                <input
                    type="email"
                    className="form-control"
                    name="username"
                    {...register("username")}
                />
            </div>
            <p className="text-danger my-1">
                {errors.username?.message}
            </p>
            <div className="mb-2 pt-2">
                <label className="form-label">Contraseña</label>
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
                <label className="form-label">Repetir Contraseña</label>
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
            <div className="d-grid mt-2">
                <button className="btn btn-outline-light boton-login" type="submit">Registrarme</button>
            </div>
            <div className="mt-3 text-center">
                <span>¿Ya tienes una cuenta?
                    <a href="#" className="btn link">Iniciar Sesión</a>
                </span>
            </div>
        </form>
    )
}

export default Register