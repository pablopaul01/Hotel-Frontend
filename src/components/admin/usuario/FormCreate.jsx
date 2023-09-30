import React from 'react'



const FormCreate = () => {
    // const handleSubmit = async () => {
    // }
  return (
    <div>
        <form>
            <div className="form-group mb-3">
                <label htmlFor="nombre">Nombre</label>
                <input type="text" className="form-control" id="title" name="title" />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="nombre">DNI</label>
                <input type="number" className="form-control" id="detalle" name='detalle' />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="nombre">Celular</label>
                <input type="text" className="form-control" id="video" name="video" />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="nombre">E-mail</label>
                <input type="email" className="form-control" id="mentor" name="mentor" />
            </div>
            {/* <div className="form-group mb-3">
                <label htmlFor="nombre">Categoria</label>
                <select name="categoria" className="form-control">
                    {categorias.map((categoria, index) => (
                        <option key={categoria._id} value={categoria._id}>{categoria.name}</option>
                    ))}
                </select>
            </div> */}
            {/* create button to send form */}
            <div className='form-group'>
            <button type="submit" className="btn btn-primary">Guardar</button>
            </div>
        </form>
    </div>
  )
}

export default FormCreate