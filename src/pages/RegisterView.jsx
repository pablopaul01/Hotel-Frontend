import React from 'react'
import Register from '../components/Register'

const RegisterView = () => {
  return (
    <div>
      <div className="container-fluid w-100 shadow my-3">
        <div className="row mb-1 justify-content-center">
          <div className="col-lg-5 col-md-7 col-sm-9 col-xs-10 px-5 shadow div-login">
            <div className="titulo border border-top-0 border-end-0 border-start-0">
              <div>
                <h2 className="text-white titulo ms-4">Registrarme</h2>
              </div>
              <div>
                <img src="../../public/RollingHotel-transparente.png" className="img-fluid mx-4" alt="logo-Rolling-Hotel" />
              </div>
            </div>
            <Register />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterView