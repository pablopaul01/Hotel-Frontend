import React from 'react'
import "./register.css"
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { REGISTRO_SCHEMA } from '../../helpers/validationsSchemas'
import { Link, useNavigate } from 'react-router-dom'
import { axiosInstance } from '../../config/axiosInstance'
import Swal from 'sweetalert2'



const Register = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(REGISTRO_SCHEMA)
    })

    console.log(errors);

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        console.log(data);
        const response = await axiosInstance.post("/registrar", data);
        try {
            console.log("respuesta de back en registro", response);
            navigate("/login");
            Swal.fire({
                icon: "success",
                title: "Cuenta creada con éxito"
            })
        } catch (error) {
            console.log(error)
        }
        reset();
    }


    return (
        <form className="text-white" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-2 pt-2">
                <label className="form-label">Nombre Completo</label>
                <input
                    placeholder="Juan Perez"
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
                    placeholder="ejemplo@ejemplo.com"
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
                <label className="form-label">DNI</label>
                <input
                    placeholder="No incluir puntos ni espacios"
                    type="number"
                    className="form-control"
                    name="dni"
                    {...register("dni")}
                />
            </div>
            <p className="text-danger my-1">
                {errors.dni?.message}
            </p>
            <div className="mb-2 pt-2">
                <label className="form-label">Número de celular</label>
                <div className="input-group">
                    <span class="input-group-text" id="inputGroup-sizing-default">+54</span>
                    <input
                        placeholder="No incluir el 0"
                        aria-describedby="inputGroup-sizing-default"
                        aria-label="Sizing example input"
                        type="number"
                        className="form-control"
                        name="phone"
                        {...register("phone")}
                    />
                </div>
            </div>
            <p className="text-danger my-1">
                {errors.cellPhone?.message}
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
            <div className="mt-3 mb-4 text-center">
                <span>¿Ya tienes una cuenta?
                    <Link to="/login" className="btn link">Iniciar Sesión</Link>
                </span>
            </div>
        </form>
    )
}

export default Register