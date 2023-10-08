import React from "react";
import "../css/nosotros.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {FaGithub} from "react-icons/fa"
import {AiOutlineMail} from "react-icons/ai"

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
      <div className="row">
        <div className="col-12 col-md-4">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="https://assets.stickpng.com/images/585e4bd7cb11b227491c3397.png" />
            <Card.Body>
              <Card.Title className="fs-3">Eliana Farías</Card.Title>
              <div className="d-grid gap-2">
                <Button variant="outline-dark" size="lg" className="block d-flex justify-content-between">
                  GitHub
                  <FaGithub/>
                </Button>
                <Button variant="outline-dark" size="lg" className="block d-flex justify-content-between">
                  Correo
                  <AiOutlineMail/>
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-12 col-md-4">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="https://assets.stickpng.com/images/585e4bd7cb11b227491c3397.png" />
            <Card.Body>
              <Card.Title className="fs-3">Franco Giacobbe</Card.Title>
              <div className="d-grid gap-2">
                <Button variant="outline-dark" size="lg" className="block d-flex justify-content-between">
                  GitHub
                  <FaGithub/>
                </Button>
                <Button variant="outline-dark" size="lg" className="block d-flex justify-content-between">
                  Correo
                  <AiOutlineMail/>
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-12 col-md-4">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="https://assets.stickpng.com/images/585e4bd7cb11b227491c3397.png" />
            <Card.Body>
              <Card.Title className="fs-7">Juan Pablo Salomón</Card.Title>
              <div className="d-grid gap-2">
                <Button variant="outline-dark" size="lg" className="block d-flex justify-content-between">
                  GitHub
                  <FaGithub/>
                </Button>
                <Button variant="outline-dark" size="lg" className="block d-flex justify-content-between">
                  Correo
                  <AiOutlineMail/>
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
