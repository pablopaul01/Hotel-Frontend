import * as yup from "yup";

export const REGISTRO_SCHEMA = yup.object({
    name: yup.string().required("El nombre completo es requerido"),
    username: yup.string().matches(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,"El email no es válido").required("El email es requerido"),
    password: yup.string().matches(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,"La contraseña no es válida").required("La contraseña es requerida"),
    repassword: yup.string().oneOf([yup.ref("password"), null],"Las contraseñas no coinciden").required("La confirmación de contraseña es obligatoria") 
});

export const LOGIN_SCHEMA = yup.object({
    username: yup.string().matches(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,"El email no es válido").required("El email es requerido"),
    password: yup.string().matches(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,"La contraseña no es válida").required("La contraseña es requerida")
});