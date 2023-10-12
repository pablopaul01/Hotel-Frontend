import React from 'react'
import "../css/404.css"
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <div>
        <div className="conteiner container-fluid">
        <img src="https://res.cloudinary.com/dcv6aut2v/image/upload/v1697100765/404_z3g10r.png" alt=""className='img-error404 img-fluid'/>
        <h1 className='text-light text-center titulo-404'>La página que ha solicitado no se encuentra disponible</h1>
        <div>
            <Link to="/" className="btn btn-lg btn-outline-light">Ir al Inicio</Link>
        </div>
    </div>
    </div>
  )
}

export default Error404