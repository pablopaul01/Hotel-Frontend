import React from 'react'
import AccordionRoom from './AccordionRoom'
import RoomCarrousel from './RoomCarrousel'
import Button from 'react-bootstrap/Button'
import './roomDetail.css'
import { Link } from 'react-router-dom'


const RoomDetail = ({ category }) => {
 

  const { data } = category;

  return (
    <>
      <nav id="navbar-example2" className="navbar bg-body-tertiary px-3 mb-3">
        <p className="navbar-brand titulo-galery fs-2" >{data.title}</p>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link btn-outline-light text-light" href="#scrollspyHeading1">Descripción</a>
          </li>
          <li className="nav-item">
            <a className="nav-link btn-outline-light ms-1 text-light" href="#scrollspyHeading2">Curiosidades</a>
          </li>
        </ul>
      </nav>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-5">
          <RoomCarrousel category={category} />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-5">
          <AccordionRoom />
          <div className="mt-4">
            {/* <ModalReserva /> */}
            <Link to="/reserva-habitaciones">
              <Button size='lg' className='mx-2 btn-outline-light text-light'>
                Ir a reservar
              </Button>
            </Link>
            <Link to="/categoria-habitaciones">
              <Button variant="secondary" size='lg' className='mx-2'>
                Ver más habitaciones
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <h3 className="mb-4 text-center">
        <i>Reserva ahora por un precio de
          <b className='text-secondary'> ${data.precio}</b>
        </i>
        <small className='fs-6 text-secondary'>/noche</small>
      </h3>
      <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="overflow-nav scrollspy-example bg-body-tertiary p-3 rounded-2 mb-5" tabindex="0">
        <h4 id="scrollspyHeading1">Descripción del alojamiento</h4>
        <p>
          El Grace Cafayate ofrece piscina al aire libre y piscina cubierta y está situado en Cafayate, rodeado por viñedos preciosos y con vistas panorámicas a los Andes. Además, proporciona WiFi gratuita y se encuentra a 2 km del centro de la localidad.

          Las habitaciones disponen de TV de pantalla plana con canales vía satélite, aire acondicionado, terraza, baño privado con ducha, albornoz y secador de pelo y minibar. Algunas de ellas tienen vistas a las montañas.

          El Grace Cafayate cuenta con spa, restaurante gourmet a la carta, abierto en determinados días y a horas concretas, mostrador de información turística, consigna de equipaje y servicio de planchado. En las inmediaciones se pueden practicar diversas actividades, como equitación.

          Este hotel de lujo también alberga una enoteca, un bar junto a la piscina y un jardín. El establecimiento se encuentra a 2,7 km de los viñedos de Cafayate y a 14 km de los viñedos de San Carlos.

          Asimismo, el alojamiento está a 2 horas y media en coche del aeropuerto internacional Martín Miguel de Güemes.</p>
        <h4 id="scrollspyHeading2">Necesitas saber:</h4>
        <p>
          <ul>
            <li>Unidades adaptadas a personas con movilidad reducida</li>
            <li>Mascotas: no se admiten</li>
            <li>Caja fuerte en la recepción</li>
            <li>Zona de fumadores</li>
          </ul>
          El alojamiento ofrece todos los días el desayuno. Los huéspedes podrán cocinar en la comodidad de su alojamiento, en su asador.
          Las comodidades incluyen estacionamiento limitado gratis, venta de entradas, centro de negocios y zona de picnic. Los huéspedes también podrán disfrutar de jardín y tv en zonas comunes. Por un cargo, la propiedad cuenta con servicio de traslado al aeropuerto, servicio de guarda-equipaje y servicio de lavandería.</p>
      </div>
    </>
  )
}

export default RoomDetail