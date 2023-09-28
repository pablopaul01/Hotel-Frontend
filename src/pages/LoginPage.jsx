import React from 'react'
import Login from '../components/Login'

const LoginPage = () => {
    return (
        <div className="container-fluid shadow my-3">
            <div className="row mb-1 justify-content-center">
                <div className="col-lg-5 col-md-7 col-sm-9 col-xs-10 px-5 shadow div-login">
                    <div className="titulo border border-top-0 border-end-0 border-start-0">
                        <div>
                            <h2 className="fs-1 titulo text-center d-block ms-5">Iniciar Sesión</h2>
                        </div>
                        <div><img src='../../public/RollingHotel-transparente.png' className="img-fluid ms-5 w-75" alt="logo-Rolling-Hotel" /></div>
                    </div>
                    <Login />
                </div>
            </div>
        </div>
    )
}

export default LoginPage