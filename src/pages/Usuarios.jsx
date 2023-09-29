import React from 'react'
import '../components/admin/usuario/usuarios.css'
import UserTable from '../components/admin/usuario/UserTable'

const Usuarios = () => {
  return (
    <div className='container-fluid container-crud'>
      <div className="row">
        <div className="col-12">
          Administración de usuarios
          <hr />
          <button className='btn btn-primary'>Crear usuario</button>
        </div>
      </div>
      <div className="row">
        <UserTable />
      </div>
    </div>
  )
}

export default Usuarios