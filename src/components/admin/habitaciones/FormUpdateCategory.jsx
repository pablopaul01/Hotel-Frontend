import React, { useState, useEffect } from "react";
import "../../register/register.css";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CREATECATEGORY_SCHEMA } from "../../../helpers/validationsSchemas";
import { axiosInstance } from "../../../config/axiosInstance";
import { Button } from "react-bootstrap";
import { FiEdit } from 'react-icons/fi'

const FormUpdateCategory = ({ categorie, setCategorie, show, handleClose }) => {
  const [categories, setCategories] = useState([]);
  const [idCategorie, setIdCategorie] = useState("");
  const [imgFile, setImgFile] = useState([]);
  const [editInputTitle, setEditInputTitle] = useState(false)
  const [editInputPrice, setEditInputPrice] = useState(false)
  const [editInputDesc, setEditInputDesc] = useState(true)
  const [editInputGuest, setEditInputGuest] = useState(false)
  const [formDatos, setFormDatos] = useState({
    title: "",
    capacidadMax: "",
    descripcion: "",
    precio: "",
    roomNumbers: [],
  });

  //   const getCategoriesDb = async () => {
  //   const token = localStorage.getItem("token");
  //   const response = await axiosInstance.get("/categorias", {
  //     headers: {
  //       Authorization: `Bearer ${token}`
  //     }
  //   });

  //   setCategories(response.data.categories);
  // }

  // useEffect(() => {
  //   getCategoriesDb();

  // }, [])

  const handleChangeDatos = (e) => {
    if (e.target.name.startsWith("roomNumbers")) {
      const index = parseInt(e.target.name.match(/\[(\d+)\]/)[1]);
      const newRoomNumbers = [...formDatos.roomNumbers];
      newRoomNumbers[index] = { number: parseInt(e.target.value) };
      setFormDatos({
        ...formDatos,
        roomNumbers: newRoomNumbers,
      });
    } else {
      setFormDatos({
        ...formDatos,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleImges = (e) => {
    setImgFile([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    const token = localStorage.getItem("token");
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", formDatos.title);
      formData.append("capacidadMax", formDatos.capacidadMax);
      formData.append("precio", formDatos.precio);
      formData.append("descripcion", formDatos.descripcion);
      formData.append("roomNumbers", JSON.stringify(formDatos.roomNumbers));
      for (let index = 0; index < imgFile.length; index++) {
        formData.append("imagenes", imgFile[index]);
      }

      const resp = await axiosInstance.post("/crear/categoria", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log(resp.data)
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };
 console.log(editInputDesc)
  return (
    <div>
      <form
        className="form-container"
        onSubmit={handleSubmit}
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
              onChange={handleChangeDatos}
              value={categorie.title}
            />
            <button className="btn btn-outline-light" type="button" onClick={() => setEditInputTitle(!editInputTitle)}><FiEdit /></button>
          </div>
        </div>
        {/* <p className="text-danger my-1">
                {errors.title?.message}
            </p> */}
        <div className="mb-2 pt-2">
          <label className="form-label">Precio</label>
            <div className="input-group">
            <input
            type="number"
            className="form-control"
            name="precio"
            disabled={editInputPrice}
            onChange={handleChangeDatos}
            value={categorie.precio}
          />
          <button className="btn btn-outline-light" type="button" onClick={() => setEditInputPrice(!editInputPrice)}><FiEdit /></button>
            </div>
        </div>
        {/* <p className="text-danger my-1">
                {errors.precio?.message}
            </p> */}
        <div className="mb-2 pt-2">
          <label className="form-label">Capacidad máxima de personas</label>
          <div className="input-group">
          <input
            type="number"
            className="form-control"
            name="capacidadMax"
            disabled={editInputGuest}
            onChange={handleChangeDatos}
            value={categorie.capacidadMax}
          />
          <button className="btn btn-outline-light" type="button" onClick={() => setEditInputGuest(!editInputGuest)}><FiEdit /></button>
          </div>
        </div>
        {/* <p className="text-danger my-1">
                {errors.capacidadMax?.message}
            </p> */}
        <div className="mb-2 pt-2">
          <label className="form-label">Descripción</label>
          <div className="input-group">
          <textarea
            className="form-control"
            name="descripcion"
            disabled={editInputDesc}
            onChange={handleChangeDatos}
            value={categorie.descripcion}
          />
          <button className="btn btn-outline-light" type="button" onClick={() => setEditInputDesc(!editInputDesc)}><FiEdit /></button>
          </div>
        </div>
        {/* <p className="text-danger my-1">
                {errors.descripcion?.message}
            </p> */}

        {/* <div className="mb-2 pt-2">
                <label className="form-label">Imágenes</label>
                <input
                    type="file"
                    className="form-control"
                    name="imagenes"
                    onChange={handleImges}
                    multiple
                />
            </div> */}
        <div className="mb-2 pt-2">
          <label className="form-label">Números de habitaciones</label>
          <div>
            <span>
              { categorie.roomNumbers.map(room => 
                <span>{room.number}, </span>
                )}
            </span>
            {/* {Array.from({ length: 5 }).map((_, index) => (
                        <div key={index} className="mb-2">
                            <input
                                type="number"
                                className="form-control"
                                name={`roomNumbers[${index}].number`}
                                onChange={handleChangeDatos}
                            />
                            <p className="text-danger my-1">
                                {errors?.roomNumbers?.[index]?.number?.message}
                            </p>
                        </div>
                    ))} */}
          </div>
        </div>
        <button
          className="btn btn-outline-light boton-login mt-3"
          type="submit"
        >
          Guardar cambios
        </button>
        <Button variant="light" className="mt-3 mx-2" onClick={handleClose}>
          Cancelar
        </Button>
      </form>
    </div>
  );
};

export default FormUpdateCategory;
