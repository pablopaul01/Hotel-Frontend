import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "../css/Contacto.css";

const Contacto = () => {
  return (
    <div>
      <div className="title-container">
        <h1 className="title-contact">Contacto</h1>
      </div>
      <div className="container d-flex justify-content-center">
      <div className="row justify-content-center col-lg-8 mt-5">
        <Form className="d-flex flex-column gap-3 p-lg-0 p-4 px-lg-5">
          <Row className="d-flex justify-content-between">
            <Col className="p-0">
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
            <button className='btn btn-brown'>Enviar</button>
          </Row>
        </Form>
      </div>
      </div>
      <div className="title-container">
        <h1 className="title-contact">Ubicación</h1>
      </div>
    </div>
  );
};

export default Contacto;
