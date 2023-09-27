import React from 'react'
import "../css/login.css"

const Login = () => {
    return (
        <form className="text-white">
            <div className="mb-4 pt-4">
                <label className="form-label">Correo electrónico</label>
                <input
                    type="email"
                    className="form-control"
                    placeholder="ejemplo@ejemplo.com"
                />
            </div>
            <div className="mb-1">
                <label className="form-label">Contraseña</label>
                <input
                    type="password"
                    className="form-control"
                />
            </div>

            <div className="d-grid">
                <button className="btn btn-outline-light boton-login mt-4">Iniciar Sesión</button>
            </div>
            <div className="mt-3 text-center" id="btn-registro">
                <span>¿No tienes una cuenta registrada?
                    <a href="#" className="btn link">Regístrate</a></span>
            </div>
            <div className="text-center">
                <a href="#" className="btn link">¿Olvidaste tu contraseña?</a>
            </div>
        </form>
    )
}

export default Login