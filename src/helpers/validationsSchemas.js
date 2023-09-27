import * as yup from "yup";

export const REGISTRO_SCHEMA = yup.object({
    name: yup.string().required("El nombre es requerido"),
    username: yup.string().required("El email es requerido"),
    password: yup.string().matches(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,"La contraseña no cumple los requisitos").required("La contraseña es requerida"),
    repassword: yup.string().oneOf([yup.ref("password"), null],"Las contraseñas no coinciden").required("La confirmación de contraseña es obligatoria") 
});

// export const LOGIN_SCHEMA = yup.object({
//     username: yup.string().required("El email es requerido"),
//     password: yup.string().min(8,"Debe contener al menos 8 carácteres").max(16,"El máximo de caracteres es 16").required("La contraseña es requerida")
// });