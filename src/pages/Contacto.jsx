import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "../css/Contacto.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { FORM_SCHEMA } from '../helpers/validationsSchemas'
import { yupResolver } from '@hookform/resolvers/yup'
import Swal from "sweetalert2";


const Contacto = () => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(FORM_SCHEMA)
  })

  const onSubmit = () => {

    Swal.fire({
      icon: "success",
      title: "El formulario se mando correctamente!",
      text: "Pronto le estaremos contestando"
    })
    reset();
  }

  return (
    <div>
      <div className="title-container ">
        <h1 className="title-contact titulo-contacto text-center mt-5">
          Contacto
        </h1>
      </div>
      <div className="container d-flex justify-content-center mt-2 mt-lg-5">
        <div className="row justify-content-center col-lg-8 ">
          <Form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column gap-3 p-lg-0 p-4 px-lg-5 w-lg-75">
            <Row className="d-flex justify-content-between">
              <Col className="p-0 me-2">
                <Form.Control
                  placeholder="Nombre"
                  name="name"
                  {...register("name")} />
                <p className="text-danger my-1">
                  {errors.name?.message}
                </p>
              </Col>
              <Col className="p-0">
                <Form.Control
                  placeholder="Apellido"
                  name="surname"
                  {...register("surname")} />
                <p className="text-danger my-1">
                  {errors.surname?.message}
                </p>
              </Col>
            </Row>
            <Row>
              <Form.Control
                type="email"
                placeholder="E-mail"
                name="username"
                {...register("username")} />
              <p className="text-danger my-1">
                {errors.username?.message}
              </p>
            </Row>
            <Row>
              <Form.Select required aria-label="Asunto">
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
                className="textarea"
                name="description"
                {...register("description")}
              />
              <p className="text-danger my-1">
                {errors.description?.message}
              </p>
            </Row>
            <Row>
              <button type="submit" className="btn btn-brown">Enviar</button>
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
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.118032695636!2d-65.20965262546022!3d-26.83619789000945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c0e8d0271b7%3A0x7946062ac490db30!2sGral.%20Paz%20576%2C%20T4000%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses-419!2sar!4v1697069770424!5m2!1ses-419!2sar" className="img-fluid w-100" style={{ height: 350 }} ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-contacto p-2">
        <h3 className="title-contact titulo-contacto text-center my-5 fs-2">
          También puedes encontrarnos...
        </h3>
        <div className="d-flex justify-content-center mb-2 gap-3">
          <a href="/404" className="icons-contacto me-3"><FaInstagram className="mb-3" /></a>
          <a href="/404" className="icons-contacto mx-3"><FaFacebookSquare className="mb-3" /></a>
          <a href="/404" className="icons-contacto mx-3"><FaYoutube className="mb-3" /></a>
          <a href="/404" className="icons-contacto ms-3"><FaTiktok className="mb-3" /></a>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
