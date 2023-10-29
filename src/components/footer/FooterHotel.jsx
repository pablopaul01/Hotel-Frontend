import React from "react";
import "./Footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";


const FooterHotel = () => {
  return (
    <>
      <div className="footer-container container-fluid">
        <div className="row py-4 text-center text-md-start">
          <div className="col-md-4 col-12 d-flex justify-content-center">
            <Link to="/">
              <img
                src="https://res.cloudinary.com/dcv6aut2v/image/upload/v1695793253/RollingHotel-transparente_vk9yak.png"
                alt="logo Rolling"
                style={{ width: "140px" }}
              />
            </Link>
          </div>
          <div className="ubicacion-col col-lg-4 col-md-4 col-12">
            <h3 className="title-footer">Ubicación</h3>
            <p className="subtitle-footer mb-0">General Paz 576</p>
            <p className="subtitle-footer mb-0">
              San Miguel de Tucumán, Tucumán, Argentina
            </p>
            <p className="subtitle-footer mb-0">Tel.:(54-381)0000000</p>
            <p className="subtitle-footer mb-0">reservas@rollingranhotel.com</p>
            <div className="d-flex justify-content-center justify-content-md-start mb-3 mb-md-0 mt-1 gap-2">
              <FaInstagram />
              <FaFacebookSquare />
              <FaYoutube />
              <FaTiktok />
            </div>
          </div>
          <div className="reserva-col col-lg-4 col-md-4 col-12">
            <h3 className="title-footer">Reservas</h3>
            <p className="subtitle-footer mb-0">Celular:(54-381) 0000000</p>
            <p className="subtitle-footer mb-0">WhatsApp:(54-381) 0000000</p>
            <Link to="/reserva-habitaciones">
              <button className="button-footer mt-2">RESERVAR AHORA</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="container-fluid footer-derechos">
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <span>© 2023 | Todos los derechos reservados | Rolling Gran Hotel ©</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterHotel;
