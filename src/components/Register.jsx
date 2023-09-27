import React from 'react'

const Register = () => {
    return (
        <form classNameName="text-white">
            <div className="mb-2 pt-2">
                <label className="form-label">Nombre</label>
                <input
                    type="text"
                    className="form-control" />
            </div>
            <div className="mb-2 pt-2">
                <label className="form-label">Apellido</label>
                <input
                    type="text"
                    className="form-control" />
            </div>
            <div className="mb-2 pt-2">
                <label className="form-label">Correo electrónico</label>
                <input
                    type="email"
                    className="form-control" />
            </div>
            <div className="mb-2 pt-2">
                <label className="form-label">Contraseña</label>
                <input
                    type="password"
                    className="form-control" />
            </div>
            <div className="mb-2 pt-2">
                <label className="form-label">Repetir Contraseña</label>
                <input
                    type="password"
                    className="form-control" />
                <small className="text-secondary">La contraseña debe tener al entre 8 y 16 caracteres, al menos
                    un dígito, al menos una minúscula y al menos una
                    mayúscula.</small>
            </div>

            <div className="mb-1">
                <input
                    type="checkbox"
                    className="form-check-input"
                    required />
                <label className="form-check-label">
                    <small>Acepto términos y condiciones.
                        <a href="./404.html" className="link">Ver</a>
                    </small>
                </label>
            </div>

            <div className="d-grid">
                <button className="btn btn-danger boton-login" type="submit">Registrarme</button>
            </div>
            <div className="mt-3 text-center" id="btn-registro">
                <span>¿Ya tienes una cuenta?
                    <a href="#" className="btn link">Iniciar Sesión</a></span>
            </div>
        </form>
    )
}

export default Register