import React from 'react'
import "../css/login.css"

const Login = () => {
    return (
        <div className="container-fluid shadow my-3">
            <div className="row mb-1 justify-content-center">
                <div className="col-lg-5 col-md-7 col-sm-9 col-xs-10 px-5 shadow div-login">
                    <div className="titulo border border-top-0 border-end-0 border-start-0">
                        <div>
                            <h2 className="fs-1 titulo text-center d-block">Iniciar Sesión</h2>
                        </div>
                        <div><img src='../../public/logoHotel.png' className="img-fluid ms-5 w-75" alt="logo-Rolling-Hotel" /></div>
                    </div>


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

                </div>
            </div>
        </div>
    )
}

export default Login