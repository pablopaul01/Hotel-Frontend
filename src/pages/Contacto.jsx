import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "../css/Contacto.css";
import Mapa from "../components/Maps/Mapa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contacto = () => {
  return (
    <div>
      <div className="title-container ">
        <h1 className="title-contact titulo-contacto text-center mt-5">
          Contacto
        </h1>
      </div>
      <div className="container d-flex justify-content-center mt-2 mt-lg-5">
        <div className="row justify-content-center col-lg-8 ">
          <Form className="d-flex flex-column gap-3 p-lg-0 p-4 px-lg-5 w-lg-75">
            <Row className="d-flex justify-content-between">
              <Col className="p-0 me-2">
                <Form.Control placeholder="Nombre" />
              </Col>
              <Col className="p-0">
                <Form.Control placeholder="Apellido" />
              </Col>
            </Row>
            <Row>
              <Form.Control type="email" placeholder="E-mail" />
            </Row>
            <Row>
              <Form.Select aria-label="Asunto">
                <option>Elija una opción</option>
                <option value="1">Reseva</option>
                <option value="2">Servicios</option>
                <option value="3">Check in</option>
                <option value="3">Check out</option>
                <option value="3">Otros</option>
              </Form.Select>
            </Row>
            <Row>
              <Form.Control
                as="textarea"
                placeholder="Escriba su mensaje"
                style={{ height: "100px" }}
              />
            </Row>
            <Row>
              <button className="btn btn-brown">Enviar</button>
            </Row>
          </Form>
        </div>
      </div>
      <div className="title-container">
        <h1 className="title-contact titulo-contacto text-center my-5">
          Ubicación
        </h1>
        <div className="container mb-5">
          <div className="row">
            <div className="col-lg-6 col-12">
              <h3 className="ms-2 mb-3">Estamos:</h3>
              <ul className=" text-secondary">
                <li className="mb-3">en pleno centro comercial y cultural</li>
                <li className="mb-3">en zona de interés turístico</li>
                <li className="mb-3">a 1 cuadra de Plaza San Martín</li>
                <li className="mb-3">a 3 minutos del centro financiero</li>
                <li className="mb-3">a 5 minutos de la Terminal de Ómnibus</li>
                <li className="mb-3">
                  a 5 minutos de la Terminal Ferroviaria Retiro
                </li>
                <li className="mb-3">
                  a 30 minutos del Aeropuerto Internacional de Ezeiza
                </li>
              </ul>
            </div>
            <div className="col">
              <Mapa />
            </div>
          </div>
        </div>
      </div>
      <div className="banner-contacto">
        <h1 className="title-contact titulo-contacto text-center my-5">
          También puedes encontrarnos...
        </h1>
        <div className="d-flex justify-content-center mt-1 gap-3">
          <FaInstagram className="icons-contacto mb-3"/>
          <FaFacebookSquare className="icons-contacto mb-3" />
          <FaYoutube className="icons-contacto mb-3" />
          <FaTiktok className="icons-contacto mb-3" />
        </div>
      </div>
    </div>
  );
};

export default Contacto;
