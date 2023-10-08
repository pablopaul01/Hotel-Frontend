import React from 'react'
import Register from '../components/register/Register'
import "../components/register/register.css"

const RegisterView = () => {
  return (
    <>
      <div className="container-fluid w-100 shadow registro">
        <div className="row py-5 justify-content-center row-registro">
          <div className="col-lg-5 col-md-7 col-sm-9 col-xs-10 px-5 shadow div-registro">
            <div className="titulo border border-top-0 border-end-0 border-start-0">
              <div className='my-5'>
                <h2 className="text-white titulo-registro ms-4">Registrarme</h2>
              </div>
              <div className='d-none d-md-block d-lg-block'>
                <img src="../../public/RollingHotel-transparente.png" className="img-fluid mx-4" alt="logo-Rolling-Hotel" />
              </div>
            </div>
            <Register />
          </div>
        </div>
      </div>
    </>
  )
}

export default RegisterView