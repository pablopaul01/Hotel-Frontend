import React, { useState, useEffect } from "react";
import "../../register/register.css";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UPDATECATEGORY_SCHEMA } from "../../../helpers/validationsSchemas";
import { axiosInstance } from "../../../config/axiosInstance";
import { Button } from "react-bootstrap";
import { FiEdit } from 'react-icons/fi'
import Swal from 'sweetalert2';
import Spinner from 'react-bootstrap/Spinner';


const FormUpdateCategory = ({ categorie, setCategorie, show, handleClose, getCategories }) => {
  const [editInputTitle, setEditInputTitle] = useState(true)
  const [editInputPrice, setEditInputPrice] = useState(true)
  const [editInputDesc, setEditInputDesc] = useState(true)
  const [editInputGuest, setEditInputGuest] = useState(true)
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(UPDATECATEGORY_SCHEMA)
  })

  const onSubmit = async (data) => {

    const token = localStorage.getItem("token");
    try {
      setLoading(true);
      const response = await axiosInstance.put(`/categoria/${categorie._id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      handleClose();
      getCategories()
      Swal.fire({
        icon: "success",
        title: "Datos de la categoría actualizados con éxito"
      })

    } catch (error) {
      Swal.fire({
        icon: "error",
        title: `Ocurrió un problema! Error${error.response.data.status}`,
        text: `${error.response.data.mensaje}`
      })
    } finally {
      setLoading(false); // Oculta el spinner, ya sea éxito o error
    }
  }

  return (
    <div>
      <form
        className="form-container"
        onSubmit={handleSubmit(onSubmit)}
        enctype="multipart/form-data"
      >
        <div className="mb-2 pt-2">
          <label className="form-label">Nombre de Categoría</label>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              name="title"
              disabled={editInputTitle}
              placeholder={categorie.title}
              {...register("title")}
              maxLength={40}
            />
            <button
              className={editInputTitle ? ("btn btn-outline-light") : ("btn btn-danger")}
              type="button"
              onClick={() => setEditInputTitle(!editInputTitle)}>
              <FiEdit />
            </button>
          </div>
        </div>
        <p className="text-danger my-1">
          {errors.title?.message}
        </p>
        <div className="mb-2 pt-2">
          <label className="form-label">Precio</label>
          <div className="input-group">
            <input
              type="number"
              className="form-control"
              name="precio"
              disabled={editInputPrice}
              placeholder={categorie.precio}
              min={0}
              {...register("precio")}
            />
            <button
              className={editInputPrice ? ("btn btn-outline-light") : ("btn btn-danger")}
              type="button"
              onClick={() => setEditInputPrice(!editInputPrice)}>
              <FiEdit />
            </button>
          </div>
        </div>
        <p className="text-danger my-1">
          {errors.precio?.message}
        </p>
        <div className="mb-2 pt-2">
          <label className="form-label">Capacidad máxima de personas</label>
          <div className="input-group">
            <input
              type="number"
              className="form-control"
              name="capacidadMax"
              disabled={editInputGuest}
              placeholder={categorie.capacidadMax}
              {...register("capacidadMax")}
              min={1}
            />
            <button
              className={editInputGuest ? ("btn btn-outline-light") : ("btn btn-danger")}
              type="button"
              onClick={() => setEditInputGuest(!editInputGuest)}>
              <FiEdit />
            </button>
          </div>
        </div>
        <p className="text-danger my-1">
          {errors.capacidadMax?.message}
        </p>
        <div className="mb-2 pt-2">
          <label className="form-label">Descripción</label>
          <div className="input-group">
            <textarea
              className="form-control textarea"
              name="descripcion"
              disabled={editInputDesc}
              placeholder={categorie.descripcion}
              style={{ height: "100px" }}
              {...register("descripcion")}
              maxLength={200}
            />
            <button
              className={editInputDesc ? ("btn btn-outline-light") : ("btn btn-danger")}
              type="button"
              onClick={() => setEditInputDesc(!editInputDesc)}>
              <FiEdit />
            </button>
          </div>
        </div>
        <p className="text-danger my-1">
          {errors.descripcion?.message}
        </p>
        <div className="mb-2 pt-2">
          <label className="form-label">Números de habitaciones</label>
          <div>
            <span>
              {categorie?.roomNumbers?.map(room =>
                <span key={room._id}>{room.number}, </span>
              )}
            </span>
          </div>
        </div>
        {
          loading ?
            (
              <div className="d-grid mt-3 justify-content-center mt-4 mb-3">
                <Spinner />
              </div>
            )
            :
            (
              <>
                <button
                  className="btn btn-outline-light boton-login mt-3"
                  type="submit"
                >
                  Guardar cambios
                </button>
                <Button variant="light" className="mt-3 mx-2" onClick={handleClose}>
                  Cancelar
                </Button>
              </>
            )
        }
      </form>
    </div>
  );
};

export default FormUpdateCategory;
