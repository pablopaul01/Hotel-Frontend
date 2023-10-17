import React, { useState, useEffect } from 'react'
import AccordionRoom from './AccordionRoom'
import RoomCarrousel from './RoomCarrousel'
import Button from 'react-bootstrap/Button'
import './roomDetail.css'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'
import { axiosInstance } from '../../config/axiosInstance'
import Swal from 'sweetalert2'


const RoomDetail = () => {

  const { id } = useParams();

  const [category, setcategory] = useState({
    data: {},
    loading: true
  })

  const getCategory = async () => {

    try {
      const response = await axiosInstance.get(`/categoria/${id}`)
      setcategory({
        data: response.data.categorie,
        loading: false
      })

    } catch (error) {
      Swal.fire({
        icon: "error",
        title: `Ocurrió un problema! Error${error.response.data.status}`,
        text: `${error.response.data.mensaje}`
      })
    }
  }

  useEffect(() => {
    getCategory()
  }, [])


  return (
    <>
      <nav id="navbar-example2" className="navbar bg-dark px-3 mb-3 mt-5">
        <p className="navbar-brand titulo-galery fs-2 text-light text-align-center my-auto text-wrap" >{category.data.title}</p>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link btn-outline-light text-light" href="#scrollspyHeading1">Descripción</a>
          </li>
          <li className="nav-item">
            <a className="nav-link btn-outline-light ms-3 text-light" href="#scrollspyHeading2">Curiosidades</a>
          </li>
        </ul>
      </nav>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-5">
          <RoomCarrousel category={category} />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-5">
          <AccordionRoom category={category} />
          <div className="mt-4">
         
            <Link to="/categoria-habitaciones">
              <Button variant="dark" size='lg' className='mx-2'>
                Ver más habitaciones
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div class="alert alert-primary text-center" role="alert">
        Reserva ahora por un precio de
        <p className='fs-3 mb-1'> ${category.data.precio}/noche.</p>
        <Link to="/reserva-habitaciones" class="alert-link"> ¡Aprovecha la oferta!</Link>
      </div>
      <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="mt-4 overflow-nav scrollspy-example p-3 rounded-2 mb-5" tabindex="0">
        <h4 id="scrollspyHeading1">Descripción del alojamiento</h4>
        <p className='my-4'>
          Nuestro alojamiento es mucho más que un simple lugar para descansar; es un refugio acogedor donde la comodidad y la hospitalidad se fusionan para brindarle una experiencia inolvidable. Ya sea que esté viajando por negocios o disfrutando de unas vacaciones, nuestro alojamiento está diseñado para satisfacer todas sus necesidades.
          <hr />
          Nuestras habitaciones y suites han sido decoradas con un toque de elegancia y comodidad. Cada detalle ha sido cuidadosamente considerado, desde la ropa de cama de alta calidad hasta el mobiliario sofisticado, creando un ambiente acogedor y relajante.
          <hr />
          Nuestro personal cordial y atento está dedicado a hacer que su estancia sea lo más placentera posible. Estamos disponibles las 24 horas del día para atender todas sus necesidades, desde proporcionar recomendaciones locales hasta brindar asistencia con cualquier solicitud especial.
        </p>
        <h4 id="scrollspyHeading2">Necesitas saber:</h4>
        <p className='my-4'>
          <ul className='my-2'>
            <li>Unidades adaptadas a personas con movilidad reducida</li>
            <li>Mascotas: no se admiten</li>
            <li>Caja fuerte en la recepción</li>
            <li>Zona de fumadores</li>
          </ul>
          <hr className='my-4'/>
          El alojamiento ofrece todos los días el desayuno. Los huéspedes podrán cocinar en la comodidad de su alojamiento, en su asador.
          Las comodidades incluyen estacionamiento limitado gratis, venta de entradas, centro de negocios y zona de picnic. Los huéspedes también podrán disfrutar de jardín y tv en zonas comunes. Por un cargo, la propiedad cuenta con servicio de traslado al aeropuerto, servicio de guarda-equipaje y servicio de lavandería.</p>
      </div>
    </>
  )
}

export default RoomDetail