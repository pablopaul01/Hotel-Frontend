import React from 'react'
import "../css/register.css"

const Register = () => {
    return (
        <form className="text-white">
            <div className="mb-2 pt-2">
                <label className="form-label">Correo electrónico</label>
                <input
                    type="email"
                    className="form-control"
                    required />
            </div>
            <div className="mb-2 pt-2">
                <label className="form-label">Contraseña</label>
                <input
                    type="password"
                    className="form-control"
                    required />
            </div>
            <div className="mb-2 pt-2">
                <label className="form-label">Repetir Contraseña</label>
                <input
                    type="password"
                    className="form-control"
                    required />
                <small className="text-secondary">La contraseña debe tener al entre 8 y 16 caracteres, al menos
                    un dígito, al menos una minúscula y al menos una
                    mayúscula.</small>
            </div>

            <div className="d-grid">
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