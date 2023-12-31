import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UPDATE_SCHEMA_ADMIN } from "../../../helpers/validationsSchemas";
import { FiEdit } from "react-icons/fi";
import { axiosInstance } from "../../../config/axiosInstance";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import Spinner from "react-bootstrap/Spinner";
import datos from "../../../helpers/data";

const FormEditUser = ({ show, setShow, handleClose, idUser, getAllUsers }) => {
  const [editInputName, setEditInputName] = useState(true);
  const [editInputDni, setEditInputDni] = useState(true);
  const [editInputPhone, setEditInputPhone] = useState(true);
  const [userData, SetUserData] = useState({});

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(UPDATE_SCHEMA_ADMIN),
  });
  
  const getUserById = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axiosInstance.get(`/usuario/${idUser}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      SetUserData(response.data.user);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: `Ocurrió un problema! Error${error.response.data.status}`,
        text: `${error.response.data.mensaje}`,
      });
    }
  };
  useEffect(() => {
    getUserById();
  }, []);

  const onSubmit = async (data) => {
    const token = localStorage.getItem("token");
    try {
      setLoading(true);
      const response = await axiosInstance.put(`/usuario/${idUser}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      handleClose();
      Swal.fire({
        icon: "success",
        title: "Datos del usuario actualizados con éxito",
      });
      getAllUsers();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: `Ocurrió un problema! Error${error.response.data.status}`,
        text: `${error.response.data.mensaje}`,
      });
    } finally {
      setLoading(false); 
    }
  };

  return (
    <form className="text-white" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-2 pt-2">
        <label className="form-label">Correo electrónico</label>
        <div className="input-group mb-3">
          <input
            value={userData.username}
            disabled
            type="email"
            className="form-control"
            name="username"
            maxLength="40"
          />
        </div>
      </div>
      <div className="mb-2 pt-2">
        <label className="form-label">Nombre Completo</label>
        <div className="input-group mb-3">
          <input
            disabled={editInputName}
            placeholder={userData.name}
            type="text"
            className="form-control"
            name="name"
            {...register("name")}
            maxLength="40"
          />
          <button
            className={
              editInputName ? "btn btn-outline-light" : "btn btn-danger"
            }
            type="button"
            onClick={() => setEditInputName(!editInputName)}
          >
            <FiEdit />
          </button>
        </div>
      </div>
      <p className="text-danger my-1">{errors.name?.message}</p>
      <div className="mb-2 pt-2">
        <label className="form-label">DNI</label>
        <div className="input-group mb-3">
          <input
            disabled={editInputDni}
            placeholder={userData.dni}
            type="number"
            className="form-control"
            name="dni"
            {...register("dni")}
            maxLength="8"
            min={0}
          />
          <button
            className={
              editInputDni ? "btn btn-outline-light" : "btn btn-danger"
            }
            type="button"
            onClick={() => setEditInputDni(!editInputDni)}
          >
            <FiEdit />
          </button>
        </div>
      </div>
      <p className="text-danger my-1">{errors.dni?.message}</p>
      <div className="mb-2 pt-2">
        <label className="form-label">Número de celular</label>
        <div className="input-group">
          <select
            name="phoneCountry"
            className="input-group-text"
            id="inputGroup-sizing-default"
          >
            {datos.map((tel, idx) => {
              return (
                <option value={tel.codigo} key={idx}>
                  {tel.codigo}
                </option>
              );
            })}
          </select>
          <input
            placeholder="No incluir el 0"
            aria-describedby="inputGroup-sizing-default"
            aria-label="Sizing example input"
            type="number"
            className="form-control"
            name="phone"
            {...register("phone")}
            min={0}
            maxLength={15}
            minLength={6}
          />
          <button
            className={
              editInputPhone ? "btn btn-outline-light" : "btn btn-danger"
            }
            type="button"
            onClick={() => setEditInputPhone(!editInputPhone)}
          >
            <FiEdit />
          </button>
        </div>
      </div>
      <p className="text-danger my-1">{errors.cellPhone?.message}</p>
      <div className="mb-2 pt-2">
        <label className="form-label">Rol de Usuario</label>
        <select name="role" className="form-select" {...register("role")}>
          <option></option>
          <option value="user">user</option>
          <option value="admin">admin</option>
        </select>
      </div>
      <p className="text-danger my-1">{errors.role?.message}</p>
      {loading ? (
        <div className="text-center mt-4">
          <Spinner />
        </div>
      ) : (
        <>
          <button
            className="btn btn-outline-light boton-login mt-3"
            type="submit"
          >
            Guardar Cambios
          </button>
          <Button variant="light" className="mt-3 mx-2" onClick={handleClose}>
            Cancelar
          </Button>
        </>
      )}
    </form>
  );
};

export default FormEditUser;
