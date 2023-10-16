import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UPDATE_SCHEMA_PERFIL } from "../../helpers/validationsSchemas";
import jwtDecode from "jwt-decode";
import { FiEdit } from "react-icons/fi";
import { axiosInstance } from "../../config/axiosInstance";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import Spinner from "react-bootstrap/Spinner";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import datos from "../../helpers/data";


const FormPerfil = ({ show, setShow, handleClose }) => {
  let token = localStorage.getItem("token");
  let decode = jwtDecode(token);

  const [editInputName, setEditInputName] = useState(true);
  const [editInputDni, setEditInputDni] = useState(true);
  const [editInputPhone, setEditInputPhone] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showInputPassword, setShowInputPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(UPDATE_SCHEMA_PERFIL),
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await axiosInstance.put(`/usuario/${decode.sub}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      handleClose();
      Swal.fire({
        icon: "success",
        title: "Datos de tu perfil actualizados con éxito",
      });
      localStorage.removeItem("token");
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: `Ocurrió un problema! Error${error.response.data.status}`,
        text: `${error.response.data.mensaje}`,
      });
    } finally {
      setLoading(false); // Oculta el spinner, ya sea éxito o error
    }
  };

  return (
    <form className="text-white" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-2 pt-2">
        <label className="form-label">Correo electrónico</label>
        <div className="input-group mb-3">
          <input
            value={decode.username}
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
            placeholder={decode.name}
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
            placeholder={decode.dni}
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
      <p className="text-danger my-1">{errors.phone?.message}</p>

      {showInputPassword ? (
        <>
          <div className="mb-2 pt-2">
            <label className="form-label">Contraseña nueva</label>
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                name="password"
                {...register("password")}
                maxLength={16}
                minLength={8}
              />
              <span
                className={
                  showPassword
                    ? "input-group-text btn btn-danger"
                    : "input-group-text btn btn-outline-danger"
                }
                onClick={() => setShowPassword(!showPassword)}
                style={{ cursor: "pointer" }}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
          </div>
          <p className="text-danger my-1">{errors.password?.message}</p>
          <div className="mb-2 pt-2">
            <label className="form-label">Repetir Contraseña Nueva</label>
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                name="repassword"
                {...register("repassword")}
                maxLength={16}
                minLength={8}
              />
              <span
                className={
                  showPassword
                    ? "input-group-text btn btn-danger"
                    : "input-group-text btn btn-outline-danger"
                }
                onClick={() => setShowPassword(!showPassword)}
                style={{ cursor: "pointer" }}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
          </div>

          <p className="text-danger my-1">{errors.repassword?.message}</p>
          <small className="text-secondary">
            La contraseña debe tener al entre 8 y 16 caracteres, al menos un
            dígito, al menos una minúscula y al menos una mayúscula.
          </small>
          <a
            className="btn btn-sm btn-outline-warning mt-3 d-flex justify-content-center"
            onClick={() => setShowInputPassword(!showInputPassword)}
          >
            Conservar clave
          </a>
        </>
      ) : (
        <a
          className="btn btn-sm btn-outline-danger mt-3 d-flex justify-content-center"
          onClick={() => setShowInputPassword(!showInputPassword)}
        >
          Cambiar clave
        </a>
      )}
      {loading ? (
        <div className="mt-4 text-center">
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

export default FormPerfil;
