import React from "react";
import "../css/nosotros.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";

const Nosotros = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 col-12">
          <h1 className="titulo-nosotros">¿Quiénes somos?</h1>
          <p className="fs-3 parrafo-nosotros mt-4">
            Somos un grupo interesado en aprender día a día e investigar las
            últimas tecnologías, nos estamos preparando para dar todo cuando sea
            necesario y esperamos grandes cosas de cada uno de nosotros de cara
            al futuro. Este sitio se consiguió con mucho esfuerzo, dedicación e
            investigación, no quedan dudas de que cada unos de los miembros de
            este equipo va a ganarse su lugar a donde sea que vaya.
            
          </p>
        </div>
        <div className="col text-center">
          <img
            className="img-fluid img-nosotros"
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
            alt="nosotros"
          />
        </div>
      </div>
      <h2 className="titulo-nosotros text-center my-5">Developers</h2>
      <div className="row mb-5">
        <div className="col-12 col-md-4">
          <Card className="card-nosotros mb-3 mb-md-0">
            <Card.Img
              variant="top"
              src="https://ca.slack-edge.com/THQU1MGPN-U04CLGF6BPE-39348c7cc1d9-512"
            />
            <Card.Body>
              <Card.Title className=" text-light titulo-card-contacto text-center mb-3">
                Eliana Farías
              </Card.Title>
              <div className="d-grid gap-2">
              <a
                    href="https://github.com/elifarias"
                    target="_blanck"
                    className="btn btn-light btn-lg boton-card-contacto block d-flex justify-content-between"
                  >
                    GitHub
                  <FaGithub />
                  </a>
                  <a
                    href="https://mail.google.com/mail/u/0/?fs=1&to=farias.elianama@gmail.com&tf=cm"
                    target="_blanck"
                    className="btn btn-light btn-lg boton-card-contacto block d-flex justify-content-between"
                  >
                    Correo
                    <AiOutlineMail />
                  </a>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-12 col-md-4">
          <Card className="card-nosotros mb-3 mb-md-0">
            <Card.Img
              variant="top"
              src="https://ca.slack-edge.com/THQU1MGPN-U03UC41M119-c575478561f8-512"
            />
            <Card.Body>
              <Card.Title className=" text-light titulo-card-contacto text-center mb-3">
                Franco Giacobbe
              </Card.Title>
              <div className="d-grid gap-2">
              <a
                    href="https://github.com/frandg47"
                    target="_blanck"
                    className="btn btn-light btn-lg boton-card-contacto block d-flex justify-content-between"
                  >
                    GitHub
                  <FaGithub />
                  </a>
                  <a
                    href="https://mail.google.com/mail/u/0/?fs=1&to=frandg47@gmail.com&tf=cm"
                    target="_blanck"
                    className="btn btn-light btn-lg boton-card-contacto block d-flex justify-content-between"
                  >
                    Correo
                    <AiOutlineMail />
                  </a>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-12 col-md-4">
          <Card className="card-nosotros mb-3 mb-md-0">
            <Card.Img
              variant="top"
              src="https://ca.slack-edge.com/THQU1MGPN-U04D4DYJ19C-f907ca3cddb0-512"
            />
            <Card.Body>
              <Card.Title className=" text-light titulo-card-contacto text-center mb-3">
                Juan Pablo Salomón
              </Card.Title>
              <div className="d-grid gap-2">
               
                  <a
                    href="https://github.com/pablopaul01"
                    target="_blanck"
                    className="btn btn-light btn-lg boton-card-contacto block d-flex justify-content-between"
                  >
                    GitHub
                  <FaGithub />
                  </a>
                  <a
                    href=""
                    target="_blanck"
                    className="btn btn-light btn-lg boton-card-contacto block d-flex justify-content-between"
                  >
                    Correo
                    <AiOutlineMail />
                  </a>
               

               
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
